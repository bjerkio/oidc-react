[oidc-react](../README.md) / AuthProviderSignOutProps

# Interface: AuthProviderSignOutProps

## Table of contents

### Properties

- [signoutRedirect](AuthProviderSignOutProps.md#signoutredirect)

## Properties

### signoutRedirect

• `Optional` **signoutRedirect**: `unknown`

Trigger a redirect of the current window to the end session endpoint

You can also provide an object. This object will be sent with the
function.

**`Example`**

```javascript
const config = {
 signOutRedirect: {
   state: 'abrakadabra',
 },
};
```

#### Defined in

[src/AuthContextInterface.ts:29](https://github.com/bjerkio/oidc-react/blob/main/src/AuthContextInterface.ts#L29)
