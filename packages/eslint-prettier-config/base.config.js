// import globals from "globals";
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    name: 'starEsLint',
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,vue}'],
    ignores: ['**/node_modules/*', '**/.nuxt/*', '**/.next/*', '**/.nx/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
];
