[oidc-react](../README.md) › [AuthProviderProps](authproviderprops.md)

# Interface: AuthProviderProps

## Hierarchy

* **AuthProviderProps**

## Index

### Properties

* [authority](authproviderprops.md#optional-authority)
* [autoSignIn](authproviderprops.md#optional-autosignin)
* [automaticSilentRenew](authproviderprops.md#optional-automaticsilentrenew)
* [clientId](authproviderprops.md#optional-clientid)
* [clientSecret](authproviderprops.md#optional-clientsecret)
* [location](authproviderprops.md#optional-location)
* [onBeforeSignIn](authproviderprops.md#optional-onbeforesignin)
* [onSignIn](authproviderprops.md#optional-onsignin)
* [onSignOut](authproviderprops.md#optional-onsignout)
* [redirectUri](authproviderprops.md#optional-redirecturi)
* [responseType](authproviderprops.md#optional-responsetype)
* [scope](authproviderprops.md#optional-scope)
* [userManager](authproviderprops.md#optional-usermanager)

## Properties

### `Optional` authority

• **authority**? : *undefined | string*

The URL of the OIDC/OAuth2 provider.

___

### `Optional` autoSignIn

• **autoSignIn**? : *undefined | false | true*

defaults to true

___

### `Optional` automaticSilentRenew

• **automaticSilentRenew**? : *undefined | false | true*

Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.

defaults to false

___

### `Optional` clientId

• **clientId**? : *undefined | string*

Your client application's identifier as registered with the OIDC/OAuth2 provider.

___

### `Optional` clientSecret

• **clientSecret**? : *undefined | string*

Client secret defined on the identity server

___

### `Optional` location

• **location**? : *[Location](location.md)*

Defaults to `windows.location`.

___

### `Optional` onBeforeSignIn

• **onBeforeSignIn**? : *undefined | function*

On before sign in hook. Can be use to store the current url for use after signing in.

This only gets called if autoSignIn is true

___

### `Optional` onSignIn

• **onSignIn**? : *undefined | function*

On sign out hook. Can be a async function.

**`param`** User

___

### `Optional` onSignOut

• **onSignOut**? : *undefined | function*

On sign out hook. Can be a async function.

___

### `Optional` redirectUri

• **redirectUri**? : *undefined | string*

The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.

___

### `Optional` responseType

• **responseType**? : *undefined | string*

Tells the authorization server which grant to execute

Read more: https://tools.ietf.org/html/rfc6749#section-3.1.1

___

### `Optional` scope

• **scope**? : *undefined | string*

A space-delimited list of permissions that the application requires.

___

### `Optional` userManager

• **userManager**? : *UserManager*

See [UserManager](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) for more details.
