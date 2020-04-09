module.exports = {
  module: 'commonjs',
  mode: 'file',
  readme: 'none',
  target: 'es5',
  plugin: 'typedoc-plugin-markdown',
  hideSources: true,
  out: 'docs/',
  exclude: ['node_modules/**'],
  includeDeclarations: false,
};