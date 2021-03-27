[oidc-react](../README.md) / [index](../modules/index.md) / AuthProviderProps

# Interface: AuthProviderProps

[index](../modules/index.md).AuthProviderProps

## Table of contents

### Properties

- [authority](index.authproviderprops.md#authority)
- [autoSignIn](index.authproviderprops.md#autosignin)
- [automaticSilentRenew](index.authproviderprops.md#automaticsilentrenew)
- [clientId](index.authproviderprops.md#clientid)
- [clientSecret](index.authproviderprops.md#clientsecret)
- [loadUserInfo](index.authproviderprops.md#loaduserinfo)
- [location](index.authproviderprops.md#location)
- [onBeforeSignIn](index.authproviderprops.md#onbeforesignin)
- [onSignIn](index.authproviderprops.md#onsignin)
- [onSignInError](index.authproviderprops.md#onsigninerror)
- [onSignOut](index.authproviderprops.md#onsignout)
- [popupRedirectUri](index.authproviderprops.md#popupredirecturi)
- [popupWindowFeatures](index.authproviderprops.md#popupwindowfeatures)
- [popupWindowTarget](index.authproviderprops.md#popupwindowtarget)
- [postLogoutRedirectUri](index.authproviderprops.md#postlogoutredirecturi)
- [redirectUri](index.authproviderprops.md#redirecturi)
- [responseType](index.authproviderprops.md#responsetype)
- [scope](index.authproviderprops.md#scope)
- [silentRedirectUri](index.authproviderprops.md#silentredirecturi)
- [userManager](index.authproviderprops.md#usermanager)

## Properties

### authority

• `Optional` **authority**: *string*

The URL of the OIDC/OAuth2 provider.

Defined in: [src/AuthContextInterface.ts:41](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L41)

___

### autoSignIn

• `Optional` **autoSignIn**: *boolean*

defaults to true

Defined in: [src/AuthContextInterface.ts:79](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L79)

___

### automaticSilentRenew

• `Optional` **automaticSilentRenew**: *boolean*

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

defaults to false

Defined in: [src/AuthContextInterface.ts:85](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L85)

___

### clientId

• `Optional` **clientId**: *string*

Your client application's identifier as registered with the OIDC/OAuth2 provider.

Defined in: [src/AuthContextInterface.ts:45](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L45)

___

### clientSecret

• `Optional` **clientSecret**: *string*

Client secret defined on the identity server.

Defined in: [src/AuthContextInterface.ts:49](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L49)

___

### loadUserInfo

• `Optional` **loadUserInfo**: *boolean*

 Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.

defaults to true

Defined in: [src/AuthContextInterface.ts:91](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L91)

___

### location

• `Optional` **location**: [*Location*](authcontextinterface.location.md)

Defaults to `windows.location`.

Defined in: [src/AuthContextInterface.ts:75](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L75)

___

### onBeforeSignIn

• `Optional` **onBeforeSignIn**: () => *void*

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [src/AuthContextInterface.ts:114](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L114)

Defined in: [src/AuthContextInterface.ts:114](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L114)

___

### onSignIn

• `Optional` **onSignIn**: (`userData`: *null* \| [*User*](../classes/index.user.md)) => *void* \| *Promise*<void\>

On sign out hook. Can be a async function.

**`param`** User

#### Type declaration:

▸ (`userData`: *null* \| [*User*](../classes/index.user.md)): *void* \| *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`userData` | *null* \| [*User*](../classes/index.user.md) |

**Returns:** *void* \| *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:119](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L119)

Defined in: [src/AuthContextInterface.ts:119](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L119)

___

### onSignInError

• `Optional` **onSignInError**: (`error`: *null* \| [*Error*](authcontextinterface.error.md)) => *void* \| *Promise*<void\>

On sign out hook. Can be a async function.

**`param`** User

#### Type declaration:

▸ (`error`: *null* \| [*Error*](authcontextinterface.error.md)): *void* \| *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`error` | *null* \| [*Error*](authcontextinterface.error.md) |

**Returns:** *void* \| *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:124](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L124)

Defined in: [src/AuthContextInterface.ts:124](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L124)

___

### onSignOut

• `Optional` **onSignOut**: (`options?`: [*AuthProviderSignOutProps*](authcontextinterface.authprovidersignoutprops.md)) => *void* \| *Promise*<void\>

On sign out hook. Can be a async function.

#### Type declaration:

▸ (`options?`: [*AuthProviderSignOutProps*](authcontextinterface.authprovidersignoutprops.md)): *void* \| *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*AuthProviderSignOutProps*](authcontextinterface.authprovidersignoutprops.md) |

**Returns:** *void* \| *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:128](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L128)

Defined in: [src/AuthContextInterface.ts:128](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L128)

___

### popupRedirectUri

• `Optional` **popupRedirectUri**: *string*

 The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2

Defined in: [src/AuthContextInterface.ts:102](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L102)

___

### popupWindowFeatures

• `Optional` **popupWindowFeatures**: *string*

 The features parameter to window.open for the popup signin window

defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'

Defined in: [src/AuthContextInterface.ts:97](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L97)

___

### popupWindowTarget

• `Optional` **popupWindowTarget**: *string*

 The target parameter to window.open for the popup signin window.

defaults to '_blank'

Defined in: [src/AuthContextInterface.ts:108](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L108)

___

### postLogoutRedirectUri

• `Optional` **postLogoutRedirectUri**: *string*

The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.

Defined in: [src/AuthContextInterface.ts:61](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L61)

___

### redirectUri

• `Optional` **redirectUri**: *string*

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

Defined in: [src/AuthContextInterface.ts:53](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L53)

___

### responseType

• `Optional` **responseType**: *string*

Tells the authorization server which grant to execute.

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

Defined in: [src/AuthContextInterface.ts:67](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L67)

___

### scope

• `Optional` **scope**: *string*

A space-delimited list of permissions that the application requires.

Defined in: [src/AuthContextInterface.ts:71](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L71)

___

### silentRedirectUri

• `Optional` **silentRedirectUri**: *string*

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.

Defined in: [src/AuthContextInterface.ts:57](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L57)

___

### userManager

• `Optional` **userManager**: [*UserManager*](../classes/index.usermanager.md)

See [UserManager](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) for more details.

Defined in: [src/AuthContextInterface.ts:37](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L37)
