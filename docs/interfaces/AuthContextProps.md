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

[src/AuthContextInterface.ts:171](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L171)

___

### signIn

• **signIn**: (`args?`: `SigninRedirectArgs`) => `Promise`<`void`\>

#### Type declaration

▸ (`args?`): `Promise`<`void`\>

Alias for userManager.signInRedirect

##### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `SigninRedirectArgs` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:147](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L147)

___

### signInPopup

• **signInPopup**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Alias for userManager.signinPopup

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:151](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L151)

___

### signOut

• **signOut**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Alias for removeUser

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:155](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L155)

___

### signOutRedirect

• **signOutRedirect**: (`args?`: `SignoutRedirectArgs`) => `Promise`<`void`\>

#### Type declaration

▸ (`args?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `SignoutRedirectArgs` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:159](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L159)

___

### userData

• `Optional` **userData**: ``null`` \| `User`

See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.

#### Defined in

[src/AuthContextInterface.ts:167](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L167)

___

### userManager

• **userManager**: `UserManager`

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.

#### Defined in

[src/AuthContextInterface.ts:163](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L163)
