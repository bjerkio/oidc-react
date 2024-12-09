import React, {
  FC,
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  useMemo,
  useCallback,
} from 'react';
import {
  UserManager,
  User,
  SigninRedirectArgs,
  SignoutRedirectArgs,
  UserLoadedCallback,
  SilentRenewErrorCallback,
} from 'oidc-client-ts';
import {
  Location,
  AuthProviderProps,
  AuthContextProps,
} from './auth-context-interface';

export const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined,
);

/**
 * @private
 * @hidden
 * @param location
 */
export const hasCodeInUrl = (location: Location): boolean => {
  const searchParams = new URLSearchParams(location.search);
  const hashParams = new URLSearchParams(location.hash.replace('#', '?'));

  return (
    searchParams.has('code') ||
    searchParams.has('id_token') ||
    searchParams.has('session_state') ||
    hashParams.has('code') ||
    hashParams.has('id_token') ||
    hashParams.has('session_state')
  );
};
/**
 * @private
 * @hidden
 * @param props
 */
export const initUserManager = (props: AuthProviderProps): UserManager => {
  if (props.userManager) {
    return props.userManager;
  }

  const {
    authority,
    clientId,
    clientSecret,
    redirectUri,
    silentRedirectUri,
    postLogoutRedirectUri,
    responseType,
    scope,
    automaticSilentRenew,
    loadUserInfo,
    popupWindowFeatures,
    popupRedirectUri,
    popupWindowTarget,
    extraQueryParams,
    metadata,
  } = props;
  return new UserManager({
    authority: authority ?? '',
    client_id: clientId ?? '',
    client_secret: clientSecret,
    redirect_uri: redirectUri ?? '',
    silent_redirect_uri: silentRedirectUri ?? redirectUri,
    post_logout_redirect_uri: postLogoutRedirectUri ?? redirectUri,
    response_type: responseType ?? 'code',
    scope: scope ?? 'openid',
    loadUserInfo: loadUserInfo ?? true,
    popupWindowFeatures: popupWindowFeatures,
    popup_redirect_uri: popupRedirectUri,
    popupWindowTarget: popupWindowTarget,
    automaticSilentRenew,
    extraQueryParams,
    metadata: metadata,
  });
};

/**
 *
 * @param props AuthProviderProps
 */
export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({
  children,
  autoSignIn = true,
  autoSignInArgs,
  autoSignOut = true,
  autoSignOutArgs,
  onBeforeSignIn,
  onSignIn,
  onSignOut,
  location = window.location,
  onSignInError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<User | null>(null);
  const [userManager] = useState<UserManager>(() => initUserManager(props));
  const isMountedRef = useRef<boolean>(false);

  const signOutHooks = useCallback(async (): Promise<void> => {
    setUserData(null);
    if (onSignOut) {
      await onSignOut();
    }
  }, [onSignOut]);
  const signInPopupHooks = useCallback(async (): Promise<void> => {
    const userFromPopup = await userManager.signinPopup();
    setUserData(userFromPopup);
    if (onSignIn) {
      await onSignIn(userFromPopup);
    }
    await userManager.signinPopupCallback();
  }, [userManager, onSignIn]);

  /**
   * Handles user auth flow on initial render.
   */
  useEffect(() => {
    let isMounted = true;
    isMountedRef.current = true;
    setIsLoading(true);
    void (async () => {
      if (!userManager) {
        return;
      }

      const user = await userManager.getUser();

      // isMountedRef cannot be used here as its value is updated by next useEffect.
      // We intend to keep context of current useEffect.
      if (isMounted && (!user || user.expired)) {
        // If the user is returning back from the OIDC provider, get and set the user data.
        if (hasCodeInUrl(location)) {
          try {
            const user = await userManager.signinCallback();
            if (user) {
              setUserData(user);
              if (onSignIn) {
                await onSignIn(user);
              }
            }
          } catch (error) {
            if (onSignInError) {
              onSignInError(error as Error);
            } else {
              throw error;
            }
          }
        }
        // If autoSignIn is enabled, redirect to the OIDC provider.
        else if (autoSignIn) {
          const state = onBeforeSignIn ? onBeforeSignIn() : undefined;
          await userManager.signinRedirect({ ...autoSignInArgs, state });
        }
      }
      // Otherwise if the user is already signed in, set the user data.
      else if (isMountedRef.current) {
        setUserData(user);
      }
      setIsLoading(false);
    })();
    return () => {
      isMounted = false;
      isMountedRef.current = false;
    };
  }, [
    location,
    userManager,
    autoSignIn,
    onBeforeSignIn,
    onSignIn,
    onSignInError,
  ]);

  /**
   * Registers UserManager event callbacks for handling changes to user state due to automaticSilentRenew, session expiry, etc.
   */
  useEffect(() => {
    const updateUserData: UserLoadedCallback = (user: User): void => {
      if (isMountedRef.current) {
        setUserData(user);
      }
    };
    const onSilentRenewError: SilentRenewErrorCallback =
      async (): Promise<void> => {
        if (autoSignOut) {
          await signOutHooks();
          await userManager.signoutRedirect(autoSignOutArgs);
        }
      };
    userManager.events.addUserLoaded(updateUserData);
    userManager.events.addSilentRenewError(onSilentRenewError);
    return () => {
      userManager.events.removeUserLoaded(updateUserData);
      userManager.events.removeSilentRenewError(onSilentRenewError);
    };
  }, [userManager]);

  const value = useMemo<AuthContextProps>(() => {
    return {
      signIn: async (args?: SigninRedirectArgs): Promise<void> => {
        await userManager.signinRedirect(args);
      },
      signInPopup: async (): Promise<void> => {
        await signInPopupHooks();
      },
      signOut: async (): Promise<void> => {
        await userManager.removeUser();
        await signOutHooks();
      },
      signOutRedirect: async (args?: SignoutRedirectArgs): Promise<void> => {
        await userManager.signoutRedirect(args);
        await signOutHooks();
      },
      userManager,
      userData,
      isLoading,
    };
  }, [userManager, isLoading, userData, signInPopupHooks, signOutHooks]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
