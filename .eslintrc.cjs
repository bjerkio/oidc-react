module.exports = {
  extends: ['@bjerk/eslint-config', 'plugin:jest/recommended'],
  plugins: ['jest'],
  overrides: [
    {
      files: 'jest.config.*',
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
