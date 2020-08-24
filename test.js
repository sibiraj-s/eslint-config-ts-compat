const { ESLint } = require('eslint');

const defaultConfig = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
};

it('should throw error', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: {
      ...defaultConfig,
      extends: [
        'pegasus',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  });

  // Related issue: https://github.com/typescript-eslint/typescript-eslint/issues/420
  // the following code will fail without disabling `no-useless-constructor` rule
  const code = 'export default class Foo {\n  constructor()\n}\n';
  try {
    await eslint.lintText(code);
  } catch (err) {
    expect(err).toBeTruthy();
  }
});

it('should validate the code correctly without errors', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: {
      ...defaultConfig,
      extends: [
        'pegasus',
        'ts-compat',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  });

  const code = 'export default class Foo {\n  constructor()\n}\n';
  const errors = await eslint.lintText(code);

  expect(errors[0].errorCount).toBe(0);
});

it('should not throw errors for disabled rules', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: {
      ...defaultConfig,
      extends: [
        'pegasus',
        'ts-compat',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  });

  const code = 'const foo = bar';
  const errors = await eslint.lintText(code);

  expect(errors[0].messages.some((error) => error.ruleId === 'no-undef')).toBeFalsy();
  expect(errors[0].messages.some((error) => error.ruleId === '@typescript-eslint/no-unused-vars')).toBeTruthy();
});
