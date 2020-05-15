[oidc-react](../README.md) › [AuthContextProps](authcontextprops.md)

# Interface: AuthContextProps

## Hierarchy

* **AuthContextProps**

## Index

### Properties

* [signIn](authcontextprops.md#signin)
* [signOut](authcontextprops.md#signout)
* [signOutRedirect](authcontextprops.md#signoutredirect)
* [userData](authcontextprops.md#optional-userdata)
* [userManager](authcontextprops.md#usermanager)

## Properties

###  signIn

• **signIn**: *function*

Alias for userManager.signInRedirect

#### Type declaration:

▸ (`args?`: unknown): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | unknown |

___

###  signOut

• **signOut**: *function*

Alias for removeUser

#### Type declaration:

▸ (): *Promise‹void›*

___

###  signOutRedirect

• **signOutRedirect**: *function*

#### Type declaration:

▸ (`args?`: unknown): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | unknown |

___

### `Optional` userData

• **userData**? : *User | null*

See [User](https://github.com/IdentityModel/oidc-client-js/wiki#user) for more details.

___

###  userManager

• **userManager**: *UserManager | null*

See [UserManager](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) for more details.
