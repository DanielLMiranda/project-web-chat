module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-param-reassign': 0,
    'implicit-arrow-linebreak': 'below',
    'no-confusing-arrow': 0,
  },
};
