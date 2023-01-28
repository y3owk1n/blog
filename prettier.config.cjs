/** @type {import("prettier").Config} */
module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    bracketSpacing: true,
    bracketSameLine: true,
    jsxSingleQuote: false,
    printWidth: 80,
    arrowParens: "always",
    singleAttributePerLine: true,
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
