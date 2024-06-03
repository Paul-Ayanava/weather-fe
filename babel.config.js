module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          ie: 11
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-parameters',
    '@babel/proposal-optional-chaining'
  ],
  env: {
    productions: {
      plugins: ['jsx-remove-data-test-id']
    }
  }
}
