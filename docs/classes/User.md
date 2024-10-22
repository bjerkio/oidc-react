[**oidc-react**](../README.md) • **Docs**

***

[oidc-react](../README.md) / User

# Class: User

## Constructors

### new User()

> **new User**(`args`): [`User`](User.md)

#### Parameters

• **args**

• **args.access\_token**: `string`

• **args.expires\_at?**: `number`

• **args.id\_token?**: `string`

• **args.profile**: `IdTokenClaims`

• **args.refresh\_token?**: `string`

• **args.scope?**: `string`

• **args.session\_state?**: `null` \| `string`

• **args.token\_type**: `string`

• **args.url\_state?**: `string`

• **args.userState?**: `unknown`

#### Returns

[`User`](User.md)

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1285

## Properties

### access\_token

> **access\_token**: `string`

The requested access token returned from the OIDC provider. The application can use this token to
authenticate itself to the secured resource.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1267

***

### expires\_at?

> `optional` **expires\_at**: `number`

The expires at returned from the OIDC provider.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1281

***

### id\_token?

> `optional` **id\_token**: `string`

A JSON Web Token (JWT). Only provided if `openid` scope was requested.
The application can access the data decoded by using the `profile` property.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1260

***

### profile

> **profile**: `IdTokenClaims`

The claims represented by a combination of the `id_token` and the user info endpoint.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1279

***

### refresh\_token?

> `optional` **refresh\_token**: `string`

An OAuth 2.0 refresh token. The app can use this token to acquire additional access tokens after the
current access token expires. Refresh tokens are long-lived and can be used to maintain access to resources
for extended periods of time.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1273

***

### scope?

> `optional` **scope**: `string`

The scopes that the requested access token is valid for.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1277

***

### session\_state

> **session\_state**: `null` \| `string`

The session state value returned from the OIDC provider.

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1262

***

### state

> `readonly` **state**: `unknown`

custom state data set during the initial signin request

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1283

***

### token\_type

> **token\_type**: `string`

Typically "Bearer"

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1275

***

### url\_state?

> `readonly` `optional` **url\_state**: `string`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1284

## Accessors

### expired

> `get` **expired**(): `undefined` \| `boolean`

Computed value indicating if the access token is expired.

#### Returns

`undefined` \| `boolean`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1301

***

### expires\_in

> `get` **expires\_in**(): `undefined` \| `number`

Computed number of seconds the access token has remaining.

> `set` **expires\_in**(`value`): `void`

#### Parameters

• **value**: `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1298

***

### scopes

> `get` **scopes**(): `string`[]

Array representing the parsed values from the `scope`.

#### Returns

`string`[]

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1303

## Methods

### toStorageString()

> **toStorageString**(): `string`

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1304

***

### fromStorageString()

> `static` **fromStorageString**(`storageString`): [`User`](User.md)

#### Parameters

• **storageString**: `string`

#### Returns

[`User`](User.md)

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1305
