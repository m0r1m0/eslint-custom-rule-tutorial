module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["custom-rule"],
  rules: {
    "custom-rule/require-translate": "warn",
    "custom-rule/use-util-fetch": "error",
  }
};