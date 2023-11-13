/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@anton.bobrov/eslint-config/next'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/no-danger': 'off',
    '@next/next/no-img-element': 'off',
  },
};
