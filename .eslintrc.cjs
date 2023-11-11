/**
 * @type {import('eslint').Linter.Config}
 **/

module.exports = {
  extends: [
    '@bjerk/eslint-config/base',
    '@bjerk/eslint-config/typescript',
    // '@bjerk/eslint-config/import',
    // '@bjerk/eslint-config/prettier',
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
