/**
 * @type {import('eslint').Linter.Config}
 */

module.exports = {
  extends: [
    '@bjerk/eslint-config/base',
    '@bjerk/eslint-config/typescript',
    // '@bjerk/eslint-config/import',
    // '@bjerk/eslint-config/prettier',
  ],
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        // TODO: Improve tests and remove these rules
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        'no-restricted-globals': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
      },
    },
  ],
  ignores: ['/**/*.js', 'build/'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
