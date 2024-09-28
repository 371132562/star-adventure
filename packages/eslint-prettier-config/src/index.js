import EslintBase from './baseConfig/eslint.base.js';
import EslintBaseWithTs from './baseConfig/eslint.base.withTs.js';
import PrettierBase from './baseConfig/prettier.base.js';
import PrettierBaseWithTailwind from './baseConfig/prettier.base.tailwind.js';

const starEslint = (type, options) => {
  if (type === 'eslint') {
    return (options?.ts ?? false) ? EslintBaseWithTs : EslintBase;
  } else if (type === 'prettier') {
    return (options?.tailwind ?? false) ? PrettierBaseWithTailwind : PrettierBase;
  } else {
    throw new Error('Invalid type');
  }
};

export { starEslint };
