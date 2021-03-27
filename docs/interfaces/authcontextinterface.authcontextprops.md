[oidc-react](../README.md) / [AuthContextInterface](../modules/authcontextinterface.md) / AuthContextProps

# Interface: AuthContextProps

[AuthContextInterface](../modules/authcontextinterface.md).AuthContextProps

## Table of contents

### Properties

- [signIn](authcontextinterface.authcontextprops.md#signin)
- [signInPopup](authcontextinterface.authcontextprops.md#signinpopup)
- [signOut](authcontextinterface.authcontextprops.md#signout)
- [signOutRedirect](authcontextinterface.authcontextprops.md#signoutredirect)
- [userData](authcontextinterface.authcontextprops.md#userdata)
- [userManager](authcontextinterface.authcontextprops.md#usermanager)

## Properties

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

Defined in: [src/AuthContextInterface.ts:135](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L135)

Defined in: [src/AuthContextInterface.ts:135](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L135)

___

### signInPopup

• **signInPopup**: () => *Promise*<void\>

Alias for userManager.signinPopup

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:139](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L139)

Defined in: [src/AuthContextInterface.ts:139](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L139)

___

### signOut

• **signOut**: () => *Promise*<void\>

Alias for removeUser

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/AuthContextInterface.ts:143](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L143)

Defined in: [src/AuthContextInterface.ts:143](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L143)

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

Defined in: [src/AuthContextInterface.ts:147](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L147)

Defined in: [src/AuthContextInterface.ts:147](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L147)

___

### userData

• `Optional` **userData**: *null* \| [*User*](../classes/index.user.md)

See [User](https://github.com/IdentityModel/oidc-client-js/wiki#user) for more details.

Defined in: [src/AuthContextInterface.ts:155](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L155)

___

### userManager

• **userManager**: *null* \| [*UserManager*](../classes/index.usermanager.md)

See [UserManager](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) for more details.

Defined in: [src/AuthContextInterface.ts:151](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContextInterface.ts#L151)
