[oidc-react](../README.md) / index

# Module: index

## Table of contents

### Classes

- [Log](../classes/index.log.md)
- [User](../classes/index.user.md)
- [UserManager](../classes/index.usermanager.md)

### Interfaces

- [AuthContextProps](../interfaces/index.authcontextprops.md)
- [AuthProviderProps](../interfaces/index.authproviderprops.md)
- [AuthProviderSignOutProps](../interfaces/index.authprovidersignoutprops.md)
- [Error](../interfaces/index.error.md)
- [Location](../interfaces/index.location.md)

### Variables

- [AuthContext](index.md#authcontext)
- [AuthProvider](index.md#authprovider)

### Functions

- [errorInUrl](index.md#errorinurl)
- [useAuth](index.md#useauth)
- [withAuth](index.md#withauth)

## Variables

### AuthContext

• `Const` **AuthContext**: *Context*<*null* \| [*AuthContextProps*](../interfaces/authcontextinterface.authcontextprops.md)\>

Defined in: [src/AuthContext.tsx:10](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContext.tsx#L10)

___

### AuthProvider

• `Const` **AuthProvider**: *FC*<[*AuthProviderProps*](../interfaces/authcontextinterface.authproviderprops.md)\>

**`param`** AuthProviderProps

Defined in: [src/AuthContext.tsx:95](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContext.tsx#L95)

## Functions

### errorInUrl

▸ `Const`**errorInUrl**(`location`: [*Location*](../interfaces/authcontextinterface.location.md)): *null* \| [*Error*](../interfaces/authcontextinterface.error.md)

#### Parameters:

Name | Type |
:------ | :------ |
`location` | [*Location*](../interfaces/authcontextinterface.location.md) |

**Returns:** *null* \| [*Error*](../interfaces/authcontextinterface.error.md)

Defined in: [src/AuthContext.tsx:31](https://github.com/bjerkio/oidc-react/blob/2957e85/src/AuthContext.tsx#L31)

___

### useAuth

▸ `Const`**useAuth**(): *null* \| [*AuthContextProps*](../interfaces/authcontextinterface.authcontextprops.md)

**Returns:** *null* \| [*AuthContextProps*](../interfaces/authcontextinterface.authcontextprops.md)

Defined in: [src/useAuth.ts:6](https://github.com/bjerkio/oidc-react/blob/2957e85/src/useAuth.ts#L6)

___

### withAuth

▸ **withAuth**<P\>(`Component`: *React.ComponentType*<P\>): *React.ComponentType*<Omit<P, keyof [*AuthContextProps*](../interfaces/authcontextinterface.authcontextprops.md)\>\>

A public higher-order component to access the imperative API

#### Type parameters:

Name | Type |
:------ | :------ |
`P` | [*AuthContextProps*](../interfaces/authcontextinterface.authcontextprops.md) |

#### Parameters:

Name | Type |
:------ | :------ |
`Component` | *React.ComponentType*<P\> |

**Returns:** *React.ComponentType*<Omit<P, keyof [*AuthContextProps*](../interfaces/authcontextinterface.authcontextprops.md)\>\>

Defined in: [src/withAuth.tsx:8](https://github.com/bjerkio/oidc-react/blob/2957e85/src/withAuth.tsx#L8)
