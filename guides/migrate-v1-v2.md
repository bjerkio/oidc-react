# Migrate from v1 to v2

Back in june 2021 `oidc-client-js` was deprecated, which lead us to start
looking for a suitable replacement. Keeping tabs on what could suit our needs
and the maintainability of the library had us wait until now.

The largest change is migrating from `oidc-client-js` to `oidc-client-ts`. For
consumers of this package, this means mostly that if you are importing
`oidc-client` somewhere in your code. You have to replace it with
`oidc-client-ts`.

You can find more documentation on `oidc-client-ts` here:
https://github.com/authts/oidc-client-ts

They have written a migration guide, you can find that here:
https://github.com/authts/oidc-client-ts/blob/main/docs/migration.md

Other than that, we have also started supporting React 18. 🚀

We haven't tested this extensively, so be sure to share your input and
experiences with us!

Thank you for using `oidc-react`.
