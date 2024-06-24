import js from '@eslint/js';
import tscompat from './index.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  tscompat,
  ...tseslint.configs.recommended,
);
