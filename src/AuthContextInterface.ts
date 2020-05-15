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
  /**
   * Alias for userManager.signInRedirect
   */
  signIn: (args?: unknown) => Promise<void>;
  /**
   * Alias for removeUser
   */
  signOut: () => Promise<void>;
  /**
   *
   */
  signOutRedirect: (args?: unknown) => Promise<void>;
  /**
   * See [UserManager](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) for more details.
   */
  userManager: UserManager | null;
  /**
   * See [User](https://github.com/IdentityModel/oidc-client-js/wiki#user) for more details.
   */
  userData?: User | null;
}
