import React, { FC, useState, useEffect } from 'react';
import { UserManager, User } from 'oidc-client';

export interface Location {
  search: string;
  hash: string;
}

export interface AuthProviderSignOutProps {
  /**
   * Trigger a redirect of the current window to the end session endpoint
   * 
   * You can also provide an object. This object will be sent with the
   * function.
   * 
   * @example
   * ```javascript
   * const config = {
   *  signOutRedirect: {
   *    state: 'abrakadabra',
   *  },
   * };
   * ```
   */
  signoutRedirect?: boolean | unknown;
}

export interface AuthProviderProps {
  /**
   * See [UserManager](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) for more details.
   */
  userManager?: UserManager;
  /**
   * The URL of the OIDC/OAuth2 provider.
   */
  authority?: string;
  /**
   * Your client application's identifier as registered with the OIDC/OAuth2 provider.
   */
  clientId?: string;
  /**
   * The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.
   */
  redirectUri?: string;
  /**
   * Tells the authorization server which grant to execute
   *
   * Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1
   */
  responseType?: string;
  /**
   * A space-delimited list of permissions that the application requires.
   */
  scope?: string;
  /**
   * Defaults to `windows.location`.
   */
  location?: Location;
  /**
   * defaults to true
   */
  autoSignIn?: boolean;

  /**
   * On before sign in hook. Can be use to store the current url for use after signing in.
   *
   * This only gets called if autoSignIn is true
   */
  onBeforeSignIn?: () => void;
  /**
   * On sign out hook. Can be a async function.
   * @param userData User
   */
  onSignIn?: (userData: User | null) => Promise<void> | void;
  /**
   * On sign out hook. Can be a async function.
   */
  onSignOut?: (options?: AuthProviderSignOutProps) => Promise<void> | void;
}

export interface AuthContextProps {
  signIn: () => void;
  signOut: (options?: AuthProviderSignOutProps) => void;
  /**
   * See [User](https://github.com/IdentityModel/oidc-client-js/wiki#user) for more details.
   */
  userData?: User | null;
}

export const AuthContext = React.createContext<AuthContextProps>({
  signIn: /* istanbul ignore next */ () => {},
  signOut: /* istanbul ignore next */ () => {},
});

/**
 *
 * @param props AuthProviderProps
 */
export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const {
    children,
    autoSignIn = true,
    onBeforeSignIn,
    onSignIn,
    onSignOut,
    location = window.location,
  } = props;
  let { userManager } = props;
  const [userData, setUserData] = useState<User | null>(null);

  if (!userManager) {
    const { authority, clientId, redirectUri, responseType, scope } = props;
    userManager = new UserManager({
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

  /* istanbul ignore next */
  if (!userManager) {
    // This should never happen.
    throw new Error('UserManager is missing.');
  }

  const signIn = async (): Promise<void> => {
    userManager && userManager.signinRedirect();
  };

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const searchParams = new URLSearchParams(location.search);
      const hashParams = new URLSearchParams(location.hash.replace('#', '?'));
      if (
        searchParams.get('code') ||
        searchParams.get('id_token') ||
        searchParams.get('session_state') ||
        hashParams.get('code') ||
        hashParams.get('id_token') ||
        hashParams.get('session_state')
      ) {
        await userManager!.signinRedirectCallback();
        const user = await userManager!.getUser();
        setUserData(user);
        onSignIn && onSignIn(user);
        return;
      }

      const user = await userManager!.getUser();
      if ((!user || user === null || user.expired) && autoSignIn) {
        if (onBeforeSignIn) {
          onBeforeSignIn();
        }
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
        await userManager!.signoutRedirect()
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
