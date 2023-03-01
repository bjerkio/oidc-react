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

[src/AuthContextInterface.ts:40](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L40)

___

### autoSignIn

• `Optional` **autoSignIn**: `boolean`

defaults to true

#### Defined in

[src/AuthContextInterface.ts:82](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L82)

___

### automaticSilentRenew

• `Optional` **automaticSilentRenew**: `boolean`

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

defaults to false

#### Defined in

[src/AuthContextInterface.ts:88](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L88)

___

### clientId

• `Optional` **clientId**: `string`

Your client application's identifier as registered with the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:48](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L48)

___

### clientSecret

• `Optional` **clientSecret**: `string`

Client secret defined on the identity server.

#### Defined in

[src/AuthContextInterface.ts:52](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L52)

___

### extraQueryParams

• `Optional` **extraQueryParams**: `Record`<`string`, `string`\>

Extra query params passed to the authorization url.

#### Defined in

[src/AuthContextInterface.ts:44](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L44)

___

### loadUserInfo

• `Optional` **loadUserInfo**: `boolean`

Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.

defaults to true

#### Defined in

[src/AuthContextInterface.ts:94](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L94)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Defaults to `windows.location`.

#### Defined in

[src/AuthContextInterface.ts:78](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L78)

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

[src/AuthContextInterface.ts:117](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L117)

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

[src/AuthContextInterface.ts:122](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L122)

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

[src/AuthContextInterface.ts:126](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L126)

___

### popupRedirectUri

• `Optional` **popupRedirectUri**: `string`

The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2

#### Defined in

[src/AuthContextInterface.ts:105](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L105)

___

### popupWindowFeatures

• `Optional` **popupWindowFeatures**: `PopupWindowFeatures`

The features parameter to window.open for the popup signin window

defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'

#### Defined in

[src/AuthContextInterface.ts:100](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L100)

___

### popupWindowTarget

• `Optional` **popupWindowTarget**: `string`

The target parameter to window.open for the popup signin window.

defaults to '_blank'

#### Defined in

[src/AuthContextInterface.ts:111](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L111)

___

### postLogoutRedirectUri

• `Optional` **postLogoutRedirectUri**: `string`

The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.

#### Defined in

[src/AuthContextInterface.ts:64](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L64)

___

### redirectUri

• `Optional` **redirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

#### Defined in

[src/AuthContextInterface.ts:56](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L56)

___

### responseType

• `Optional` **responseType**: `string`

Tells the authorization server which grant to execute.

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

#### Defined in

[src/AuthContextInterface.ts:70](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L70)

___

### scope

• `Optional` **scope**: `string`

A space-delimited list of permissions that the application requires.

#### Defined in

[src/AuthContextInterface.ts:74](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L74)

___

### silentRedirectUri

• `Optional` **silentRedirectUri**: `string`

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.

#### Defined in

[src/AuthContextInterface.ts:60](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L60)

___

### userManager

• `Optional` **userManager**: `UserManager`

See [UserManager](https://github.com/authts/oidc-client-ts) for more details.

#### Defined in

[src/AuthContextInterface.ts:36](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L36)
