import tseslint from 'typescript-eslint';

import base from './base.config.js';

export default [...tseslint.configs.recommended, ...base];
