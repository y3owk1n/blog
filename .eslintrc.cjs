const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
const config = {
	root: true,
	plugins: ["only-warn", "@typescript-eslint"],
	extends: [
		"@vercel/style-guide/eslint/node",
		"@vercel/style-guide/eslint/typescript",
		"@vercel/style-guide/eslint/browser",
		"@vercel/style-guide/eslint/react",
		"@vercel/style-guide/eslint/next",
	].map(require.resolve),
	parserOptions: {
		project,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	globals: {
		React: true,
		JSX: true,
	},
	ignorePatterns: [
		// Ignore dotfiles
		"**/*.js",
		"**/*.mjs",
		"**/*.cjs",
		"**/*.config.cjs",
		"node_modules/",
		"dist/",
	],
	rules: {
		"import/no-default-export": "off",
		"import/order": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
	},
};

module.exports = config;
