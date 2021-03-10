module.exports = {
    "extends": [
        "stylelint-config-sass-guidelines",
        "stylelint-config-prettier"
    ],
    "rules": {
        "max-nesting-depth": 2,
        "number-leading-zero": "always",
        "indentation": 2
    },
    "exclude": [
        "./assets/main.scss"
    ]
}