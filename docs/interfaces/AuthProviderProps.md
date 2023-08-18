[oidc-react](../README.md) / AuthProviderProps

# Interface: AuthProviderProps

## Table of contents

### Properties

- [authority](AuthProviderProps.md#authority)
- [autoSignIn](AuthProviderProps.md#autosignin)
- [autoSignInArgs](AuthProviderProps.md#autosigninargs)
- [autoSignOut](AuthProviderProps.md#autosignout)
- [autoSignOutArgs](AuthProviderProps.md#autosignoutargs)
- [automaticSilentRenew](AuthProviderProps.md#automaticsilentrenew)
- [clientId](AuthProviderProps.md#clientid)
- [clientSecret](AuthProviderProps.md#clientsecret)
- [extraQueryParams](AuthProviderProps.md#extraqueryparams)
- [loadUserInfo](AuthProviderProps.md#loaduserinfo)
- [location](AuthProviderProps.md#location)
- [metadata](AuthProviderProps.md#metadata)
- [onBeforeSignIn](AuthProviderProps.md#onbeforesignin)
- [onSignIn](AuthProviderProps.md#onsignin)
- [onSignOut](AuthProviderProps.md#onsignout)
- [popupRedirectUri](AuthProviderProps.md#popupredirecturi)
- [popupWindowFeatures](AuthProviderProps.md#popupwindowfeatures)
- [popupWindowTarget](AuthProviderProps.md#popupwindowtarget)
- [postLogoutRedirectUri](AuthProviderProps.md#postlogoutredirecturi)
- [redirectUri](AuthProviderProps.md#redirecturi)
- [responseType](AuthProviderProps.md#responsetype)
- [scope](AuthProviderProps.md#scope)
- [silentRedirectUri](AuthProviderProps.md#silentredirecturi)
- [userManager](AuthProviderProps.md#usermanager)

## Properties

### authority

• `Optional` **authority**: `string`

The URL of the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:41](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L41)

___

### autoSignIn

• `Optional` **autoSignIn**: `boolean`

Flag to control automatic redirection to the OIDC/OAuth2 provider when not signed in.

Defaults to true.

#### Defined in

[src/AuthContextInterface.ts:89](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L89)

___

### autoSignInArgs

• `Optional` **autoSignInArgs**: `SigninRedirectArgs`

Optional sign in arguments to be used when `autoSignIn` is enabled.

#### Defined in

[src/AuthContextInterface.ts:93](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L93)

___

### autoSignOut

• `Optional` **autoSignOut**: `boolean`

Flag to control automatic sign out redirection to the OIDC/OAuth2 provider when silent renewal fails.

Defaults to true.

#### Defined in

[src/AuthContextInterface.ts:99](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L99)

___

### autoSignOutArgs

• `Optional` **autoSignOutArgs**: `SignoutRedirectArgs`

Optional sign out arguments to be used when `autoSignOut` is enabled.

#### Defined in

[src/AuthContextInterface.ts:103](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L103)

___

### automaticSilentRenew

• `Optional` **automaticSilentRenew**: `boolean`

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

Defaults to true.

#### Defined in

[src/AuthContextInterface.ts:109](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L109)

___

### clientId

• `Optional` **clientId**: `string`

Your client application's identifier as registered with the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:53](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L53)

___

### clientSecret

• `Optional` **clientSecret**: `string`

Client secret defined on the identity server.

#### Defined in

[src/AuthContextInterface.ts:57](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L57)

___

### extraQueryParams

• `Optional` **extraQueryParams**: `Record`<`string`, `string`\>

Extra query params passed to the authorization url.

#### Defined in

[src/AuthContextInterface.ts:49](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L49)

___

### loadUserInfo

• `Optional` **loadUserInfo**: `boolean`

Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.

Defaults to true.

#### Defined in

[src/AuthContextInterface.ts:115](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L115)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Defaults to `windows.location`.

#### Defined in

[src/AuthContextInterface.ts:83](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L83)

___

### metadata

• `Optional` **metadata**: `Partial`<`OidcMetadata`\>

Manually set metadata if CORS is not configured on the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:45](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L45)

___

### onBeforeSignIn

• `Optional` **onBeforeSignIn**: () => `unknown`

#### Type declaration

▸ (): `unknown`

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

##### Returns

`unknown`

#### Defined in

[src/AuthContextInterface.ts:136](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L136)

___

### onSignIn

• `Optional` **onSignIn**: (`userData`: ``null`` \| `User`) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`userData`): `void` \| `Promise`<`void`\>

On sign out hook. Can be a async function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userData` | ``null`` \| `User` | User |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:141](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L141)

___

### onSignOut

• `Optional` **onSignOut**: (`options?`: [`AuthProviderSignOutProps`](AuthProviderSignOutProps.md)) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`options?`): `void` \| `Promise`<`void`\>

On sign out hook. Can be a async function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AuthProviderSignOutProps`](AuthProviderSignOutProps.md) |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:145](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L145)

___

### popupRedirectUri

• `Optional` **popupRedirectUri**: `string`

The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2

#### Defined in

[src/AuthContextInterface.ts:126](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L126)

___

### popupWindowFeatures

• `Optional` **popupWindowFeatures**: `PopupWindowFeatures`

The features parameter to window.open for the popup signin window

defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'

#### Defined in

[src/AuthContextInterface.ts:121](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L121)

___

### popupWindowTarget

• `Optional` **popupWindowTarget**: `string`

The target parameter to window.open for the popup signin window.   *
defaults to '_blank'

#### Defined in

[src/AuthContextInterface.ts:131](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L131)

___

### postLogoutRedirectUri

• `Optional` **postLogoutRedirectUri**: `string`

The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.

#### Defined in

[src/AuthContextInterface.ts:69](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L69)

___

### redirectUri

• `Optional` **redirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:61](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L61)

___

### responseType

• `Optional` **responseType**: `string`

Tells the authorization server which grant to execute.

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

#### Defined in

[src/AuthContextInterface.ts:75](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L75)

___

### scope

• `Optional` **scope**: `string`

A space-delimited list of permissions that the application requires.

#### Defined in

[src/AuthContextInterface.ts:79](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L79)

___

### silentRedirectUri

• `Optional` **silentRedirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.

#### Defined in

[src/AuthContextInterface.ts:65](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L65)

___

### userManager

• `Optional` **userManager**: `UserManager`

See [UserManager](https://github.com/authts/oidc-client-ts) for more details.

#### Defined in

[src/AuthContextInterface.ts:37](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L37)
