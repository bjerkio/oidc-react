[oidc-react](../README.md) / [index](../modules/index.md) / UserManager

# Class: UserManager

[index](../modules/index.md).UserManager

## Hierarchy

* *OidcClient*

  ↳ **UserManager**

## Table of contents

### Constructors

- [constructor](index.usermanager.md#constructor)

### Properties

- [events](index.usermanager.md#events)
- [metadataService](index.usermanager.md#metadataservice)
- [settings](index.usermanager.md#settings)

### Methods

- [clearStaleState](index.usermanager.md#clearstalestate)
- [createSigninRequest](index.usermanager.md#createsigninrequest)
- [createSignoutRequest](index.usermanager.md#createsignoutrequest)
- [getUser](index.usermanager.md#getuser)
- [processSigninResponse](index.usermanager.md#processsigninresponse)
- [processSignoutResponse](index.usermanager.md#processsignoutresponse)
- [querySessionStatus](index.usermanager.md#querysessionstatus)
- [removeUser](index.usermanager.md#removeuser)
- [revokeAccessToken](index.usermanager.md#revokeaccesstoken)
- [signinCallback](index.usermanager.md#signincallback)
- [signinPopup](index.usermanager.md#signinpopup)
- [signinPopupCallback](index.usermanager.md#signinpopupcallback)
- [signinRedirect](index.usermanager.md#signinredirect)
- [signinRedirectCallback](index.usermanager.md#signinredirectcallback)
- [signinSilent](index.usermanager.md#signinsilent)
- [signinSilentCallback](index.usermanager.md#signinsilentcallback)
- [signoutCallback](index.usermanager.md#signoutcallback)
- [signoutPopup](index.usermanager.md#signoutpopup)
- [signoutPopupCallback](index.usermanager.md#signoutpopupcallback)
- [signoutRedirect](index.usermanager.md#signoutredirect)
- [signoutRedirectCallback](index.usermanager.md#signoutredirectcallback)
- [startSilentRenew](index.usermanager.md#startsilentrenew)
- [stopSilentRenew](index.usermanager.md#stopsilentrenew)
- [storeUser](index.usermanager.md#storeuser)

## Constructors

### constructor

\+ **new UserManager**(`settings`: UserManagerSettings): [*UserManager*](index.usermanager.md)

#### Parameters:

Name | Type |
:------ | :------ |
`settings` | UserManagerSettings |

**Returns:** [*UserManager*](index.usermanager.md)

Overrides: OidcClient.constructor

Defined in: node_modules/oidc-client/index.d.ts:171

## Properties

### events

• **events**: UserManagerEvents

Defined in: node_modules/oidc-client/index.d.ts:227

___

### metadataService

• `Readonly` **metadataService**: MetadataService

Inherited from: OidcClient.metadataService

Defined in: node_modules/oidc-client/index.d.ts:123

___

### settings

• `Readonly` **settings**: UserManagerSettings

Overrides: OidcClient.settings

Defined in: node_modules/oidc-client/index.d.ts:174

## Methods

### clearStaleState

▸ **clearStaleState**(): *Promise*<void\>

Removes stale state entries in storage for incomplete authorize requests

**Returns:** *Promise*<void\>

Overrides: OidcClient.clearStaleState

Defined in: node_modules/oidc-client/index.d.ts:177

___

### createSigninRequest

▸ **createSigninRequest**(`args?`: *any*): *Promise*<SigninRequest\>

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<SigninRequest\>

Inherited from: OidcClient.createSigninRequest

Defined in: node_modules/oidc-client/index.d.ts:115

___

### createSignoutRequest

▸ **createSignoutRequest**(`args?`: *any*): *Promise*<SignoutRequest\>

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<SignoutRequest\>

Inherited from: OidcClient.createSignoutRequest

Defined in: node_modules/oidc-client/index.d.ts:118

___

### getUser

▸ **getUser**(): *Promise*<*null* \| [*User*](index.user.md)\>

Load the User object for the currently authenticated user

**Returns:** *Promise*<*null* \| [*User*](index.user.md)\>

Defined in: node_modules/oidc-client/index.d.ts:180

___

### processSigninResponse

▸ **processSigninResponse**(`url?`: *string*, `stateStore?`: StateStore): *Promise*<SigninResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |
`stateStore?` | StateStore |

**Returns:** *Promise*<SigninResponse\>

Inherited from: OidcClient.processSigninResponse

Defined in: node_modules/oidc-client/index.d.ts:116

___

### processSignoutResponse

▸ **processSignoutResponse**(`url?`: *string*, `stateStore?`: StateStore): *Promise*<SignoutResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |
`stateStore?` | StateStore |

**Returns:** *Promise*<SignoutResponse\>

Inherited from: OidcClient.processSignoutResponse

Defined in: node_modules/oidc-client/index.d.ts:119

___

### querySessionStatus

▸ **querySessionStatus**(`args?`: *any*): *Promise*<SessionStatus\>

Query OP for user's current signin status

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<SessionStatus\>

Defined in: node_modules/oidc-client/index.d.ts:218

___

### removeUser

▸ **removeUser**(): *Promise*<void\>

Remove from any storage the currently authenticated user

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:183

___

### revokeAccessToken

▸ **revokeAccessToken**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:220

___

### signinCallback

▸ **signinCallback**(`url?`: *string*): *Promise*<[*User*](index.user.md)\>

Proxy to Popup, Redirect and Silent callbacks

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |

**Returns:** *Promise*<[*User*](index.user.md)\>

Defined in: node_modules/oidc-client/index.d.ts:212

___

### signinPopup

▸ **signinPopup**(`args?`: *any*): *Promise*<[*User*](index.user.md)\>

Trigger a request (via a popup window) to the authorization endpoint. The result of the promise is the authenticated User

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<[*User*](index.user.md)\>

Defined in: node_modules/oidc-client/index.d.ts:186

___

### signinPopupCallback

▸ **signinPopupCallback**(`url?`: *string*): *Promise*<undefined \| [*User*](index.user.md)\>

Notify the opening window of response from the authorization endpoint

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |

**Returns:** *Promise*<undefined \| [*User*](index.user.md)\>

Defined in: node_modules/oidc-client/index.d.ts:188

___

### signinRedirect

▸ **signinRedirect**(`args?`: *any*): *Promise*<void\>

Trigger a redirect of the current window to the authorization endpoint

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:196

___

### signinRedirectCallback

▸ **signinRedirectCallback**(`url?`: *string*): *Promise*<[*User*](index.user.md)\>

Process response from the authorization endpoint.

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |

**Returns:** *Promise*<[*User*](index.user.md)\>

Defined in: node_modules/oidc-client/index.d.ts:198

___

### signinSilent

▸ **signinSilent**(`args?`: *any*): *Promise*<[*User*](index.user.md)\>

Trigger a silent request (via an iframe or refreshtoken if available) to the authorization endpoint

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<[*User*](index.user.md)\>

Defined in: node_modules/oidc-client/index.d.ts:191

___

### signinSilentCallback

▸ **signinSilentCallback**(`url?`: *string*): *Promise*<undefined \| [*User*](index.user.md)\>

Notify the parent window of response from the authorization endpoint

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |

**Returns:** *Promise*<undefined \| [*User*](index.user.md)\>

Defined in: node_modules/oidc-client/index.d.ts:193

___

### signoutCallback

▸ **signoutCallback**(`url?`: *string*, `keepWindowOpen?`: *boolean*): *Promise*<undefined \| SignoutResponse\>

Proxy to Popup and Redirect callbacks

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |
`keepWindowOpen?` | *boolean* |

**Returns:** *Promise*<undefined \| SignoutResponse\>

Defined in: node_modules/oidc-client/index.d.ts:215

___

### signoutPopup

▸ **signoutPopup**(`args?`: *any*): *Promise*<void\>

Trigger a redirect of a popup window window to the end session endpoint

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:206

___

### signoutPopupCallback

▸ **signoutPopupCallback**(`url?`: *string*, `keepOpen?`: *boolean*): *Promise*<void\>

Process response from the end session endpoint from a popup window

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |
`keepOpen?` | *boolean* |

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:208

▸ **signoutPopupCallback**(`keepOpen?`: *boolean*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`keepOpen?` | *boolean* |

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:209

___

### signoutRedirect

▸ **signoutRedirect**(`args?`: *any*): *Promise*<void\>

Trigger a redirect of the current window to the end session endpoint

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *any* |

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:201

___

### signoutRedirectCallback

▸ **signoutRedirectCallback**(`url?`: *string*): *Promise*<SignoutResponse\>

Process response from the end session endpoint

#### Parameters:

Name | Type |
:------ | :------ |
`url?` | *string* |

**Returns:** *Promise*<SignoutResponse\>

Defined in: node_modules/oidc-client/index.d.ts:203

___

### startSilentRenew

▸ **startSilentRenew**(): *void*

Enables silent renew

**Returns:** *void*

Defined in: node_modules/oidc-client/index.d.ts:223

___

### stopSilentRenew

▸ **stopSilentRenew**(): *void*

Disables silent renew

**Returns:** *void*

Defined in: node_modules/oidc-client/index.d.ts:225

___

### storeUser

▸ **storeUser**(`user`: [*User*](index.user.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`user` | [*User*](index.user.md) |

**Returns:** *Promise*<void\>

Defined in: node_modules/oidc-client/index.d.ts:181
