[**oidc-react**](../README.md) • **Docs**

***

[oidc-react](../README.md) / AuthContextProps

# Interface: AuthContextProps

## Properties

### isLoading

> **isLoading**: `boolean`

Auth state: True until the library has been initialized.

#### Defined in

[src/auth-context-interface.ts:181](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L181)

***

### signIn()

> **signIn**: (`args`?) => `Promise`\<`void`\>

Alias for userManager.signInRedirect

#### Parameters

• **args?**: `SigninRedirectArgs`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:157](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L157)

***

### signInPopup()

> **signInPopup**: () => `Promise`\<`void`\>

Alias for userManager.signinPopup

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:161](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L161)

***

### signOut()

> **signOut**: () => `Promise`\<`void`\>

Alias for removeUser

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:165](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L165)

***

### signOutRedirect()

> **signOutRedirect**: (`args`?) => `Promise`\<`void`\>

#### Parameters

• **args?**: `SignoutRedirectArgs`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/auth-context-interface.ts:169](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L169)

***

### userData?

> `optional` **userData**: `null` \| [`User`](../classes/User.md)

See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.

#### Defined in

[src/auth-context-interface.ts:177](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L177)

***

### userManager

> **userManager**: [`UserManager`](../classes/UserManager.md)

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.

#### Defined in

[src/auth-context-interface.ts:173](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L173)
