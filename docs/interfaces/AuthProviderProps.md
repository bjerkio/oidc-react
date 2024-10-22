[**oidc-react**](../README.md) • **Docs**

***

[oidc-react](../README.md) / AuthProviderProps

# Interface: AuthProviderProps

## Properties

### authority?

> `optional` **authority**: `string`

The URL of the OIDC/OAuth2 provider.

#### Defined in

[src/auth-context-interface.ts:41](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L41)

***

### automaticSilentRenew?

> `optional` **automaticSilentRenew**: `boolean`

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

Defaults to true.

#### Defined in

[src/auth-context-interface.ts:109](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L109)

***

### autoSignIn?

> `optional` **autoSignIn**: `boolean`

Flag to control automatic redirection to the OIDC/OAuth2 provider when not signed in.

Defaults to true.

#### Defined in

[src/auth-context-interface.ts:89](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L89)

***

### autoSignInArgs?

> `optional` **autoSignInArgs**: `SigninRedirectArgs`

Optional sign in arguments to be used when `autoSignIn` is enabled.

#### Defined in

[src/auth-context-interface.ts:93](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L93)

***

### autoSignOut?

> `optional` **autoSignOut**: `boolean`

Flag to control automatic sign out redirection to the OIDC/OAuth2 provider when silent renewal fails.

Defaults to true.

#### Defined in

[src/auth-context-interface.ts:99](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L99)

***

### autoSignOutArgs?

> `optional` **autoSignOutArgs**: `SignoutRedirectArgs`

Optional sign out arguments to be used when `autoSignOut` is enabled.

#### Defined in

[src/auth-context-interface.ts:103](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L103)

***

### clientId?

> `optional` **clientId**: `string`

Your client application's identifier as registered with the OIDC/OAuth2 provider.

#### Defined in

[src/auth-context-interface.ts:53](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L53)

***

### clientSecret?

> `optional` **clientSecret**: `string`

Client secret defined on the identity server.

#### Defined in

[src/auth-context-interface.ts:57](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L57)

***

### extraQueryParams?

> `optional` **extraQueryParams**: `Record`\<`string`, `string`\>

Extra query params passed to the authorization url.

#### Defined in

[src/auth-context-interface.ts:49](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L49)

***

### loadUserInfo?

> `optional` **loadUserInfo**: `boolean`

Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.

Defaults to true.

#### Defined in

[src/auth-context-interface.ts:115](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L115)

***

### location?

> `optional` **location**: [`Location`](Location.md)

Defaults to `windows.location`.

#### Defined in

[src/auth-context-interface.ts:83](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L83)

***

### metadata?

> `optional` **metadata**: `Partial`\<`OidcMetadata`\>

Manually set metadata if CORS is not configured on the OIDC/OAuth2 provider.

#### Defined in

[src/auth-context-interface.ts:45](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L45)

***

### onBeforeSignIn()?

> `optional` **onBeforeSignIn**: () => `unknown`

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

#### Returns

`unknown`

#### Defined in

[src/auth-context-interface.ts:136](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L136)

***

### onSignIn()?

> `optional` **onSignIn**: (`userData`) => `void` \| `Promise`\<`void`\>

On sign in hook. Can be a async function.

#### Parameters

• **userData**: `null` \| [`User`](../classes/User.md)

User

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:141](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L141)

***

### onSignInError()?

> `optional` **onSignInError**: (`error`) => `void`

On sign in error. Can be a async function.

#### Parameters

• **error**: `Error`

#### Returns

`void`

#### Defined in

[src/auth-context-interface.ts:150](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L150)

***

### onSignOut()?

> `optional` **onSignOut**: (`options`?) => `void` \| `Promise`\<`void`\>

On sign out hook. Can be a async function.

#### Parameters

• **options?**: [`AuthProviderSignOutProps`](AuthProviderSignOutProps.md)

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:145](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L145)

***

### popupRedirectUri?

> `optional` **popupRedirectUri**: `string`

The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2

#### Defined in

[src/auth-context-interface.ts:126](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L126)

***

### popupWindowFeatures?

> `optional` **popupWindowFeatures**: `PopupWindowFeatures`

The features parameter to window.open for the popup signin window

defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'

#### Defined in

[src/auth-context-interface.ts:121](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L121)

***

### popupWindowTarget?

> `optional` **popupWindowTarget**: `string`

The target parameter to window.open for the popup signin window.   *
defaults to '_blank'

#### Defined in

[src/auth-context-interface.ts:131](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L131)

***

### postLogoutRedirectUri?

> `optional` **postLogoutRedirectUri**: `string`

The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.

#### Defined in

[src/auth-context-interface.ts:69](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L69)

***

### redirectUri?

> `optional` **redirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

#### Defined in

[src/auth-context-interface.ts:61](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L61)

***

### responseType?

> `optional` **responseType**: `string`

Tells the authorization server which grant to execute.

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

#### Defined in

[src/auth-context-interface.ts:75](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L75)

***

### scope?

> `optional` **scope**: `string`

A space-delimited list of permissions that the application requires.

#### Defined in

[src/auth-context-interface.ts:79](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L79)

***

### silentRedirectUri?

> `optional` **silentRedirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.

#### Defined in

[src/auth-context-interface.ts:65](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L65)

***

### userManager?

> `optional` **userManager**: [`UserManager`](../classes/UserManager.md)

See [UserManager](https://github.com/authts/oidc-client-ts) for more details.

#### Defined in

[src/auth-context-interface.ts:37](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L37)
