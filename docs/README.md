[oidc-react](README.md)

# oidc-react

## Index

### Interfaces

* [AuthContextProps](interfaces/authcontextprops.md)
* [AuthProviderProps](interfaces/authproviderprops.md)
* [Location](interfaces/location.md)

### Variables

* [AuthContext](README.md#const-authcontext)

### Functions

* [AuthProvider](README.md#const-authprovider)
* [useAuth](README.md#const-useauth)
* [withAuth](README.md#withauth)

## Variables

### `Const` AuthContext

• **AuthContext**: *Context‹[AuthContextProps](interfaces/authcontextprops.md)›* = React.createContext<AuthContextProps>({
  signIn: /* istanbul ignore next */ () => {},
  signOut: /* istanbul ignore next */ () => {},
})

## Functions

### `Const` AuthProvider

▸ **AuthProvider**(`props`: [AuthProviderProps](interfaces/authproviderprops.md) & object): *Element‹›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [AuthProviderProps](interfaces/authproviderprops.md) & object | AuthProviderProps  |

**Returns:** *Element‹›*

___

### `Const` useAuth

▸ **useAuth**(): *[AuthContextProps](interfaces/authcontextprops.md)*

**Returns:** *[AuthContextProps](interfaces/authcontextprops.md)*

___

###  withAuth

▸ **withAuth**<**P**>(`Component`: React.ComponentType‹P›): *FunctionComponent‹object›*

A public higher-order component to access the imperative API

**Type parameters:**

▪ **P**: *[AuthContextProps](interfaces/authcontextprops.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | React.ComponentType‹P› |

**Returns:** *FunctionComponent‹object›*
