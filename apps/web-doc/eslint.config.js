import baseConfig from '@star/eslint-prettier-config/base.tsconfig.js';

export default [
  ...baseConfig,
  {
    name: 'starDocEsLint',
    ignores: ['**/theme/index.ts']
  }
];
