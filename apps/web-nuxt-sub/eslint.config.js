import base from '@star/eslint-prettier-config/base.config.js';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt().prepend(...base);
// Your custom configs here
