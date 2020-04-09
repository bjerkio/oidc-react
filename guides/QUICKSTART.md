# Quickstart

First step is to install the package.

```shell
$ npm install oidc-react
```

## Setting up `AuthProvider`

AuthProvider is a [Context](https://reactjs.org/docs/context.html) and holds most of the functionality of this package. In order to make it work with your very own OIDC server, you'll have to either setup your own [`UserManager`](https://github.com/IdentityModel/oidc-client-js/wiki#usermanager) or use the shortcut. In this guide, we'll use our shortcuts.

Let's look at an example component.

```typescript
import { AuthProvider } from 'oidc-react';

export default () => {
  <AuthProvider
    authority="http://oidc.io/oauth"
    clientId="my-client-id"
    redirectUri="http://myapp.com/"
  >
    <Layout>
      <Text>Hello world</Text>
    </Layout>
  </AuthProvider>
}
};
```

_You can find the [properties under the API documentation](../docs/interfaces/authproviderprops.md)._

In the example above we've setup that we'll connect with a OIDC service located at `http://oidc.io/oauth` with the client id `my-client-id`. **By default, our client automatically redirects us to login**. This means that when wrapping anything with `AuthProvider` we'll be redirected once the app loads. After the user has successfully authenticated, our user will be redirected
to `http://myapp.com`.

However, if we want the user to be sent to our dashboard when authenticated, we can add in a hook.

Let's look at another example for that!

```typescript
import { AuthProvider } from 'oidc-react';

export default App = () => {
  <AuthProvider
    authority="http://oidc.io/oauth"
    clientId="my-client-id"
    redirectUri="http://myapp.com/"
    onSignIn=(user => {
      // the `user` prop is actually the data the app received from `/userinfo` endpoint.
      history.go('/dashboard', user);
    })
  >
    <Layout>
      <Text>Hello world</Text>
    </Layout>
  </AuthProvider>
}
};
```

In this example our user is now redirected once again, this time to `/dashboard` of our app.