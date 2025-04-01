import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
	{
		ignores: [
			".github/",
			".next/",
			".vscode/",
			"node_modules/",
			"public/",
			".env",
			".gitignore/",
			"next-env.d.ts",
			"next.config.ts",
			"package-lock.json",
			"package.json",
			"README.md",
			"TODO.txt",
		],
	},
	...compat.config({
		extends: ["next/core-web-vitals"],
		plugins: ["import", "no-relative-import-paths", "unused-imports"],
		rules: {
			"unused-imports/no-unused-imports": "error",
			"import/no-duplicates": "error",
			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						["parent", "sibling"],
						"object",
						"type",
					],
					pathGroups: [
						{
							pattern: "{react,react-dom/**}",
							group: "external",
							position: "before",
						},
						{
							pattern: "{next,next/**}",
							group: "external",
							position: "before",
						},
						{
							pattern: "@/**",
							group: "internal",
							position: "after",
						},
						{
							pattern: "./styles",
							group: "sibling",
							position: "after",
						},
					],
					pathGroupsExcludedImportTypes: ["builtin", "object"],
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
			"no-relative-import-paths/no-relative-import-paths": "error",
		},
	}),
];

export default eslintConfig;
