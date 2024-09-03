import { starEslint } from '@linstarzzz/eslint-prettier-config';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt().prepend(...starEslint('eslint'));
// Your custom configs here
