[**oidc-react**](../README.md)

***

[oidc-react](../README.md) / AuthContextProps

# Interface: AuthContextProps

Defined in: [auth-context-interface.ts:153](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L153)

## Properties

### isLoading

> **isLoading**: `boolean`

Defined in: [auth-context-interface.ts:185](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L185)

Auth state: True until the library has been initialized.

***

### signIn()

> **signIn**: (`args?`) => `Promise`\<`void`\>

Defined in: [auth-context-interface.ts:157](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L157)

Alias for userManager.signInRedirect

#### Parameters

##### args?

`SigninRedirectArgs`

#### Returns

`Promise`\<`void`\>

***

### signInCallback()

> **signInCallback**: () => `Promise`\<`void`\>

Defined in: [auth-context-interface.ts:161](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L161)

Alias for userManager.signInCallback

#### Returns

`Promise`\<`void`\>

***

### signInPopup()

> **signInPopup**: () => `Promise`\<`void`\>

Defined in: [auth-context-interface.ts:165](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L165)

Alias for userManager.signinPopup

#### Returns

`Promise`\<`void`\>

***

### signOut()

> **signOut**: () => `Promise`\<`void`\>

Defined in: [auth-context-interface.ts:169](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L169)

Alias for removeUser

#### Returns

`Promise`\<`void`\>

***

### signOutRedirect()

> **signOutRedirect**: (`args?`) => `Promise`\<`void`\>

Defined in: [auth-context-interface.ts:173](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L173)

#### Parameters

##### args?

`SignoutRedirectArgs`

#### Returns

`Promise`\<`void`\>

***

### userData?

> `optional` **userData**: `null` \| `User`

Defined in: [auth-context-interface.ts:181](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L181)

See [User](https://authts.github.io/oidc-client-ts/classes/User.html) for more details.

***

### userManager

> **userManager**: `UserManager`

Defined in: [auth-context-interface.ts:177](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L177)

See [UserManager](https://authts.github.io/oidc-client-ts/classes/UserManager.html) for more details.
