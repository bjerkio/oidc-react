# OIDC React

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![code style: airbnb](https://img.shields.io/badge/eslint-airbnb-ff5a5f.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
![Build & Deploy](https://github.com/bjerkio/oidc-react/workflows/Build%20&%20Deploy/badge.svg)

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/bjerkio/oidc-react.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/bjerkio/oidc-react/context:javascript)
[![codecov](https://codecov.io/gh/bjerkio/oidc-react/branch/master/graph/badge.svg)](https://codecov.io/gh/bjerkio/oidc-react)
[![Maintainability](https://api.codeclimate.com/v1/badges/69bf0921275f61ef6dd0/maintainability)](https://codeclimate.com/github/bjerkio/oidc-react/maintainability)

![oidc-react logo](assets/logo.jpg)

## About

React component (AuthProvider) to provide OpenID Connect and OAuth2 protocol support. Has [hooks](guides/HOOKS.md) 🎉

Based on [oidc-client-ts](https://github.com/authts/oidc-client-ts).

## Quickstart

Install packages by running:

```shell
$ npm install oidc-react
```

## Usage

```tsx
import { AuthProvider } from 'oidc-react';

const oidcConfig = {
  onSignIn: () => {
    // Redirect?
  },
  authority: 'https://oidc.io/oauth',
  clientId: 'this-is-a-client-id',
  redirectUri: 'https://my-app.com/',
};

const Routes = () => (
  <AuthProvider {...oidcConfig}>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      ...
    </Switch>
  </AuthProvider>
);
```

# Documentation

Apart from this README, you can find details and examples of using the SDK in the following places:

- [SDK Documentation](docs/README.md)
- [Guides](guides/)
- [Example repository](https://github.com/simenandre/example-oidc-react)
- [oidc-client-ts Documentation](https://authts.github.io/oidc-client-ts/)

## Contribute & Disclaimer

We love to get help 🙏 Read more about how to get started in [CONTRIBUTING](CONTRIBUTING.md) 🌳
