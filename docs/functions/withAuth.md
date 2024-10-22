[**oidc-react**](../README.md) • **Docs**

***

[oidc-react](../README.md) / withAuth

# Function: withAuth()

> **withAuth**\<`P`\>(`Component`): `React.ComponentType`\<`Omit`\<`P`, keyof [`AuthContextProps`](../interfaces/AuthContextProps.md)\>\>

A public higher-order component to access the imperative API

## Type Parameters

• **P** *extends* [`AuthContextProps`](../interfaces/AuthContextProps.md)

## Parameters

• **Component**: `ComponentType`\<`P`\>

## Returns

`React.ComponentType`\<`Omit`\<`P`, keyof [`AuthContextProps`](../interfaces/AuthContextProps.md)\>\>

## Defined in

[src/with-auth.tsx:8](https://github.com/bjerkio/oidc-react/blob/main/src/with-auth.tsx#L8)
