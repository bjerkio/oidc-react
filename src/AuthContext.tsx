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
} from './AuthContextInterface';

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

  return Boolean(
    searchParams.get('code') ||
      searchParams.get('id_token') ||
      searchParams.get('session_state') ||
      hashParams.get('code') ||
      hashParams.get('id_token') ||
      hashParams.get('session_state'),
  );
};
/**
 * @private
 * @hidden
 * @param props
 */
export const initUserManager = (props: AuthProviderProps): UserManager => {
  if (props.userManager) return props.userManager;
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
  } = props;
  return new UserManager({
    authority: authority || '',
    client_id: clientId || '',
    client_secret: clientSecret,
    redirect_uri: redirectUri || '',
    silent_redirect_uri: silentRedirectUri || redirectUri,
    post_logout_redirect_uri: postLogoutRedirectUri || redirectUri,
    response_type: responseType || 'code',
    scope: scope || 'openid',
    loadUserInfo: loadUserInfo !== undefined ? loadUserInfo : true,
    popupWindowFeatures: popupWindowFeatures,
    popup_redirect_uri: popupRedirectUri,
    popupWindowTarget: popupWindowTarget,
    automaticSilentRenew,
    extraQueryParams,
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
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<User | null>(null);
  const [userManager] = useState<UserManager>(() => initUserManager(props));
  const isMountedRef = useRef<boolean>(false);

  const signOutHooks = useCallback(async (): Promise<void> => {
    setUserData(null);
    onSignOut && onSignOut();
  }, [onSignOut]);
  const signInPopupHooks = useCallback(async (): Promise<void> => {
    const userFromPopup = await userManager.signinPopup();
    setUserData(userFromPopup);
    onSignIn && onSignIn(userFromPopup);
    await userManager.signinPopupCallback();
  }, [userManager, onSignIn]);

  useEffect(() => {
    isMountedRef.current = true;
    (async () => {
      const user = await userManager!.getUser();
      /**
       * Check if the user is returning back from OIDC.
       */
      if (!user && hasCodeInUrl(location)) {
        const user = (await userManager.signinCallback()) || null;
        setUserData(user);
        setIsLoading(false);
        onSignIn && onSignIn(user);
        return;
      }

      if ((!user || user.expired) && autoSignIn) {
        const state = onBeforeSignIn ? onBeforeSignIn() : undefined;
        await userManager.signinRedirect({ ...autoSignInArgs, state });
      } else if (isMountedRef.current) {
        setUserData(user);
        setIsLoading(false);
      }
    })();
    return () => {
      isMountedRef.current = false;
    };
  }, [location, userManager, autoSignIn, onBeforeSignIn, onSignIn]);

  /**
   * Registers UserManager event callbacks for handling changes to user state due to automaticSilentRenew, session expiry, etc.
   */
  useEffect(() => {
    const updateUserData: UserLoadedCallback = (user: User): void => {
      setUserData(user);
    };
    const onSilentRenewError: SilentRenewErrorCallback = async (
      error: Error,
    ): Promise<void> => {
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
