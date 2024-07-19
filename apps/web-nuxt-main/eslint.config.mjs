// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import base from '@star/eslint-config/base.js';

export default withNuxt(
    // Your custom configs here
).prepend(
    ...base
);
