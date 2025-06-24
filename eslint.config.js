import { arvinn } from "@arvinn/eslint-config";

export default arvinn(
  [
    {
      ignores: [".prettierrc"],
      rules: {
        "unicorn/filename-case": "off",
      },
    },
    {
      files: ["src/**/*.ts"],
      rules: {
        "perfectionist/sort-objects": "error",
      },
    },
    {
      files: ["**/*.md/*"],
      rules: {
        "sort-imports": "off",
      },
    },
  ],

  {
    vue: true,
    prettier: true,
  },
);
