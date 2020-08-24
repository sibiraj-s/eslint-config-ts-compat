module.exports = {
  rules: {
    // enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    'camelcase': 'off',

    // enforce consistent spacing before and after commas
    // https://eslint.org/docs/rules/comma-spacing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',

    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',

    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    'indent': 'off',

    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    'init-declarations': 'off',

    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    'lines-between-class-members': 'off',

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',

    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',

    // disallow this keywords outside of classes or class-like objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    'no-loss-of-precision': 'off',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    'no-return-await': 'off',

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    'no-throw-literal': 'off',

    // disallow Undeclared Variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'off',

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',

    // disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',

    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    'quotes': 'off',

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    'require-await': 'off',

    // require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    'semi': 'off',

    // enforce consistent spacing before `function` definition opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
  },
};
