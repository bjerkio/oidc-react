[oidc-react](../README.md) › [AuthProviderProps](authproviderprops.md)

# Interface: AuthProviderProps

## Hierarchy

- **AuthProviderProps**

## Index

### Properties

- [authority](authproviderprops.md#optional-authority)
- [autoSignIn](authproviderprops.md#optional-autosignin)
- [clientId](authproviderprops.md#optional-clientid)
- [clientSecret](authproviderprops.md#optional-clientsecret)
- [location](authproviderprops.md#optional-location)
- [onBeforeSignIn](authproviderprops.md#optional-onbeforesignin)
- [onSignIn](authproviderprops.md#optional-onsignin)
- [onSignOut](authproviderprops.md#optional-onsignout)
- [redirectUri](authproviderprops.md#optional-redirecturi)
- [responseType](authproviderprops.md#optional-responsetype)
- [scope](authproviderprops.md#optional-scope)
- [userManager](authproviderprops.md#optional-usermanager)

## Properties

### `Optional` authority

• **authority**? : _undefined | string_

The URL of the OIDC/OAuth2 provider.

---

### `Optional` autoSignIn

• **autoSignIn**? : _undefined | false | true_

defaults to true

---

### `Optional` clientId

• **clientId**? : _undefined | string_

Your client application's identifier as registered with the OIDC/OAuth2 provider.

---

### `Optional` clientSecret

• **clientSecret**? : _undefined | string_

Your client application's secret as registered with the OIDC/OAuth2 provider.

---

### `Optional` location

• **location**? : _[Location](location.md)_

Defaults to `windows.location`.

---

### `Optional` onBeforeSignIn

• **onBeforeSignIn**? : _undefined | function_

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

---

### `Optional` onSignIn

• **onSignIn**? : _undefined | function_

On sign out hook. Can be a async function.

**`param`** User

---

### `Optional` onSignOut

• **onSignOut**? : _undefined | function_

On sign out hook. Can be a async function.

---

### `Optional` redirectUri

• **redirectUri**? : _undefined | string_

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

---

### `Optional` responseType

• **responseType**? : _undefined | string_

Tells the authorization server which grant to execute

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

---

### `Optional` scope

• **scope**? : _undefined | string_

A space-delimited list of permissions that the application requires.

---

### `Optional` userManager

• **userManager**? : _UserManager_

See [UserManager](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) for more details.
