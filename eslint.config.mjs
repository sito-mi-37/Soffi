import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: {
    ...globals.browser,
    process: "readonly", // Allow process as a global variable
    require: "readonly", // Allow require globally (if needed)
    __dirname: "readonly" // Avoid dirname errors in Node.js scripts
  } }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];