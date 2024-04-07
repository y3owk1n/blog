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
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		extraFileExtensions: [".json"],
	},
	rules: {
		"import/no-default-export": "off",
		"import/order": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
	},
};

module.exports = config;
