// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  globals: {
      MyGlobal: true
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': ['error', {
      groups: [
        // 1. built-in node.js modules
        [`^(${require("module").builtinModules.join("|")})(/|$)`],
        // 2.1. package that start without @
        // 2.2. package that start with @ 
        ['^\\w', '^@\\w'],
        // 3. @nestjs packages
        ['^@nestjs\/'],
        // 4. @kibibit external packages
        ['^@kibibit\/'],
        // 5. Internal kibibit packages (inside this project)
        ['^@kb-'],
        // 6. Parent imports. Put `..` last.
        //    Other relative imports. Put same-folder imports and `.` last.
        ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        // 7. Side effect imports.
        // https://riptutorial.com/javascript/example/1618/importing-with-side-effects
        ["^\\u0000"]
      ]
    }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'eol-last': [ 2, 'windows' ],
    'comma-dangle': [ 'error', 'never' ],
    'max-len': [ 'error', { 'code': 80, "ignoreComments": true } ],
    'quotes': ["error", "single"],
    "semi": ["error"],
    'no-irregular-whitespace': 'error', // eslint:recommended
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {returns: 'return'},
    }],
    'curly': ['error', 'multi-line'],
    'no-caller': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error', // eslint:recommended
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-unused-vars': ['error', {args: 'none'}], // eslint:recommended
    'array-bracket-newline': 'off', // eslint:recommended
    'array-bracket-spacing': ['error', 'always'],
    'array-element-newline': 'off', // eslint:recommended
    'block-spacing': ['error', 'always'],
  }
};

module.exports = config;