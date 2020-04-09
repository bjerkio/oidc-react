# Hooks

OIDC React comes with hooks! Hooks are a great way, much better then using our [Consumer](https://reactjs.org/docs/context.html#contextconsumer).

## `useAuth`

useAuth returns the same as our [authContext](../docs/interfaces/authcontextprops.md). Let's look at an example of use.

```typescript
import { useAuth } from 'oidc-react';

export default () => {
  const auth = useAuth();

  return (
    <p>Hello {auth.profile.name}!</p>
  );
}
```

The example above uses `id_token` object (`profile`) and displays the name of the user.

It should be as easy as that!