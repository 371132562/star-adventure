import base from '@star/eslint-config/base.js';
import eslintPluginReact from 'eslint-plugin-react';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { FlatCompat } from '@eslint/eslintrc';

export default [
  {
    plugins: {
      eslintPluginReact
    }
  }, ...base];

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname
// });
// export default [...base, ...compat.extends('next/core-web-vitals')];
