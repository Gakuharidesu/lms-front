module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {},
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    'no-unused-vars' : 0,
  }
}
