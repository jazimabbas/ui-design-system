/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@jazim/eslint-config/react-internal.js",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "prettier/prettier": ["error", { "printWidth": 100 }],
  }
};
