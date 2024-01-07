module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    indent: [2, 2],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/require-default-props": "off",
    "react/button-has-type": "error",
    "react/jsx-props-no-spreading": "warn",
    "object-curly-spacing": ["error", "always"],
  },
};
