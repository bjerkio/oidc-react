[**oidc-react**](../README.md)

***

[oidc-react](../README.md) / AuthProviderProps

# Interface: AuthProviderProps

Defined in: [auth-context-interface.ts:33](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L33)

## Properties

### authority?

> `optional` **authority**: `string`

Defined in: [auth-context-interface.ts:41](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L41)

The URL of the OIDC/OAuth2 provider.

***

### automaticSilentRenew?

> `optional` **automaticSilentRenew**: `boolean`

Defined in: [auth-context-interface.ts:109](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L109)

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

Defaults to true.

***

### autoSignIn?

> `optional` **autoSignIn**: `boolean`

Defined in: [auth-context-interface.ts:89](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L89)

Flag to control automatic redirection to the OIDC/OAuth2 provider when not signed in.

Defaults to true.

***

### autoSignInArgs?

> `optional` **autoSignInArgs**: `SigninRedirectArgs`

Defined in: [auth-context-interface.ts:93](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L93)

Optional sign in arguments to be used when `autoSignIn` is enabled.

***

### autoSignOut?

> `optional` **autoSignOut**: `boolean`

Defined in: [auth-context-interface.ts:99](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L99)

Flag to control automatic sign out redirection to the OIDC/OAuth2 provider when silent renewal fails.

Defaults to true.

***

### autoSignOutArgs?

> `optional` **autoSignOutArgs**: `SignoutRedirectArgs`

Defined in: [auth-context-interface.ts:103](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L103)

Optional sign out arguments to be used when `autoSignOut` is enabled.

***

### clientId?

> `optional` **clientId**: `string`

Defined in: [auth-context-interface.ts:53](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L53)

Your client application's identifier as registered with the OIDC/OAuth2 provider.

***

### clientSecret?

> `optional` **clientSecret**: `string`

Defined in: [auth-context-interface.ts:57](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L57)

Client secret defined on the identity server.

***

### extraQueryParams?

> `optional` **extraQueryParams**: `Record`\<`string`, `string`\>

Defined in: [auth-context-interface.ts:49](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L49)

Extra query params passed to the authorization url.

***

### loadUserInfo?

> `optional` **loadUserInfo**: `boolean`

Defined in: [auth-context-interface.ts:115](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L115)

Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.

Defaults to true.

***

### location?

> `optional` **location**: [`Location`](Location.md)

Defined in: [auth-context-interface.ts:83](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L83)

Defaults to `windows.location`.

***

### metadata?

> `optional` **metadata**: `Partial`\<`OidcMetadata`\>

Defined in: [auth-context-interface.ts:45](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L45)

Manually set metadata if CORS is not configured on the OIDC/OAuth2 provider.

***

### onBeforeSignIn()?

> `optional` **onBeforeSignIn**: () => `unknown`

Defined in: [auth-context-interface.ts:136](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L136)

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

#### Returns

`unknown`

***

### onSignIn()?

> `optional` **onSignIn**: (`userData`) => `void` \| `Promise`\<`void`\>

Defined in: [auth-context-interface.ts:141](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L141)

On sign in hook. Can be a async function.

#### Parameters

##### userData

User

`null` | `User`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onSignInError()?

> `optional` **onSignInError**: (`error`) => `void`

Defined in: [auth-context-interface.ts:150](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L150)

On sign in error. Can be a async function.

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### onSignOut()?

> `optional` **onSignOut**: (`options?`) => `void` \| `Promise`\<`void`\>

Defined in: [auth-context-interface.ts:145](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L145)

On sign out hook. Can be a async function.

#### Parameters

##### options?

[`AuthProviderSignOutProps`](AuthProviderSignOutProps.md)

#### Returns

`void` \| `Promise`\<`void`\>

***

### popupRedirectUri?

> `optional` **popupRedirectUri**: `string`

Defined in: [auth-context-interface.ts:126](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L126)

The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2

***

### popupWindowFeatures?

> `optional` **popupWindowFeatures**: `PopupWindowFeatures`

Defined in: [auth-context-interface.ts:121](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L121)

The features parameter to window.open for the popup signin window

defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'

***

### popupWindowTarget?

> `optional` **popupWindowTarget**: `string`

Defined in: [auth-context-interface.ts:131](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L131)

The target parameter to window.open for the popup signin window.   *
defaults to '_blank'

***

### postLogoutRedirectUri?

> `optional` **postLogoutRedirectUri**: `string`

Defined in: [auth-context-interface.ts:69](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L69)

The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.

***

### redirectUri?

> `optional` **redirectUri**: `string`

Defined in: [auth-context-interface.ts:61](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L61)

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

***

### responseType?

> `optional` **responseType**: `string`

Defined in: [auth-context-interface.ts:75](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L75)

Tells the authorization server which grant to execute.

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

***

### scope?

> `optional` **scope**: `string`

Defined in: [auth-context-interface.ts:79](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L79)

A space-delimited list of permissions that the application requires.

***

### silentRedirectUri?

> `optional` **silentRedirectUri**: `string`

Defined in: [auth-context-interface.ts:65](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L65)

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.

***

### userManager?

> `optional` **userManager**: `UserManager`

Defined in: [auth-context-interface.ts:37](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L37)

See [UserManager](https://github.com/authts/oidc-client-ts) for more details.
