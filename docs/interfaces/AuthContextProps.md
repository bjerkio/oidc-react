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

[src/AuthContextInterface.ts:176](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L176)

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

[src/AuthContextInterface.ts:152](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L152)

___

### signInPopup

• **signInPopup**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Alias for userManager.signinPopup

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:156](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L156)

___

### signOut

• **signOut**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Alias for removeUser

##### Returns

`Promise`<`void`\>

#### Defined in

[src/AuthContextInterface.ts:160](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L160)

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

[src/AuthContextInterface.ts:164](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L164)

___

### userData

• `Optional` **userData**: ``null`` \| `User`

See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.

#### Defined in

[src/AuthContextInterface.ts:172](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L172)

___

### userManager

• **userManager**: `UserManager`

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.

#### Defined in

[src/AuthContextInterface.ts:168](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L168)
