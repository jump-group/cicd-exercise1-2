module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc', 'jest', 'simple-import-sort'],
  extends: [
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^(h|Fragment)$',
      },
    ],
    /**
     * Configuration for Jest rules can be found here:
     * https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules
     */
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect*'],
      },
    ],
    'jest/no-disabled-tests': ['off'],
    'jest/no-conditional-expect': ['off'],
    'jest/prefer-hooks-in-order': ['warn'],
    'jest/prefer-hooks-on-top': ['warn'],
    /**
     * Configuration for the JSDoc plugin rules can be found at:
     * https://github.com/gajus/eslint-plugin-jsdoc
     */
    'jsdoc/check-param-names': [
      'error',
      {

        checkDestructured: false,
      },
    ],
    // require that jsdoc attached to a method/function require one `@param` per parameter
    'jsdoc/require-param': [
      'error',
      {
       
        checkDestructured: false,
        checkSetters: true,
      },
    ],
    'jsdoc/require-param-description': ['error'],
    // rely on TypeScript types to be the source of truth, minimize verbosity in comments
    'jsdoc/require-param-type': ['off'],
    'jsdoc/require-returns': ['error'],
    'jsdoc/require-returns-check': ['error'],
    'jsdoc/require-returns-description': ['error'],
    // rely on TypeScript types to be the source of truth, minimize verbosity in comments
    'jsdoc/require-returns-type': ['off'],
    'no-cond-assign': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  overrides: [
    {
      // the stencil entry point still uses `var`, ignore errors related to it
      files: 'bin/**',
      rules: {
        'no-var': 'off',
      },
    },
  ],
  // inform ESLint about the global variables defined in a Jest context
  // see https://github.com/jest-community/eslint-plugin-jest/#usage
  env: {
    'jest/globals': true,
  },
};