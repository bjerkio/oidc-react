[oidc-react](../README.md) / withAuth

# Module: withAuth

## Table of contents

### Functions

- [withAuth](withauth.md#withauth)

## Functions

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

Defined in: [src/withAuth.tsx:8](https://github.com/pamapa/oidc-react/blob/5ae1406/src/withAuth.tsx#L8)
