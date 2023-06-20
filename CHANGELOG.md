# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.2.2](https://github.com/bjerkio/oidc-react/compare/v3.2.1...v3.2.2) (2023-06-20)


### Bug Fixes

* multiplied code exchange requests in strict mode ([#1012](https://github.com/bjerkio/oidc-react/issues/1012)) ([2118bb2](https://github.com/bjerkio/oidc-react/commit/2118bb24fae875669a3bc87fcec298092485838d))

## [3.2.1](https://github.com/bjerkio/oidc-react/compare/v3.2.0...v3.2.1) (2023-06-12)


### Bug Fixes

* **deps:** update dependency oidc-client-ts to v2.2.4 ([#1006](https://github.com/bjerkio/oidc-react/issues/1006)) ([423be19](https://github.com/bjerkio/oidc-react/commit/423be19c9a09ea43e53931d7eeaab6972651eb32))

## [3.2.0](https://github.com/bjerkio/oidc-react/compare/v3.1.0...v3.2.0) (2023-05-02)


### Features

* add inline source maps ([efdf184](https://github.com/bjerkio/oidc-react/commit/efdf184bd585a3b7d2c8ad59cac03e83c27133c4))

## [3.1.0](https://github.com/bjerkio/oidc-react/compare/v3.0.4...v3.1.0) (2023-04-21)


### Features

* add `metadata` parameter to AuthContext ([1e6703b](https://github.com/bjerkio/oidc-react/commit/1e6703b11a8eda0ced7e76cd9e8a27b5abb902f9))

## [3.0.4](https://github.com/bjerkio/oidc-react/compare/oidc-react-v3.0.4...oidc-react-v3.0.4) (2023-04-10)


### Bug Fixes

* isLoading has correct status when autoSignIn is disabled and user is signed out ([#982](https://github.com/bjerkio/oidc-react/issues/982)) ([db28cdd](https://github.com/bjerkio/oidc-react/commit/db28cdd6a6368d8d07f01f1827d77afd18d70bf1))


### Miscellaneous Chores

* **main:** release 3.0.4 ([01051e9](https://github.com/bjerkio/oidc-react/commit/01051e9d8117cba5ca0ddb631a20a5af179214ec))

## [3.0.3](https://github.com/bjerkio/oidc-react/compare/v3.0.2...v3.0.3) (2023-03-16)


### Bug Fixes

* handle both null user and user.expired when autoSignIn is disabled ([#977](https://github.com/bjerkio/oidc-react/issues/977)) ([1a95930](https://github.com/bjerkio/oidc-react/commit/1a9593060f902ae89880fb6bfd076bb24fbac8ab))

## [3.0.2](https://github.com/bjerkio/oidc-react/compare/v3.0.1...v3.0.2) (2023-03-12)


### Bug Fixes

* handle token refresh failure ([#968](https://github.com/bjerkio/oidc-react/issues/968)) ([751732b](https://github.com/bjerkio/oidc-react/commit/751732b636b1911ff07bb86e34fff80ff5f39933))

## [3.0.1](https://github.com/bjerkio/oidc-react/compare/v3.0.0...v3.0.1) (2023-03-08)


### Bug Fixes

* avoid reinitiating partial authentication flow when user is already authenticated  ([#962](https://github.com/bjerkio/oidc-react/issues/962)) ([7c88d80](https://github.com/bjerkio/oidc-react/commit/7c88d800d2dd64f8b032787076709fc98cf8486d))

## [3.0.0](https://github.com/bjerkio/oidc-react/compare/v2.1.0...v3.0.0) (2023-03-01)


### ⚠ BREAKING CHANGES

* `signIn` and `signOutRedirect` now has it's own types.

### Features

* add sourcemap and comments ([#947](https://github.com/bjerkio/oidc-react/issues/947)) ([a605296](https://github.com/bjerkio/oidc-react/commit/a605296a7ebffe9952850593b22670475f4701f9))
* pin and update all dependencies ([#948](https://github.com/bjerkio/oidc-react/issues/948)) ([caf90a7](https://github.com/bjerkio/oidc-react/commit/caf90a789c1864b01648578c874ca85b818cdf0a))
* update + pin a key dependencies in use ([#945](https://github.com/bjerkio/oidc-react/issues/945)) ([9e69e80](https://github.com/bjerkio/oidc-react/commit/9e69e80a5fc1e2596ed2b176f95d3ae8b3ac655b))


### Bug Fixes

* remove bundlesize dependency ([#936](https://github.com/bjerkio/oidc-react/issues/936)) ([e9f8d8a](https://github.com/bjerkio/oidc-react/commit/e9f8d8a596eb695c875956bd00c3c379fb4e4898))
* validation environment  ([#945](https://github.com/bjerkio/oidc-react/issues/945)) ([9e69e80](https://github.com/bjerkio/oidc-react/commit/9e69e80a5fc1e2596ed2b176f95d3ae8b3ac655b))


### Code Refactoring

* add types ([#945](https://github.com/bjerkio/oidc-react/issues/945)) ([9e69e80](https://github.com/bjerkio/oidc-react/commit/9e69e80a5fc1e2596ed2b176f95d3ae8b3ac655b))

## [2.1.0](https://github.com/bjerkio/oidc-react/compare/v2.0.3...v2.1.0) (2022-10-23)


### Features

* add extraQueryParams to AuthProvider ([#890](https://github.com/bjerkio/oidc-react/issues/890)) ([89dc4ea](https://github.com/bjerkio/oidc-react/commit/89dc4ea0a1aaecabe73c164a7f519b03e94c28d4))

## [2.0.3](https://github.com/bjerkio/oidc-react/compare/v2.0.2...v2.0.3) (2022-08-04)


### Bug Fixes

* use memoized context value ([#880](https://github.com/bjerkio/oidc-react/issues/880)) ([3342a8d](https://github.com/bjerkio/oidc-react/commit/3342a8d29a7b42d4428bd01a409ca079619e9549))

## [2.0.2](https://github.com/bjerkio/oidc-react/compare/v2.0.1...v2.0.2) (2022-08-03)


### Bug Fixes

* alway userData=null - isLoading=true ([#877](https://github.com/bjerkio/oidc-react/issues/877)) ([d2d78ce](https://github.com/bjerkio/oidc-react/commit/d2d78ce29fced9598bf9928fd4561fb83c9d9834))

## [2.0.1](https://github.com/bjerkio/oidc-react/compare/v2.0.0...v2.0.1) (2022-08-02)


### Bug Fixes

* Add React 17 to peer dependencies ([#874](https://github.com/bjerkio/oidc-react/issues/874)) ([54fd6e0](https://github.com/bjerkio/oidc-react/commit/54fd6e0ea21b773e26e9e5fb0a42610de54097e5))

## [2.0.0](https://github.com/bjerkio/oidc-react/compare/v1.5.1...v2.0.0) (2022-07-25)


### ⚠ BREAKING CHANGES

* replace oidc-client-js with oidc-client-ts (#860)
* migrate to react 18 (#827)

### Features

* create ES5 output for IE11 compatibility. ([#696](https://github.com/bjerkio/oidc-react/issues/696)) ([4d9712c](https://github.com/bjerkio/oidc-react/commit/4d9712c1882384cc89311c16a56bc6b091a53b0c))
* migrate to react 18 ([#827](https://github.com/bjerkio/oidc-react/issues/827)) ([28e998a](https://github.com/bjerkio/oidc-react/commit/28e998a1c56c8fd32ef15143ae4d31993f8d22d5))


### Bug Fixes

* initUserManager in AuthContext called every render call ([#764](https://github.com/bjerkio/oidc-react/issues/764)) ([2cef6c7](https://github.com/bjerkio/oidc-react/commit/2cef6c748be19f278ba49900025f92dbd392885e))
* move release-please to after checkout ([9b70ccf](https://github.com/bjerkio/oidc-react/commit/9b70ccf581e8844d63717a17797790a0c0419443))


### Code Refactoring

* replace oidc-client-js with oidc-client-ts ([#860](https://github.com/bjerkio/oidc-react/issues/860)) ([a07bb70](https://github.com/bjerkio/oidc-react/commit/a07bb705d4cd6d4074a055f46b83b2b4053fed1b))

## [1.6.0](https://github.com/bjerkio/oidc-react/compare/v1.5.1...v1.6.0) (2022-07-15)

### Features

* Change dependency from no longer maintained [oidc-client-js](https://github.com/IdentityModel/oidc-client-js) to its official successor [oidc-client-ts](https://github.com/authts/oidc-client-ts)


## [1.5.1](https://github.com/bjerkio/oidc-react/compare/v1.5.0...v1.5.1) (2021-04-11)


### Bug Fixes

* AuthContext cannot be null ([#576](https://github.com/bjerkio/oidc-react/issues/576)) ([61bd0fa](https://github.com/bjerkio/oidc-react/commit/61bd0fa65dbd682437aee3aae13258b8f4668f69))

# [1.5.0](https://github.com/bjerkio/oidc-react/compare/v1.4.0...v1.5.0) (2021-04-10)


### Features

* `isLoading` state ([#577](https://github.com/bjerkio/oidc-react/issues/577)) ([b24e9ff](https://github.com/bjerkio/oidc-react/commit/b24e9ff5434b7ddf59000890637fbca36cf8e8ec))

# [1.4.0](https://github.com/bjerkio/oidc-react/compare/v1.3.0...v1.4.0) (2021-03-15)


### Features

* Add silentRedirectUri option. ([#528](https://github.com/bjerkio/oidc-react/issues/528)) ([a349d4d](https://github.com/bjerkio/oidc-react/commit/a349d4dc770ed22af9c68b9c5c178550382e7006))

# [1.3.0](https://github.com/bjerkio/oidc-react/compare/v1.2.1...v1.3.0) (2021-03-11)


### Features

* upgrade to oidc-client 1.11.5 ([#527](https://github.com/bjerkio/oidc-react/issues/527)) ([3943c94](https://github.com/bjerkio/oidc-react/commit/3943c942237cfc6bbe8346ef1543a9a0fcf202f9))

## [1.2.1](https://github.com/bjerkio/oidc-react/compare/v1.2.0...v1.2.1) (2021-03-09)


### Bug Fixes

* state update on an unmounted component ([#522](https://github.com/bjerkio/oidc-react/issues/522)) ([0e873f4](https://github.com/bjerkio/oidc-react/commit/0e873f4e6ac7d14cc39f4cb5196b2a79b866da93))

# [1.2.0](https://github.com/bjerkio/oidc-react/compare/v1.1.6...v1.2.0) (2021-03-08)


### Features

* Add signInPopup method ([#479](https://github.com/bjerkio/oidc-react/issues/479)) ([a50c196](https://github.com/bjerkio/oidc-react/commit/a50c196bba92cc95698eb10d7e5b68eb7b0959b1))

## [1.1.6](https://github.com/bjerkio/oidc-react/compare/v1.1.5...v1.1.6) (2021-02-03)


### Bug Fixes

* Remove `getUser` in callback handler ([#461](https://github.com/bjerkio/oidc-react/issues/461)) ([7abb83d](https://github.com/bjerkio/oidc-react/commit/7abb83d97135aed1370c3a86582a1a689fa676f5)), closes [#447](https://github.com/bjerkio/oidc-react/issues/447)

## [1.1.5](https://github.com/bjerkio/oidc-react/compare/v1.1.4...v1.1.5) (2020-12-22)


### Bug Fixes

* Load new state from session/local storage when available after a silent renew ([#363](https://github.com/bjerkio/oidc-react/issues/363)) ([319d0e3](https://github.com/bjerkio/oidc-react/commit/319d0e34d3f890a4838f436af6b4cb3859a0ad85))

## [1.1.4](https://github.com/bjerkio/oidc-react/compare/v1.1.3...v1.1.4) (2020-12-19)


### Bug Fixes

* Including 'Log' in export ([#383](https://github.com/bjerkio/oidc-react/issues/383)) ([1f10c07](https://github.com/bjerkio/oidc-react/commit/1f10c075f90dcf0e2abb3d48ea768c38164f2f74))

## [1.1.3](https://github.com/bjerkio/oidc-react/compare/v1.1.2...v1.1.3) (2020-10-24)


### Bug Fixes

* Remove react-router 🤷 ([527bcd3](https://github.com/bjerkio/oidc-react/commit/527bcd3a9d07fd3097924d022b13d31afb7d2dcf))

## [1.1.2](https://github.com/bjerkio/oidc-react/compare/v1.1.1...v1.1.2) (2020-10-24)


### Bug Fixes

* Move react, react-dom to peerDependencies ([b4fd437](https://github.com/bjerkio/oidc-react/commit/b4fd437dfb81248766cb5be59b2bd684e95dcf7e)), closes [#301](https://github.com/bjerkio/oidc-react/issues/301)

## [1.1.1](https://github.com/bjerkio/oidc-react/compare/v1.1.0...v1.1.1) (2020-10-09)


### Bug Fixes

* change callback method to allow other sign in method ([c497f49](https://github.com/bjerkio/oidc-react/commit/c497f49ddbca100ff5f52419ce07ac64c00d2656))

# [1.1.0](https://github.com/bjerkio/oidc-react/compare/v1.0.1...v1.1.0) (2020-09-26)


### Features

* add auto silent renew option ([6bb2df5](https://github.com/bjerkio/oidc-react/commit/6bb2df5e1c7c8b9f12fc220bcd51c1eac4890fe4))

## [1.0.1](https://github.com/bjerkio/oidc-react/compare/v1.0.0...v1.0.1) (2020-08-21)


### Bug Fixes

* this._signinStart is not a function ([20b1e57](https://github.com/bjerkio/oidc-react/commit/20b1e57b1b8a15276a04498081560ccce03e0c73)), closes [#173](https://github.com/bjerkio/oidc-react/issues/173)

# 1.0.0 (2020-08-20)


### Bug Fixes

* Autosignin on expired user ([d5dce04](https://github.com/bjerkio/oidc-react/commit/d5dce04f51bdfcff49ab622f60875aedfe17fdb5))
* Fix withAuth export ([4e0e2e1](https://github.com/bjerkio/oidc-react/commit/4e0e2e11675eda83fc543779d53f51f2ff96284e))
* Package size and target ([b9c8205](https://github.com/bjerkio/oidc-react/commit/b9c820524cd34f030d823af867df3d51ad2d2bd7))
* Useless conditional ([6cf9dda](https://github.com/bjerkio/oidc-react/commit/6cf9ddad48728b50c4f17ce7ade18f67ee1faccf))
* Variable 'user' cannot be of type null ([0d8a0c3](https://github.com/bjerkio/oidc-react/commit/0d8a0c3110aec43b4e8c22b6385df8fcbd64147d))


### Code Refactoring

* Improve createContext setup ([6b715f5](https://github.com/bjerkio/oidc-react/commit/6b715f5ad8f78fdb1306cfc399b5f26a2bdc5a14))


### Features

* add client_secret ([151a494](https://github.com/bjerkio/oidc-react/commit/151a494a0faf48483086ce75435ab033335c54ca))
* Add improved API layout ([1e3d66a](https://github.com/bjerkio/oidc-react/commit/1e3d66a1d336d6f0e6e6310e33b4061e9c50e46a)), closes [#36](https://github.com/bjerkio/oidc-react/issues/36)
* Add onBeforeSignIn hook ([e2f609e](https://github.com/bjerkio/oidc-react/commit/e2f609ef205cc05f4040a6281460ccd2a2441e35))
* add option to use signoutRedirect ([9ca3ada](https://github.com/bjerkio/oidc-react/commit/9ca3ada0e2ef1fdba81397ec2044928cc5844a87))
* add option to use signoutRedirect ([d2c4278](https://github.com/bjerkio/oidc-react/commit/d2c42782edd676ae68ccedf45dde18d696f32447))
* Add responseType and scope properties ([e00454a](https://github.com/bjerkio/oidc-react/commit/e00454a50606d287063a3134cfe3740e2ee360f8))
* Add withAuth higher order component ([9f2cea8](https://github.com/bjerkio/oidc-react/commit/9f2cea8c74476a7e74490cd8ae18e82a832d18e0))
* First implementation ([071d311](https://github.com/bjerkio/oidc-react/commit/071d311b7bd4810648c7a18150e2d98e23328258))
* re-export User and UserManager ([a2fdf39](https://github.com/bjerkio/oidc-react/commit/a2fdf39c88dadfe28e8f605ddfc5825c294a017b))


### BREAKING CHANGES

* Typescript users might not expect the Context to be 'null'. Now you have to check
it.

# [1.0.0-alpha.7](https://github.com/bjerkio/oidc-react/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2020-05-15)


### Bug Fixes

* Useless conditional ([6cf9dda](https://github.com/bjerkio/oidc-react/commit/6cf9ddad48728b50c4f17ce7ade18f67ee1faccf))
* Variable 'user' cannot be of type null ([0d8a0c3](https://github.com/bjerkio/oidc-react/commit/0d8a0c3110aec43b4e8c22b6385df8fcbd64147d))


### Code Refactoring

* Improve createContext setup ([6b715f5](https://github.com/bjerkio/oidc-react/commit/6b715f5ad8f78fdb1306cfc399b5f26a2bdc5a14))


### Features

* Add improved API layout ([1e3d66a](https://github.com/bjerkio/oidc-react/commit/1e3d66a1d336d6f0e6e6310e33b4061e9c50e46a)), closes [#36](https://github.com/bjerkio/oidc-react/issues/36)
* add option to use signoutRedirect ([d2c4278](https://github.com/bjerkio/oidc-react/commit/d2c42782edd676ae68ccedf45dde18d696f32447))


### BREAKING CHANGES

* Typescript users might not expect the Context to be 'null'. Now you have to check
it.

# [1.0.0-alpha.6](https://github.com/bjerkio/oidc-react/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2020-05-15)


### Features

* add option to use signoutRedirect ([9ca3ada](https://github.com/bjerkio/oidc-react/commit/9ca3ada0e2ef1fdba81397ec2044928cc5844a87))

# [1.0.0-alpha.5](https://github.com/bjerkio/oidc-react/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2020-04-21)


### Bug Fixes

* Autosignin on expired user ([d5dce04](https://github.com/bjerkio/oidc-react/commit/d5dce04f51bdfcff49ab622f60875aedfe17fdb5))
* Fix withAuth export ([4e0e2e1](https://github.com/bjerkio/oidc-react/commit/4e0e2e11675eda83fc543779d53f51f2ff96284e))

# [1.0.0-alpha.4](https://github.com/bjerkio/oidc-react/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2020-04-16)


### Features

* Add onBeforeSignIn hook ([e2f609e](https://github.com/bjerkio/oidc-react/commit/e2f609ef205cc05f4040a6281460ccd2a2441e35))
* Add withAuth higher order component ([9f2cea8](https://github.com/bjerkio/oidc-react/commit/9f2cea8c74476a7e74490cd8ae18e82a832d18e0))

# [1.0.0-alpha.3](https://github.com/bjerkio/oidc-react/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2020-04-09)


### Bug Fixes

* Package size and target ([b9c8205](https://github.com/bjerkio/oidc-react/commit/b9c820524cd34f030d823af867df3d51ad2d2bd7))

# [1.0.0-alpha.2](https://github.com/bjerkio/oidc-react/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2020-04-09)


### Features

* Add responseType and scope properties ([e00454a](https://github.com/bjerkio/oidc-react/commit/e00454a50606d287063a3134cfe3740e2ee360f8))

# 1.0.0-alpha.1 (2020-04-09)


### Features

* First implementation ([071d311](https://github.com/bjerkio/oidc-react/commit/071d311b7bd4810648c7a18150e2d98e23328258))
