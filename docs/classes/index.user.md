[oidc-react](../README.md) / [index](../modules/index.md) / User

# Class: User

[index](../modules/index.md).User

## Table of contents

### Constructors

- [constructor](index.user.md#constructor)

### Properties

- [access\_token](index.user.md#access_token)
- [expired](index.user.md#expired)
- [expires\_at](index.user.md#expires_at)
- [expires\_in](index.user.md#expires_in)
- [id\_token](index.user.md#id_token)
- [profile](index.user.md#profile)
- [refresh\_token](index.user.md#refresh_token)
- [scope](index.user.md#scope)
- [scopes](index.user.md#scopes)
- [session\_state](index.user.md#session_state)
- [state](index.user.md#state)
- [token\_type](index.user.md#token_type)

### Methods

- [toStorageString](index.user.md#tostoragestring)
- [fromStorageString](index.user.md#fromstoragestring)

## Constructors

### constructor

\+ **new User**(`settings`: UserSettings): [*User*](index.user.md)

#### Parameters:

Name | Type |
:------ | :------ |
`settings` | UserSettings |

**Returns:** [*User*](index.user.md)

Defined in: node_modules/oidc-client/index.d.ts:388

## Properties

### access\_token

• **access\_token**: *string*

The access token returned from the OIDC provider.

Defined in: node_modules/oidc-client/index.d.ts:396

___

### expired

• `Readonly` **expired**: *boolean*

Calculated value indicating if the access token is expired

Defined in: node_modules/oidc-client/index.d.ts:416

___

### expires\_at

• **expires\_at**: *number*

The expires at returned from the OIDC provider

Defined in: node_modules/oidc-client/index.d.ts:406

___

### expires\_in

• `Readonly` **expires\_in**: *number*

Calculated number of seconds the access token has remaining

Defined in: node_modules/oidc-client/index.d.ts:414

___

### id\_token

• **id\_token**: *string*

The id_token returned from the OIDC provider

Defined in: node_modules/oidc-client/index.d.ts:392

___

### profile

• **profile**: Profile

The claims represented by a combination of the id_token and the user info endpoint

Defined in: node_modules/oidc-client/index.d.ts:404

___

### refresh\_token

• `Optional` **refresh\_token**: *string*

Refresh token returned from the OIDC provider (if requested)

Defined in: node_modules/oidc-client/index.d.ts:398

___

### scope

• **scope**: *string*

The scope returned from the OIDC provider

Defined in: node_modules/oidc-client/index.d.ts:402

___

### scopes

• `Readonly` **scopes**: *string*[]

Array representing the parsed values from the scope

Defined in: node_modules/oidc-client/index.d.ts:418

___

### session\_state

• `Optional` **session\_state**: *string*

The session state value returned from the OIDC provider (opaque)

Defined in: node_modules/oidc-client/index.d.ts:394

___

### state

• **state**: *any*

The custom state transferred in the last signin

Defined in: node_modules/oidc-client/index.d.ts:408

___

### token\_type

• **token\_type**: *string*

The token_type returned from the OIDC provider

Defined in: node_modules/oidc-client/index.d.ts:400

## Methods

### toStorageString

▸ **toStorageString**(): *string*

**Returns:** *string*

Defined in: node_modules/oidc-client/index.d.ts:410

___

### fromStorageString

▸ `Static`**fromStorageString**(`storageString`: *string*): [*User*](index.user.md)

#### Parameters:

Name | Type |
:------ | :------ |
`storageString` | *string* |

**Returns:** [*User*](index.user.md)

Defined in: node_modules/oidc-client/index.d.ts:411
