[oidc-react](../README.md) / AuthContextProps

# Interface: AuthContextProps

## Table of contents

### Properties

- [isLoading](AuthContextProps.md#isloading)
- [signIn](AuthContextProps.md#signin)
- [signInPopup](AuthContextProps.md#signinpopup)
- [signOut](AuthContextProps.md#signout)
- [signOutRedirect](AuthContextProps.md#signoutredirect)
- [userData](AuthContextProps.md#userdata)
- [userManager](AuthContextProps.md#usermanager)

## Properties

### isLoading

• **isLoading**: `boolean`

Auth state: True until the library has been initialized.

#### Defined in

[src/AuthContextInterface.ts:151](https://github.com/jamesdh/oidc-react/blob/9b4c378/src/AuthContextInterface.ts#L151)

___

### signIn

• **signIn**: (`args?`: `unknown`) => `Promise`<`void`\>

#### Type declaration

▸ (`args?`): `Promise`<`void`\>

Alias for userManager.signInRedirect

##### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `unknown` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:127](https://github.com/jamesdh/oidc-react/blob/9b4c378/src/AuthContextInterface.ts#L127)

___

### signInPopup

• **signInPopup**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Alias for userManager.signinPopup

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:131](https://github.com/jamesdh/oidc-react/blob/9b4c378/src/AuthContextInterface.ts#L131)

___

### signOut

• **signOut**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Alias for removeUser

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:135](https://github.com/jamesdh/oidc-react/blob/9b4c378/src/AuthContextInterface.ts#L135)

___

### signOutRedirect

• **signOutRedirect**: (`args?`: `unknown`) => `Promise`<`void`\>

#### Type declaration

▸ (`args?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `unknown` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:139](https://github.com/jamesdh/oidc-react/blob/9b4c378/src/AuthContextInterface.ts#L139)

___

### userData

• `Optional` **userData**: ``null`` \| `User`

See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.

#### Defined in

[src/AuthContextInterface.ts:147](https://github.com/jamesdh/oidc-react/blob/9b4c378/src/AuthContextInterface.ts#L147)

___

### userManager

• **userManager**: `UserManager`

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.

#### Defined in

[src/AuthContextInterface.ts:143](https://github.com/jamesdh/oidc-react/blob/9b4c378/src/AuthContextInterface.ts#L143)
