[**oidc-react**](../README.md)

***

[oidc-react](../README.md) / AuthProviderSignOutProps

# Interface: AuthProviderSignOutProps

Defined in: [auth-context-interface.ts:14](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L14)

## Properties

### signoutRedirect?

> `optional` **signoutRedirect**: `unknown`

Defined in: [auth-context-interface.ts:30](https://github.com/bjerkio/oidc-react/blob/main/src/auth-context-interface.ts#L30)

Trigger a redirect of the current window to the end session endpoint

You can also provide an object. This object will be sent with the
function.

#### Example

```javascript
const config = {
 signOutRedirect: {
   state: 'abrakadabra',
 },
};
```
