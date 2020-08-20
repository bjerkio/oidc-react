[oidc-react](README.md)

# oidc-react

## Index

### Interfaces

* [AuthContextProps](interfaces/authcontextprops.md)
* [AuthProviderProps](interfaces/authproviderprops.md)
* [AuthProviderSignOutProps](interfaces/authprovidersignoutprops.md)
* [Location](interfaces/location.md)

### Variables

* [AuthContext](README.md#const-authcontext)

### Functions

* [AuthProvider](README.md#const-authprovider)
* [useAuth](README.md#const-useauth)
* [withAuth](README.md#withauth)

## Variables

### `Const` AuthContext

• **AuthContext**: *Context‹null | [AuthContextProps](interfaces/authcontextprops.md)›* = React.createContext<AuthContextProps | null>(null)

## Functions

### `Const` AuthProvider

▸ **AuthProvider**(`__namedParameters`: object): *Element‹›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`autoSignIn` | boolean | true |
`children` | ReactNode | - |
`location` | [Location](interfaces/location.md) | window.location |
`onBeforeSignIn` | undefined &#124; function | - |
`onSignIn` | undefined &#124; function | - |
`onSignOut` | undefined &#124; function | - |
`props` | props | - |

**Returns:** *Element‹›*

___

### `Const` useAuth

▸ **useAuth**(): *null | [AuthContextProps](interfaces/authcontextprops.md)*

**Returns:** *null | [AuthContextProps](interfaces/authcontextprops.md)*

___

###  withAuth

▸ **withAuth**‹**P**›(`Component`: React.ComponentType‹P›): *React.ComponentType‹Omit‹P, keyof AuthContextProps››*

A public higher-order component to access the imperative API

**Type parameters:**

▪ **P**: *[AuthContextProps](interfaces/authcontextprops.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | React.ComponentType‹P› |

**Returns:** *React.ComponentType‹Omit‹P, keyof AuthContextProps››*
