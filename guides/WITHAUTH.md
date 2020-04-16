# Hooks

OIDC React comes with a HOC withAuth! withAuth is a great way, much better then using our [Consumer](https://reactjs.org/docs/context.html#contextconsumer).

## `withAuth`

withAuth returns a component wrapped in [authContext](../docs/interfaces/authcontextprops.md). Let's look at an example of use.

```typescript
import { useAuth } from 'oidc-react';

class Hello extends React.PureComponent<{}, {}> {
  render( = () => {
    return (
      <p>Hello {this.props.authData.profile.name}!</p>
    );
  }
}


export default withAuth(Hello);
```

The example above uses `id_token` object (`profile`) and displays the name of the user.

It should be as easy as that!
