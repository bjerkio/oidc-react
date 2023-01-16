[oidc-react](../README.md) / [AuthContextInterface](../modules/authcontextinterface.md) / AuthProviderProps

# Interface: AuthProviderProps

[AuthContextInterface](../modules/authcontextinterface.md).AuthProviderProps

## Table of contents

### Properties

- [authority](authcontextinterface.authproviderprops.md#authority)
- [autoSignIn](authcontextinterface.authproviderprops.md#autosignin)
- [automaticSilentRenew](authcontextinterface.authproviderprops.md#automaticsilentrenew)
- [clientId](authcontextinterface.authproviderprops.md#clientid)
- [clientSecret](authcontextinterface.authproviderprops.md#clientsecret)
- [loadUserInfo](authcontextinterface.authproviderprops.md#loaduserinfo)
- [location](authcontextinterface.authproviderprops.md#location)
- [onBeforeSignIn](authcontextinterface.authproviderprops.md#onbeforesignin)
- [onSignIn](authcontextinterface.authproviderprops.md#onsignin)
- [onSignOut](authcontextinterface.authproviderprops.md#onsignout)
- [popupRedirectUri](authcontextinterface.authproviderprops.md#popupredirecturi)
- [popupWindowFeatures](authcontextinterface.authproviderprops.md#popupwindowfeatures)
- [popupWindowTarget](authcontextinterface.authproviderprops.md#popupwindowtarget)
- [postLogoutRedirectUri](authcontextinterface.authproviderprops.md#postlogoutredirecturi)
- [redirectUri](authcontextinterface.authproviderprops.md#redirecturi)
- [responseType](authcontextinterface.authproviderprops.md#responsetype)
- [scope](authcontextinterface.authproviderprops.md#scope)
- [silentRedirectUri](authcontextinterface.authproviderprops.md#silentredirecturi)
- [userManager](authcontextinterface.authproviderprops.md#usermanager)

## Properties

### authority

• `Optional` **authority**: *string*

The URL of the OIDC/OAuth2 provider.

Defined in: [src/AuthContextInterface.ts:34](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L34)

___

### autoSignIn

• `Optional` **autoSignIn**: *boolean*

defaults to true

Defined in: [src/AuthContextInterface.ts:72](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L72)

___

### automaticSilentRenew

• `Optional` **automaticSilentRenew**: *boolean*

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

defaults to true

Defined in: [src/AuthContextInterface.ts:78](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L78)

___

### clientId

• `Optional` **clientId**: *string*

Your client application's identifier as registered with the OIDC/OAuth2 provider.

Defined in: [src/AuthContextInterface.ts:38](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L38)

___

### clientSecret

• `Optional` **clientSecret**: *string*

Client secret defined on the identity server.

Defined in: [src/AuthContextInterface.ts:42](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L42)

___

### loadUserInfo

• `Optional` **loadUserInfo**: *boolean*

 Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.

defaults to true

Defined in: [src/AuthContextInterface.ts:84](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L84)

___

### location

• `Optional` **location**: [*Location*](authcontextinterface.location.md)

Defaults to `windows.location`.

Defined in: [src/AuthContextInterface.ts:68](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L68)

___

### onBeforeSignIn

• `Optional` **onBeforeSignIn**: () => *void*

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [src/AuthContextInterface.ts:107](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L107)

Defined in: [src/AuthContextInterface.ts:107](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L107)

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

Defined in: [src/AuthContextInterface.ts:112](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L112)

Defined in: [src/AuthContextInterface.ts:112](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L112)

___

### onSignInError

• `Optional` **onSignInError**: (error) => *void*

On Sign In Error. Can be use to handle errors when sign in fails.

#### Type declaration:

▸ (error): *void*

**Returns:** *void*

Defined in: [src/AuthContextInterface.ts:125](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L125)

Defined in: [src/AuthContextInterface.ts:125](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L125)

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

Defined in: [src/AuthContextInterface.ts:116](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L116)

Defined in: [src/AuthContextInterface.ts:116](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L116)

___

### popupRedirectUri

• `Optional` **popupRedirectUri**: *string*

 The URL for the page containing the call to signinPopupCallback to handle the callback from the OIDC/OAuth2

Defined in: [src/AuthContextInterface.ts:95](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L95)

___

### popupWindowFeatures

• `Optional` **popupWindowFeatures**: *string*

 The features parameter to window.open for the popup signin window

defaults to 'location=no,toolbar=no,width=500,height=500,left=100,top=100'

Defined in: [src/AuthContextInterface.ts:90](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L90)

___

### popupWindowTarget

• `Optional` **popupWindowTarget**: *string*

 The target parameter to window.open for the popup signin window.

defaults to '_blank'

Defined in: [src/AuthContextInterface.ts:101](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L101)

___

### postLogoutRedirectUri

• `Optional` **postLogoutRedirectUri**: *string*

The post-logout redirect URI of your client application which your OIDC/OAuth2 provider can redirect to after completing logout.

Defined in: [src/AuthContextInterface.ts:54](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L54)

___

### redirectUri

• `Optional` **redirectUri**: *string*

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

Defined in: [src/AuthContextInterface.ts:46](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L46)

___

### responseType

• `Optional` **responseType**: *string*

Tells the authorization server which grant to execute.

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

Defined in: [src/AuthContextInterface.ts:60](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L60)

___

### scope

• `Optional` **scope**: *string*

A space-delimited list of permissions that the application requires.

Defined in: [src/AuthContextInterface.ts:64](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L64)

___

### silentRedirectUri

• `Optional` **silentRedirectUri**: *string*

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider when completing a background sign-in refresh.

Defined in: [src/AuthContextInterface.ts:50](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L50)

___

### userManager

• `Optional` **userManager**: [*UserManager*](../classes/index.usermanager.md)

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.

Defined in: [src/AuthContextInterface.ts:30](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L30)
