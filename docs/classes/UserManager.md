[**oidc-react**](../README.md) • **Docs**

***

[oidc-react](../README.md) / UserManager

# Class: UserManager

Provides a higher level API for signing a user in, signing out, managing the user's claims returned from the OIDC provider,
and managing an access token returned from the OIDC/OAuth2 provider.

## Constructors

### new UserManager()

> **new UserManager**(`settings`, `redirectNavigator`?, `popupNavigator`?, `iframeNavigator`?): [`UserManager`](UserManager.md)

#### Parameters

• **settings**: `UserManagerSettings`

• **redirectNavigator?**: `INavigator`

• **popupNavigator?**: `INavigator`

• **iframeNavigator?**: `INavigator`

#### Returns

[`UserManager`](UserManager.md)

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1351

## Properties

### \_client

> `protected` `readonly` **\_client**: `OidcClient`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1344

***

### \_events

> `protected` `readonly` **\_events**: `UserManagerEvents`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1348

***

### \_iframeNavigator

> `protected` `readonly` **\_iframeNavigator**: `INavigator`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1347

***

### \_logger

> `protected` `readonly` **\_logger**: `Logger`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1343

***

### \_popupNavigator

> `protected` `readonly` **\_popupNavigator**: `INavigator`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1346

***

### \_redirectNavigator

> `protected` `readonly` **\_redirectNavigator**: `INavigator`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1345

***

### \_sessionMonitor

> `protected` `readonly` **\_sessionMonitor**: `null` \| `SessionMonitor`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1350

***

### \_silentRenewService

> `protected` `readonly` **\_silentRenewService**: `SilentRenewService`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1349

***

### settings

> `readonly` **settings**: `UserManagerSettingsStore`

Returns the settings used to configure the `UserManager`.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1342

## Accessors

### \_userStoreKey

> `get` `protected` **\_userStoreKey**(): `string`

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1443

***

### events

> `get` **events**(): `UserManagerEvents`

Returns an object used to register for events raised by the `UserManager`.

#### Returns

`UserManagerEvents`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1353

***

### metadataService

> `get` **metadataService**(): `MetadataService`

Returns an object used to access the metadata configuration of the OIDC provider.

#### Returns

`MetadataService`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1355

## Methods

### \_buildUser()

> `protected` **\_buildUser**(`signinResponse`, `verifySub`?): `Promise`\<[`User`](User.md)\>

#### Parameters

• **signinResponse**: `SigninResponse`

• **verifySub?**: `string`

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1405

***

### \_loadUser()

> `protected` **\_loadUser**(): `Promise`\<`null` \| [`User`](User.md)\>

#### Returns

`Promise`\<`null` \| [`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1444

***

### \_revokeInternal()

> `protected` **\_revokeInternal**(`user`, `types`?): `Promise`\<`void`\>

#### Parameters

• **user**: `null` \| [`User`](User.md)

• **types?**: (`"access_token"` \| `"refresh_token"`)[]

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1434

***

### \_signin()

> `protected` **\_signin**(`args`, `handle`, `verifySub`?): `Promise`\<[`User`](User.md)\>

#### Parameters

• **args**: `CreateSigninRequestArgs`

• **handle**: `IWindow`

• **verifySub?**: `string`

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1402

***

### \_signinEnd()

> `protected` **\_signinEnd**(`url`, `verifySub`?): `Promise`\<[`User`](User.md)\>

#### Parameters

• **url**: `string`

• **verifySub?**: `string`

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1404

***

### \_signinStart()

> `protected` **\_signinStart**(`args`, `handle`): `Promise`\<`NavigateResponse`\>

#### Parameters

• **args**: `CreateSigninRequestArgs`

• **handle**: `IWindow`

#### Returns

`Promise`\<`NavigateResponse`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1403

***

### \_signout()

> `protected` **\_signout**(`args`, `handle`): `Promise`\<`SignoutResponse`\>

#### Parameters

• **args**: `CreateSignoutRequestArgs`

• **handle**: `IWindow`

#### Returns

`Promise`\<`SignoutResponse`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1422

***

### \_signoutEnd()

> `protected` **\_signoutEnd**(`url`): `Promise`\<`SignoutResponse`\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<`SignoutResponse`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1424

***

### \_signoutStart()

> `protected` **\_signoutStart**(`args`, `handle`): `Promise`\<`NavigateResponse`\>

#### Parameters

• **args**: `undefined` \| `CreateSignoutRequestArgs`

• **handle**: `IWindow`

#### Returns

`Promise`\<`NavigateResponse`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1423

***

### \_useRefreshToken()

> `protected` **\_useRefreshToken**(`state`): `Promise`\<[`User`](User.md)\>

#### Parameters

• **state**: `RefreshState`

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1391

***

### clearStaleState()

> **clearStaleState**(): `Promise`\<`void`\>

Removes stale state entries in storage for incomplete authorize requests.

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1449

***

### getUser()

> **getUser**(): `Promise`\<`null` \| [`User`](User.md)\>

Returns promise to load the `User` object for the currently authenticated user.

#### Returns

`Promise`\<`null` \| [`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1359

***

### querySessionStatus()

> **querySessionStatus**(`args`?): `Promise`\<`null` \| `SessionStatus`\>

Returns promise to query OP for user's current signin status. Returns object with session_state and subject identifier.

#### Parameters

• **args?**: `QuerySessionStatusArgs`

#### Returns

`Promise`\<`null` \| `SessionStatus`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1401

***

### removeUser()

> **removeUser**(): `Promise`\<`void`\>

Returns promise to remove from any storage the currently authenticated user.

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1363

***

### revokeTokens()

> **revokeTokens**(`types`?): `Promise`\<`void`\>

#### Parameters

• **types?**: (`"access_token"` \| `"refresh_token"`)[]

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1433

***

### signinCallback()

> **signinCallback**(`url`?): `Promise`\<`void` \| [`User`](User.md)\>

#### Parameters

• **url?**: `string`

#### Returns

`Promise`\<`void` \| [`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1396

***

### signinPopup()

> **signinPopup**(`args`?): `Promise`\<[`User`](User.md)\>

Returns promise to trigger a request (via a popup window) to the authorization endpoint. The result of the promise is the authenticated `User`.

#### Parameters

• **args?**: `SigninPopupArgs`

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1381

***

### signinPopupCallback()

> **signinPopupCallback**(`url`?, `keepOpen`?): `Promise`\<`void`\>

Returns promise to notify the opening window of response from the authorization endpoint.

#### Parameters

• **url?**: `string`

• **keepOpen?**: `boolean`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1385

***

### signinRedirect()

> **signinRedirect**(`args`?): `Promise`\<`void`\>

Returns promise to trigger a redirect of the current window to the authorization endpoint.

#### Parameters

• **args?**: `SigninRedirectArgs`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1367

***

### signinRedirectCallback()

> **signinRedirectCallback**(`url`?): `Promise`\<[`User`](User.md)\>

Returns promise to process response from the authorization endpoint. The result of the promise is the authenticated `User`.

#### Parameters

• **url?**: `string`

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1371

***

### signinResourceOwnerCredentials()

> **signinResourceOwnerCredentials**(`__namedParameters`): `Promise`\<[`User`](User.md)\>

Returns promise to process the signin with user/password. The result of the promise is the authenticated `User`.

Throws an ErrorResponse in case of wrong authentication.

#### Parameters

• **\_\_namedParameters**: `ProcessResourceOwnerPasswordCredentialsArgs`

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1377

***

### signinSilent()

> **signinSilent**(`args`?): `Promise`\<`null` \| [`User`](User.md)\>

Returns promise to trigger a silent request (via an iframe) to the authorization endpoint.
The result of the promise is the authenticated `User`.

#### Parameters

• **args?**: `SigninSilentArgs`

#### Returns

`Promise`\<`null` \| [`User`](User.md)\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1390

***

### signinSilentCallback()

> **signinSilentCallback**(`url`?): `Promise`\<`void`\>

Returns promise to notify the parent window of response from the authorization endpoint.

#### Parameters

• **url?**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1395

***

### signoutCallback()

> **signoutCallback**(`url`?, `keepOpen`?): `Promise`\<`void` \| `SignoutResponse`\>

#### Parameters

• **url?**: `string`

• **keepOpen?**: `boolean`

#### Returns

`Promise`\<`void` \| `SignoutResponse`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1397

***

### signoutPopup()

> **signoutPopup**(`args`?): `Promise`\<`void`\>

Returns promise to trigger a redirect of a popup window window to the end session endpoint.

#### Parameters

• **args?**: `SignoutPopupArgs`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1417

***

### signoutPopupCallback()

> **signoutPopupCallback**(`url`?, `keepOpen`?): `Promise`\<`void`\>

Returns promise to process response from the end session endpoint from a popup window.

#### Parameters

• **url?**: `string`

• **keepOpen?**: `boolean`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1421

***

### signoutRedirect()

> **signoutRedirect**(`args`?): `Promise`\<`void`\>

Returns promise to trigger a redirect of the current window to the end session endpoint.

#### Parameters

• **args?**: `SignoutRedirectArgs`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1409

***

### signoutRedirectCallback()

> **signoutRedirectCallback**(`url`?): `Promise`\<`SignoutResponse`\>

Returns promise to process response from the end session endpoint.

#### Parameters

• **url?**: `string`

#### Returns

`Promise`\<`SignoutResponse`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1413

***

### signoutSilent()

> **signoutSilent**(`args`?): `Promise`\<`void`\>

Returns promise to trigger a silent request (via an iframe) to the end session endpoint.

#### Parameters

• **args?**: `SignoutSilentArgs`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1428

***

### signoutSilentCallback()

> **signoutSilentCallback**(`url`?): `Promise`\<`void`\>

Returns promise to notify the parent window of response from the end session endpoint.

#### Parameters

• **url?**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1432

***

### startSilentRenew()

> **startSilentRenew**(): `void`

Enables silent renew for the `UserManager`.

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1438

***

### stopSilentRenew()

> **stopSilentRenew**(): `void`

Disables silent renew for the `UserManager`.

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1442

***

### storeUser()

> **storeUser**(`user`): `Promise`\<`void`\>

#### Parameters

• **user**: `null` \| [`User`](User.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1445
