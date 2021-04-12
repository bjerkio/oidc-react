import React, { FC, useState, useReducer, useEffect } from 'react';
import { UserManager } from 'oidc-client';
import {
  Location,
  AuthProviderProps,
  AuthState,
  AuthContextProps,
} from './AuthContextInterface';
import { reducer } from './reducer';

export const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

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
 * Create a new UserManager or make use of passed in.
 */
const initUserManager = (props: AuthProviderProps): UserManager => {
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
  } = props;
  return new UserManager({
    authority,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    silent_redirect_uri: silentRedirectUri || redirectUri,
    post_logout_redirect_uri: postLogoutRedirectUri || redirectUri,
    response_type: responseType || 'code',
    scope: scope || 'openid',
    loadUserInfo: loadUserInfo !== undefined ? loadUserInfo : true,
    popupWindowFeatures: popupWindowFeatures,
    popup_redirect_uri: popupRedirectUri,
    popupWindowTarget: popupWindowTarget,
    automaticSilentRenew,
  });
};

/**
 * The initial auth state.
 */
const initialAuthState: AuthState = {
  isLoading: true,
};

/**
 *
 * @param props AuthProviderProps
 */
export const AuthProvider: FC<AuthProviderProps> = ({
  children,
  autoSignIn = true,
  onBeforeSignIn,
  onSignIn,
  onSignOut,
  location = window.location,
  ...props
}) => {
  const [userManager] = useState<UserManager>(initUserManager(props));
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const signOutHooks = async (): Promise<void> => {
    dispatch({ type: 'SIGNOUT' });
    onSignOut && onSignOut();
  };
  const signInPopupHooks = async (): Promise<void> => {
    dispatch({ type: 'LOGIN_POPUP_STARTED' });
    const user = await userManager.signinPopup();
    onSignIn && onSignIn(user);
    await userManager.signinPopupCallback();
    dispatch({ type: 'LOGIN_POPUP_COMPLETE', user });
  };

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      /**
       * Check if the user is returning back from OIDC.
       */
      if (hasCodeInUrl(location)) {
        const user = await userManager.signinCallback();
        dispatch({ type: 'INITIALISED', user });
        onSignIn && onSignIn(user);
        return;
      }

      const user = await userManager!.getUser();
      if ((!user || user.expired) && autoSignIn) {
        onBeforeSignIn && onBeforeSignIn();
        userManager.signinRedirect();
      } else {
        dispatch({ type: 'INITIALISED', user });
      }
      return;
    };
    getUser();
  }, [location, userManager, autoSignIn, onBeforeSignIn, onSignIn]);

  useEffect(() => {
    // for userManager event UserLoaded (e.g. initial load, silent renew)
    const handleUserLoaded = async () => {
      const user = await userManager.getUser();
      dispatch({ type: 'USER_LOADED', user });
    };

    userManager.events.addUserLoaded(handleUserLoaded);

    return () => userManager.events.removeUserLoaded(handleUserLoaded );
  }, [userManager]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        userManager,
        signIn: async (args: unknown): Promise<void> => {
          await userManager.signinRedirect(args);
        },
        signInPopup: async (): Promise<void> => {
          await signInPopupHooks();
        },
        signOut: async (): Promise<void> => {
          await userManager!.removeUser();
          await signOutHooks();
        },
        signOutRedirect: async (args?: unknown): Promise<void> => {
          await userManager!.signoutRedirect(args);
          await signOutHooks();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
