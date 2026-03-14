import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/self-closing-comp': 'warn',
      'react/jsx-key': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'type', 'index', ['sibling', 'parent']],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '**/*.types', group: 'type', position: 'after' },
            { pattern: '**/constants/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      // 'react/jsx-no-target-blank': 'off',
      // 'react/prop-types': 'off',
      // 'no-console': ['error', { allow: ['warn', 'error'] }],
      // 'no-debugger': 'error',
      // 'no-throw-literal': 'error',
      // 'arrow-body-style': ['warn', 'as-needed'],
      // 'object-shorthand': ['warn', 'always'],
      // 'no-lonely-if': 'warn',
      // 'prefer-arrow-callback': 'warn',
      // 'padding-line-between-statements': [
      //   'warn',
      //   { blankLine: 'always', prev: '*', next: 'return' },
      //   { blankLine: 'always', prev: 'block-like', next: '*' },
      // ],
      'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'prefer-template': 'warn',
      'no-else-return': ['error', { allowElseIf: false }],
      eqeqeq: ['error', 'always'],
      'no-multi-assign': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': ['warn', { count: 1 }],
      'max-depth': ['warn', 4],
      complexity: ['warn', { max: 25 }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
