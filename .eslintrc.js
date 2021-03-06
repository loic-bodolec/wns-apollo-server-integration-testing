module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
      "airbnb",
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      project: ['./tsconfig.json']
  }
};
