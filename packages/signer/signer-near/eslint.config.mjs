import config from "@ledgerhq/eslint-config-ldmk";

export default [
  ...config,
  {
    ignores: ["eslint.config.mjs"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
