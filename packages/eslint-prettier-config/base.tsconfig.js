import tseslint from 'typescript-eslint';

import base from './base.config.js';

export default [...base, ...tseslint.configs.recommended];
