import withNuxt from "./.nuxt/eslint.config.mjs";
import base from "@star/eslint-config/base.config.js";

export default withNuxt().prepend(...base);
// Your custom configs here
