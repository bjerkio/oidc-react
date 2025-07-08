[**oidc-react**](../README.md)

***

[oidc-react](../README.md) / withAuth

# Function: withAuth()

> **withAuth**\<`P`\>(`Component`): `ComponentType`\<`Omit`\<`P`, keyof [`AuthContextProps`](../interfaces/AuthContextProps.md)\>\>

Defined in: [with-auth.tsx:8](https://github.com/bjerkio/oidc-react/blob/main/src/with-auth.tsx#L8)

A public higher-order component to access the imperative API

## Type Parameters

### P

`P` *extends* [`AuthContextProps`](../interfaces/AuthContextProps.md)

## Parameters

### Component

`ComponentType`\<`P`\>

## Returns

`ComponentType`\<`Omit`\<`P`, keyof [`AuthContextProps`](../interfaces/AuthContextProps.md)\>\>
