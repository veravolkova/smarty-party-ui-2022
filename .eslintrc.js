module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "cypress/globals": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest",
    "react", "jest", "cypress"
  ],
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "quotes": [
      2,
      "double"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "max-len": ["warn", { "code": 100 }],
    "eqeqeq": "warn",
    "no-trailing-spaces": "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "object-curly-spacing": [
      "warn", "always"
    ],
    "arrow-spacing": [
      "warn", { "before": true, "after": true }
    ],
    "no-console": 0,
    "react/prop-types": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};