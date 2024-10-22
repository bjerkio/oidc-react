[**oidc-react**](../README.md) • **Docs**

***

[oidc-react](../README.md) / WebStorageStateStore

# Class: WebStorageStateStore

## Implements

- `StateStore`

## Constructors

### new WebStorageStateStore()

> **new WebStorageStateStore**(`__namedParameters`?): [`WebStorageStateStore`](WebStorageStateStore.md)

#### Parameters

• **\_\_namedParameters?**

• **\_\_namedParameters.prefix?**: `string`

• **\_\_namedParameters.store?**: `Storage` \| `AsyncStorage`

#### Returns

[`WebStorageStateStore`](WebStorageStateStore.md)

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1667

## Methods

### get()

> **get**(`key`): `Promise`\<`null` \| `string`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Implementation of

`StateStore.get`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1672

***

### getAllKeys()

> **getAllKeys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

`StateStore.getAllKeys`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1674

***

### remove()

> **remove**(`key`): `Promise`\<`null` \| `string`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Implementation of

`StateStore.remove`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1673

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string`

• **value**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateStore.set`

#### Defined in

node\_modules/.pnpm/oidc-client-ts@2.4.1/node\_modules/oidc-client-ts/dist/types/oidc-client-ts.d.ts:1671
