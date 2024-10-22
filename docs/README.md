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

• `Const` **AuthContext**: `Context`\<`undefined` \| [`AuthContextProps`](interfaces/AuthContextProps.md)\>

#### Defined in

[src/auth-context.tsx:24](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context.tsx#L24)

## Functions

### AuthProvider

▸ **AuthProvider**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `PropsWithChildren`\<[`AuthProviderProps`](interfaces/AuthProviderProps.md)\> | AuthProviderProps |
| `deprecatedLegacyContext?` | `any` | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/auth-context.tsx:96](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context.tsx#L96)

___

### useAuth

▸ **useAuth**(): [`AuthContextProps`](interfaces/AuthContextProps.md)

#### Returns

[`AuthContextProps`](interfaces/AuthContextProps.md)

#### Defined in

[src/use-auth.ts:6](https://github.com/bjerkio/oidc-react/blob/main/src/use-auth.ts#L6)

___

### withAuth

▸ **withAuth**\<`P`\>(`Component`): `React.ComponentType`\<`Omit`\<`P`, keyof [`AuthContextProps`](interfaces/AuthContextProps.md)\>\>

A public higher-order component to access the imperative API

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AuthContextProps`](interfaces/AuthContextProps.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `ComponentType`\<`P`\> |

#### Returns

`React.ComponentType`\<`Omit`\<`P`, keyof [`AuthContextProps`](interfaces/AuthContextProps.md)\>\>

#### Defined in

[src/with-auth.tsx:8](https://github.com/bjerkio/oidc-react/blob/main/src/with-auth.tsx#L8)
