export default {
  name: 'ts-compat',
  rules: {
    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style
    // https://typescript-eslint.io/rules/brace-style
    'brace-style': 'off',

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    // https://typescript-eslint.io/rules/naming-convention
    'camelcase': 'off',

    // enforce that class methods utilize this
    // https://eslint.org/docs/rules/class-methods-use-this
    // https://typescript-eslint.io/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    // https://typescript-eslint.io/rules/comma-dangle
    'comma-dangle': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before and after commas
    // https://eslint.org/docs/rules/comma-spacing
    // https://typescript-eslint.io/rules/comma-spacing
    'comma-spacing': 'off',

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    // https://typescript-eslint.io/rules/dot-notation
    'dot-notation': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    // https://typescript-eslint.io/rules/func-call-spacing
    'func-call-spacing': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    // https://typescript-eslint.io/rules/indent
    'indent': 'off',

    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    // https://typescript-eslint.io/rules/init-declarations
    'init-declarations': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    // https://typescript-eslint.io/rules/key-spacing
    'key-spacing': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    // https://typescript-eslint.io/rules/keyword-spacing
    'keyword-spacing': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // require empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    // https://typescript-eslint.io/rules/lines-around-comment
    'lines-around-comment': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // https://typescript-eslint.io/rules/lines-between-class-members
    'lines-between-class-members': 'off',

    // enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    // https://typescript-eslint.io/rules/max-params
    'max-params': 'off',

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    // https://typescript-eslint.io/rules/no-array-constructor
    'no-array-constructor': 'off',

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    // https://typescript-eslint.io/rules/no-empty-function
    'no-empty-function': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // https://typescript-eslint.io/rules/no-extra-parens
    'no-extra-parens': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    // https://typescript-eslint.io/rules/no-extra-semi
    'no-extra-semi': 'off',

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    // https://typescript-eslint.io/rules/no-implied-eval
    'no-implied-eval': 'off',

    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    // https://typescript-eslint.io/rules/no-invalid-this
    'no-invalid-this': 'off',

    // disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/rules/no-loop-func
    // https://typescript-eslint.io/rules/no-loop-func
    'no-loop-func': 'off',

    // disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    // https://typescript-eslint.io/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    // https://typescript-eslint.io/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    // https://typescript-eslint.io/rules/no-redeclare
    'no-redeclare': 'off',

    // disallow specified modules when loaded by import
    // https://eslint.org/docs/rules/no-restricted-imports
    // https://typescript-eslint.io/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    // https://typescript-eslint.io/rules/return-await
    'no-return-await': 'off',

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    // https://typescript-eslint.io/rules/no-shadow
    'no-shadow': 'off',

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    // https://typescript-eslint.io/rules/no-throw-literal
    'no-throw-literal': 'off',

    // disallow Undeclared Variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'off',

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    // https://typescript-eslint.io/rules/no-unused-expressions
    'no-unused-expressions': 'off',

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    // https://typescript-eslint.io/rules/no-unused-vars
    'no-unused-vars': 'off',

    // disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    // https://typescript-eslint.io/rules/no-use-before-define
    'no-use-before-define': 'off',

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    // https://typescript-eslint.io/rules/no-useless-constructor
    'no-useless-constructor': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    // https://typescript-eslint.io/rules/object-curly-spacing
    'object-curly-spacing': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    // https://typescript-eslint.io/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    // https://typescript-eslint.io/rules/prefer-destructuring
    'prefer-destructuring': 'off',

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    // https://typescript-eslint.io/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',

    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    // https://typescript-eslint.io/rules/quotes
    'quotes': 'off',

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    // https://typescript-eslint.io/rules/require-await
    'require-await': 'off',

    // require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    // https://typescript-eslint.io/rules/semi
    'semi': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    // https://typescript-eslint.io/rules/space-before-blocks
    'space-before-blocks': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before `function` definition opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    // https://typescript-eslint.io/rules/space-before-function-paren
    'space-before-function-paren': 'off',

    // @deprecated in favour of rule in ESLint Stylistic
    // require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    // https://typescript-eslint.io/rules/space-infix-ops
    'space-infix-ops': 'off',
  },
};
