[oidc-react](../README.md) / AuthContext

# Module: AuthContext

## Table of contents

### Variables

- [AuthContext](authcontext.md#authcontext)
- [AuthProvider](authcontext.md#authprovider)

### Functions

- [errorInUrl](authcontext.md#errorinurl)

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
