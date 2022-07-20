[oidc-react](../README.md) / [AuthContextInterface](../modules/authcontextinterface.md) / AuthContextProps

# Interface: AuthContextProps

[AuthContextInterface](../modules/authcontextinterface.md).AuthContextProps

## Table of contents

### Properties

- [isLoading](authcontextinterface.authcontextprops.md#isloading)
- [signIn](authcontextinterface.authcontextprops.md#signin)
- [signInPopup](authcontextinterface.authcontextprops.md#signinpopup)
- [signOut](authcontextinterface.authcontextprops.md#signout)
- [signOutRedirect](authcontextinterface.authcontextprops.md#signoutredirect)
- [userData](authcontextinterface.authcontextprops.md#userdata)
- [userManager](authcontextinterface.authcontextprops.md#usermanager)

## Properties

### isLoading

• **isLoading**: *boolean*

Auth state: True until the library has been initialized.

Defined in: [src/AuthContextInterface.ts:147](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L147)

___

### signIn

• **signIn**: (`args?`: *unknown*) => *Promise*<void\>

Alias for userManager.signInRedirect

#### Type declaration:

▸ (`args?`: *unknown*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *unknown* |

**Returns:** *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:123](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L123)

Defined in: [src/AuthContextInterface.ts:123](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L123)

___

### signInPopup

• **signInPopup**: () => *Promise*<void\>

Alias for userManager.signinPopup

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:127](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L127)

Defined in: [src/AuthContextInterface.ts:127](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L127)

___

### signOut

• **signOut**: () => *Promise*<void\>

Alias for removeUser

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:131](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L131)

Defined in: [src/AuthContextInterface.ts:131](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L131)

___

### signOutRedirect

• **signOutRedirect**: (`args?`: *unknown*) => *Promise*<void\>

#### Type declaration:

▸ (`args?`: *unknown*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`args?` | *unknown* |

**Returns:** *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:135](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L135)

Defined in: [src/AuthContextInterface.ts:135](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L135)

___

### userData

• `Optional` **userData**: *null* \| [*User*](../classes/index.user.md)

See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.

Defined in: [src/AuthContextInterface.ts:143](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L143)

___

### userManager

• **userManager**: *null* \| [*UserManager*](../classes/index.usermanager.md)

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.

Defined in: [src/AuthContextInterface.ts:139](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L139)
