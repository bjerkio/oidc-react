import React, { FC, useState, useEffect } from 'react';
import { UserManager, User } from 'oidc-client';
import {
  Location,
  AuthProviderProps,
  AuthContextProps,
} from './AuthContextInterface';

export const AuthContext = React.createContext<AuthContextProps>({
  signIn: /* istanbul ignore next */ () => {},
  signOut: /* istanbul ignore next */ () => {},
});

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
    hashParams.get('session_state')
  );
}

/**
 * @private
 * @hidden
 * @param props 
 */
export const initUserManager = (props: AuthProviderProps): UserManager => {
  if (props.userManager) return props.userManager;
  const { authority, clientId, redirectUri, responseType, scope } = props;
  return new UserManager({
    authority,
    client_id: clientId,
    redirect_uri: redirectUri,
    silent_redirect_uri: redirectUri,
    post_logout_redirect_uri: redirectUri,
    response_type: responseType || 'code',
    scope: scope || 'openid',
    loadUserInfo: true,
  });
}

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
  const [userData, setUserData] = useState<User | null>(null);

  const userManager = initUserManager(props);

  const signIn = async (): Promise<void> => {
    userManager && userManager.signinRedirect();
  };

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      /**
       * Check if the user is returning back from OIDC.
       */
      if (hasCodeInUrl(location)) {
        await userManager!.signinRedirectCallback();
        const user = await userManager!.getUser();
        setUserData(user);
        onSignIn && onSignIn(user);
        return;
      }
      
      const user = await userManager!.getUser();
      if ((!user || user.expired) && autoSignIn) {
        onBeforeSignIn && onBeforeSignIn();
        signIn();
      } else {
        setUserData(user);
      }
      return;
    };
    getUser();
  }, [location]);

  const context: AuthContextProps = {
    signIn,
    signOut: async (options) => {
      if (options && options?.signoutRedirect) {
        await userManager!.signoutRedirect();
      } else {
        await userManager!.removeUser();
      }
      setUserData(null);
      onSignOut && onSignOut();
    },
    userData,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
