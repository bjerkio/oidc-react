[oidc-react](../README.md) / AuthProviderProps

# Interface: AuthProviderProps

## Table of contents

### Properties

- [authority](AuthProviderProps.md#authority)
- [autoSignIn](AuthProviderProps.md#autosignin)
- [automaticSilentRenew](AuthProviderProps.md#automaticsilentrenew)
- [clientId](AuthProviderProps.md#clientid)
- [clientSecret](AuthProviderProps.md#clientsecret)
- [extraQueryParams](AuthProviderProps.md#extraqueryparams)
- [loadUserInfo](AuthProviderProps.md#loaduserinfo)
- [location](AuthProviderProps.md#location)
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

[src/AuthContextInterface.ts:34](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L34)

___

### autoSignIn

• `Optional` **autoSignIn**: `boolean`

defaults to true

#### Defined in

[src/AuthContextInterface.ts:76](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L76)

___

### automaticSilentRenew

• `Optional` **automaticSilentRenew**: `boolean`

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

defaults to false

#### Defined in

[src/AuthContextInterface.ts:82](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L82)

___

### clientId

• `Optional` **clientId**: `string`

Your client application's identifier as registered with the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:42](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L42)

___

### clientSecret

• `Optional` **clientSecret**: `string`

Client secret defined on the identity server.

#### Defined in

[src/AuthContextInterface.ts:46](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L46)

___

### extraQueryParams

• `Optional` **extraQueryParams**: `Record`<`string`, `string`\>

Extra query params passed to the authorization url.

#### Defined in

[src/AuthContextInterface.ts:38](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L38)

___

### loadUserInfo

• `Optional` **loadUserInfo**: `boolean`

Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.

defaults to true

#### Defined in

[src/AuthContextInterface.ts:88](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L88)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Defaults to `windows.location`.

#### Defined in

[src/AuthContextInterface.ts:72](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L72)

___

### onBeforeSignIn

• `Optional` **onBeforeSignIn**: () => `string`

#### Type declaration

▸ (): `string`

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

##### Returns

`string`

#### Defined in

[src/AuthContextInterface.ts:111](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L111)

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

[src/AuthContextInterface.ts:116](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L116)

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

[src/AuthContextInterface.ts:120](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L120)

___

### popupRedirectUri

• `Optional` **popupRedirectUri**: `string`

The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2

#### Defined in

[src/AuthContextInterface.ts:99](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L99)

___

### popupWindowFeatures

• `Optional` **popupWindowFeatures**: `PopupWindowFeatures`

The features parameter to window.open for the popup signin window

defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'

#### Defined in

[src/AuthContextInterface.ts:94](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L94)

___

### popupWindowTarget

• `Optional` **popupWindowTarget**: `string`

The target parameter to window.open for the popup signin window.

defaults to '_blank'

#### Defined in

[src/AuthContextInterface.ts:105](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L105)

___

### postLogoutRedirectUri

• `Optional` **postLogoutRedirectUri**: `string`

The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.

#### Defined in

[src/AuthContextInterface.ts:58](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L58)

___

### redirectUri

• `Optional` **redirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:50](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L50)

___

### responseType

• `Optional` **responseType**: `string`

Tells the authorization server which grant to execute.

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

#### Defined in

[src/AuthContextInterface.ts:64](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L64)

___

### scope

• `Optional` **scope**: `string`

A space-delimited list of permissions that the application requires.

#### Defined in

[src/AuthContextInterface.ts:68](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L68)

___

### silentRedirectUri

• `Optional` **silentRedirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.

#### Defined in

[src/AuthContextInterface.ts:54](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L54)

___

### userManager

• `Optional` **userManager**: `UserManager`

See [UserManager](https://github.com/authts/oidc-client-ts) for more details.

#### Defined in

[src/AuthContextInterface.ts:30](https://github.com/bjerkio/oidc-react/blob/6414730/src/AuthContextInterface.ts#L30)
