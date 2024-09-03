// 包含ts的eslint配置

import tseslint from 'typescript-eslint';

import base from './eslint.base.js';

export default [...tseslint.configs.recommended, ...base];
