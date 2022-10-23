module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'react/jsx-no-bind': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/destructuring-assignment': 0,
    'react/no-children-prop': 0,
    '@typescript-eslint/no-shadow': 0,
  },
};
