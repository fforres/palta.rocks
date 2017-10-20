module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "react-app",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "eol-last": ["error", "always"],
        "indent": [
          "error",
          2
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "quotes": [
          "error",
          "single"
        ],
        "semi": [
          "error",
          "always"
        ],
        "comma-dangle": ["error", "always-multiline"],
        "padded-blocks": ["error", { "classes": "always" } ],
        "max-len": 0,
        "no-console": 1,
        "object-curly-spacing": [
          "error",
          "always", {
            "arraysInObjects": false,
          }
        ],
        "class-property/rule-name": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "react/display-name": 0,
        "react/forbid-prop-types": 0,
        "react/prefer-stateless-function": 0,
        "react/no-string-refs": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-curly-spacing": ["error", {
          "when": "always",
          "children": true,
          "spacing": {
            "objectLiterals": "never"
          }
        }],
        "eqeqeq": ["error", "always"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/sort-comp": ["error", {
          "order": [
            "static-methods",
            "lifecycle",
            "everything-else",
            "render",
            "/^_render.+$/",
          ]
        }],
    },
    "globals": {
        "EventSource": true,
        "getComputedStyle": true,
    }
};
