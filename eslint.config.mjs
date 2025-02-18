import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "eslint:recommended",
      "prettier"
    ],
    plugins: ["@typescript-eslint", "import", "no-relative-import-paths", "unused-imports"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "unused-imports/no-unused-imports": "error",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", ["parent", "sibling"], "object", "type"],
          "pathGroups": [
            {
              "pattern": "{react,react-dom/**}",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "{next,next/**}",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "@/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "./styles",
              "group": "sibling",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin", "object"],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      "no-relative-import-paths/no-relative-import-paths": "error",
    }
  })
];

export default eslintConfig;
