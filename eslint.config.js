import globals from "globals";
import js from "@eslint/js";
import vue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.json",
      "*.lock",
      "*.md",
      "*.yaml",
      "*.yml",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...vue.configs["flat/essential"].rules,
      "no-alert": "error",
      "no-confirm": "error",
      "no-prompt": "error",
      "quotes": ["error", "single"],
      "max-len": ["error", { code: 80 }],
      "no-trailing-spaces": "error",
      "no-var": "error",
      "eol-last": ["error", "always"],
      "vue/multi-word-component-names": "off"
    },
  },
];