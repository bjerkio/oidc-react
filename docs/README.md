oidc-react

# oidc-react

## Table of contents

### Interfaces

- [AuthContextProps](interfaces/AuthContextProps.md)
- [AuthProviderProps](interfaces/AuthProviderProps.md)
- [AuthProviderSignOutProps](interfaces/AuthProviderSignOutProps.md)
- [Location](interfaces/Location.md)

### Variables

- [AuthContext](README.md#authcontext)

### Functions

- [AuthProvider](README.md#authprovider)
- [useAuth](README.md#useauth)
- [withAuth](README.md#withauth)

## Variables

### AuthContext

• `Const` **AuthContext**: `Context`<`undefined` \| [`AuthContextProps`](interfaces/AuthContextProps.md)\>

#### Defined in

[src/AuthContext.tsx:23](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContext.tsx#L23)

## Functions

### AuthProvider

▸ **AuthProvider**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `PropsWithChildren`<[`AuthProviderProps`](interfaces/AuthProviderProps.md)\> | AuthProviderProps |
| `context?` | `any` | - |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:521

___

### useAuth

▸ **useAuth**(): [`AuthContextProps`](interfaces/AuthContextProps.md)

#### Returns

[`AuthContextProps`](interfaces/AuthContextProps.md)

#### Defined in

[src/useAuth.ts:6](https://github.com/bjerkio/oidc-react/blob/main/src/useAuth.ts#L6)

___

### withAuth

▸ **withAuth**<`P`\>(`Component`): `React.ComponentType`<`Omit`<`P`, keyof [`AuthContextProps`](interfaces/AuthContextProps.md)\>\>

A public higher-order component to access the imperative API

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AuthContextProps`](interfaces/AuthContextProps.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `ComponentType`<`P`\> |

#### Returns

`React.ComponentType`<`Omit`<`P`, keyof [`AuthContextProps`](interfaces/AuthContextProps.md)\>\>

#### Defined in

[src/withAuth.tsx:8](https://github.com/bjerkio/oidc-react/blob/main/src/withAuth.tsx#L8)
