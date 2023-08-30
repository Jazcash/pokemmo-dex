module.exports = {
    extends: ["./node_modules/jaz-ts-utils/.eslintrc.js", "plugin:require-extensions/recommended"],
    env: {
        node: true,
        browser: false,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
    plugins: ["import", "node"],
    rules: {
        "func-style": ["error", "declaration"],
        "import/extensions": ["error", "ignorePackages"],
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
    },
};
