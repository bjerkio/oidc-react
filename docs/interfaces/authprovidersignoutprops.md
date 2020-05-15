[oidc-react](../README.md) › [AuthProviderSignOutProps](authprovidersignoutprops.md)

# Interface: AuthProviderSignOutProps

## Hierarchy

* **AuthProviderSignOutProps**

## Index

### Properties

* [signoutRedirect](authprovidersignoutprops.md#optional-signoutredirect)

## Properties

### `Optional` signoutRedirect

• **signoutRedirect**? : *boolean | unknown*

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
