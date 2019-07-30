module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    globals: {
        "chrome": true
    },
    rules: {
        "prettier/prettier": "error",
        "no-var": "error",
        "prefer-arrow-callback": "error",
        "eqeqeq":"error",
    }
};