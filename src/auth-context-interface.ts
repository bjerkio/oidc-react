import {
  UserManager,
  User,
  PopupWindowFeatures,
  SigninRedirectArgs,
  SignoutRedirectArgs,
  OidcMetadata,
} from 'oidc-client-ts';
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
  signoutRedirect?: unknown;
}

export interface AuthProviderProps {
  /**
   * See [UserManager](https://github.com/authts/oidc-client-ts) for more details.
   */
  userManager?: UserManager;
  /**
   * The URL of the OIDC/OAuth2 provider.
   */
  authority?: string;
  /**
   * Manually set metadata if CORS is not configured on the OIDC/OAuth2 provider.
   */
  metadata?: Partial<OidcMetadata>;
  /**
   * Extra query params passed to the authorization url.
   */
  extraQueryParams?: Record<string, string>;
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
   * The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.
   */
  silentRedirectUri?: string;
  /**
   * The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.
   */
  postLogoutRedirectUri?: string;
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
   * Flag to control automatic redirection to the OIDC/OAuth2 provider when not signed in.
   *
   * Defaults to true.
   */
  autoSignIn?: boolean;
  /**
   * Optional sign in arguments to be used when `autoSignIn` is enabled.
   */
  autoSignInArgs?: SigninRedirectArgs;
  /**
   * Flag to control automatic sign out redirection to the OIDC/OAuth2 provider when silent renewal fails.
   *
   * Defaults to true.
   */
  autoSignOut?: boolean;
  /**
   * Optional sign out arguments to be used when `autoSignOut` is enabled.
   */
  autoSignOutArgs?: SignoutRedirectArgs;
  /**
   * Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
   *
   * Defaults to true.
   */
  automaticSilentRenew?: boolean;
  /**
   *  Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
   *
   * Defaults to true.
   */
  loadUserInfo?: boolean;
  /**
   *  The features parameter to window.open for the popup signin window
   *
   * defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'
   */
  popupWindowFeatures?: PopupWindowFeatures;
  /**
   *  The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2
   *
   */
  popupRedirectUri?: string;
  /**
   *  The target parameter to window.open for the popup signin window.   *
   * defaults to '_blank'
   */
  popupWindowTarget?: string;
  /**
   * On before sign in hook. Can be use to store the current url for use after signing in.
   *
   * This only gets called if autoSignIn is true   */
  onBeforeSignIn?: () => unknown;
  /**
   * On sign in hook. Can be a async function.
   * @param userData User
   */
  onSignIn?: (userData: User | null) => Promise<void> | void;
  /**
   * On sign out hook. Can be a async function.
   */
  onSignOut?: (options?: AuthProviderSignOutProps) => Promise<void> | void;

  /**
   * On sign in error. Can be a async function.
   */
  onSignInError?: (error: Error) => void;
}

export interface AuthContextProps {
  /**
   * Alias for userManager.signInRedirect
   */
  signIn: (args?: SigninRedirectArgs) => Promise<void>;
  /**
   * Alias for userManager.signInCallback
   */
  signInCallback: () => Promise<void>;
  /**
   * Alias for userManager.signinPopup
   */
  signInPopup: () => Promise<void>;
  /**
   * Alias for removeUser
   */
  signOut: () => Promise<void>;
  /**
   *
   */
  signOutRedirect: (args?: SignoutRedirectArgs) => Promise<void>;
  /**
   * See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.
   */
  userManager: UserManager;
  /**
   * See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.
   */
  userData?: User | null;
  /**
   * Auth state: True until the library has been initialized.
   */
  isLoading: boolean;
}