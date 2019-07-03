module.exports ={
    parser: "babel-eslint",
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    globals:{

    },
    extends: [
        "airbnb",
        "prettier",
        "plugin:prettier/recommended"
    ],
    plugins: [
        "react",
        "prettier",
        "react-hooks"
    ],
    rules: {
        "no-useless-concat": 0,
        "import/no-duplicates": 0,
        "import/no-unresolved": 0,
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "no-console": 0,
        "react/jsx-indent": 0,
        "react/jsx-filename-extension": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "linebreak-style": 0,
    }
};
