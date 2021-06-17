// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  globals: {
      MyGlobal: true
  },
  rules: {
    'array-bracket-newline': 'off',
    'array-bracket-spacing': ['error', 'always'],
    'array-element-newline': 'off',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': ['error'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      "after": true,
      "before": false
    }],
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'curly': ['error', 'multi-line'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'indent': ['error', 2, {
      'CallExpression': {
        'arguments': 2
      },
      'FunctionDeclaration': {
        'body': 1,
        'parameters': 2
      },
      'FunctionExpression': {
        'body': 1,
        'parameters': 2
      },
      'ignoredNodes': ['ConditionalExpression'],
      'MemberExpression': 2,
      'ObjectExpression': 1,
      'SwitchCase': 1
    }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'max-len': ['error', {
      code: 80,
      ignoreComments: true,
      ignoreUrls: true,
      tabWidth: 2
    }],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',

    'no-multiple-empty-lines': ['error', {
      max: 2
    }],
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-tabs': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': ['error', {
      args: 'none'
    }],

    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', {
      const: 'never',
      let: 'never',
      var: 'never'
    }],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-promise-reject-errors': 'error',
    'quotes': ['error', 'single', {
      allowTemplateLiterals: true
    }],
    "semi": ["error"],
    'semi-spacing': 'error',
    'simple-import-sort/imports': ['error', {
      groups: [// 1. built-in node.js modules
      [`^(${require("module").builtinModules.join("|")})(/|$)`], // 2.1. package that start without @
      // 2.2. package that start with @ 
      ['^\\w', '^@\\w'], // 3. @nestjs packages
      ['^@nestjs\/'], // 4. @kibibit external packages
      ['^@kibibit\/'], // 5. Internal kibibit packages (inside this project)
      ['^@kb-'], // 6. Parent imports. Put `..` last.
      //    Other relative imports. Put same-folder imports and `.` last.
      ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], // 7. Side effect imports.
      // https://riptutorial.com/javascript/example/1618/importing-with-side-effects
      ["^\\u0000"]]
    }],
    'unused-imports/no-unused-imports': 'error',

    'valid-jsdoc': ['error', {
      prefer: {
        returns: 'return'
      },
      requireParamDescription: false,
      requireReturn: false,
      requireReturnDescription: false
    }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never',
    }],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'arrow-parens': ['error', 'always'],
  }
};

module.exports = config;