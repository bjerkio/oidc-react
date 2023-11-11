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

[src/auth-context-interface.ts:181](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L181)

___

### signIn

• **signIn**: (`args?`: `SigninRedirectArgs`) => `Promise`\<`void`\>

#### Type declaration

▸ (`args?`): `Promise`\<`void`\>

Alias for userManager.signInRedirect

##### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `SigninRedirectArgs` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:157](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L157)

___

### signInPopup

• **signInPopup**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

Alias for userManager.signinPopup

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:161](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L161)

___

### signOut

• **signOut**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

Alias for removeUser

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:165](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L165)

___

### signOutRedirect

• **signOutRedirect**: (`args?`: `SignoutRedirectArgs`) => `Promise`\<`void`\>

#### Type declaration

▸ (`args?`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `SignoutRedirectArgs` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:169](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L169)

___

### userData

• `Optional` **userData**: ``null`` \| `User`

See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.

#### Defined in

[src/auth-context-interface.ts:177](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L177)

___

### userManager

• **userManager**: `UserManager`

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.

#### Defined in

[src/auth-context-interface.ts:173](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L173)
