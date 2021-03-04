module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        "sort-imports-es6-autofix"
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "quote-props": ["error", "as-needed"],
        "camelcase": "error",
        "prefer-arrow-callback": "error",
        "semi": ["error", "never"],
        "lines-between-class-members": ["error", "always"],
        "arrow-parens": ["error", "always"],
        "sort-imports-es6-autofix/sort-imports-es6": [2, {
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["single", "all", "multiple", "none"]
        }],
        "@typescript-eslint/no-explicit-any": "off",
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: [
                    "block",
                    "block-like"
                ],
                next: "*"
            },
            {
                blankLine: "always",
                prev: "*",
                next: [
                    "class",
                    "break",
                    "case",
                    "function",
                    "return",
                    "import",
                    "export"
                ]
            },
            {
                blankLine: "always",
                next: "*",
                prev: [
                    "class",
                    "break",
                    "case",
                    "function",
                    "return",
                    "import",
                    "export"
                ]
            },
            {
                blankLine: "never",
                prev: [
                    "import"
                ],
                next: [
                    "import"
                ]
            },
            {
                blankLine: "never",
                prev: [
                    "export"
                ],
                next: [
                    "export"
                ]
            }
        ]
    }
}
