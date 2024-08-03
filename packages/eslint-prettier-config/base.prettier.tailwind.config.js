import config from './base.prettier.config.js';

const tailwindConfig = {
  ...config,
  plugins: ['prettier-plugin-tailwindcss']
};

export default tailwindConfig;
