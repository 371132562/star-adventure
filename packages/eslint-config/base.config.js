// import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    name: "starEsLint",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,vue}"],
    ignores: ["**/node_modules/*", "**/.nuxt/*", "**/.next/*", "**/.nx/*"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
];
