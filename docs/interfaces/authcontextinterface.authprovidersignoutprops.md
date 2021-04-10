[oidc-react](../README.md) / [AuthContextInterface](../modules/authcontextinterface.md) / AuthProviderSignOutProps

# Interface: AuthProviderSignOutProps

[AuthContextInterface](../modules/authcontextinterface.md).AuthProviderSignOutProps

## Table of contents

### Properties

- [signoutRedirect](authcontextinterface.authprovidersignoutprops.md#signoutredirect)

## Properties

### signoutRedirect

• `Optional` **signoutRedirect**: *unknown*

Trigger a redirect of the current window to the end session endpoint

You can also provide an object. This object will be sent with the
function.

**`example`** 
```javascript
const config = {
 signOutRedirect: {
   state: 'abrakadabra',
 },
};
```

Defined in: [src/AuthContextInterface.ts:23](https://github.com/pamapa/oidc-react/blob/5ae1406/src/AuthContextInterface.ts#L23)
