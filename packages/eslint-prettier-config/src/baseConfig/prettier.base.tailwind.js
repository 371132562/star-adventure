// 包含了tailwind插件的prettier配置

import config from './prettier.base.js';

const tailwindConfig = {
  ...config,
  plugins: ['prettier-plugin-tailwindcss']
};

export default tailwindConfig;
