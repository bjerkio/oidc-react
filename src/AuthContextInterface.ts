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
   * Client secret defined on the identity server.
   */
  clientSecret?: string;
  /**
   * The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.
   */
  redirectUri?: string;
  /**
   * Tells the authorization server which grant to execute.
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
   * Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
   *
   * defaults to false
   */
  automaticSilentRenew?: boolean;
  /**
   *  Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
   *
   * defaults to true
   */
  loadUserInfo?:boolean;
  /**
   *  The features parameter to window.open for the popup signin window
   *
   * defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'
   */
  popupWindowFeatures?: string;
  /**
   *  The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2
   *
   */
  popupRedirectUri?: string;
  /**
   *  The target parameter to window.open for the popup signin window.
   *
   * defaults to '_blank'
   */
  popupWindowTarget?:string;
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
   * Alias for userManager.signinPopup
   */
  signInPopup: () => Promise<void>
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
