# eslint-config-ts-compat

> Turns off all rules that conflicts with typescript-eslint

### Installation

```bash
npm i -D eslint-config-ts-compat
# or
yarn add --dev eslint-config-ts-compat
```

### Usage

```yml
extends:
  - airbnb-base
  - ts-compat
  - 'plugin:@typescript-eslint/recommended'
```

### Disabled rules

- [brace-style](https://eslint.org/docs/rules/brace-style)
- [camelcase](https://eslint.org/docs/rules/camelcase)
- [comma-spacing](https://eslint.org/docs/rules/comma-spacing)
- [default-param-last](https://eslint.org/docs/rules/default-param-last)
- [dot-notation](https://eslint.org/docs/rules/dot-notation)
- [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)
- [indent](https://eslint.org/docs/rules/indent)
- [init-declarations](https://eslint.org/docs/rules/init-declarations)
- [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)
- [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)
- [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)
- [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
- [no-empty-function](https://eslint.org/docs/rules/no-empty-function)
- [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)
- [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)
- [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
- [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)
- [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)
- [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)
- [no-return-await](https://eslint.org/docs/rules/no-return-await)
- [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)
- [no-undef](https://eslint.org/docs/rules/no-undef)
- [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
- [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)
- [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)
- [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
- [quotes](https://eslint.org/docs/rules/quotes)
- [require-await](https://eslint.org/docs/rules/require-await)
- [semi](https://eslint.org/docs/rules/semi)
- [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)
