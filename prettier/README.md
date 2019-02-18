# Integrating Prettier into your project

## Install dependencies

Install [Prettier](https://github.com/prettier/prettier)

`yarn add prettier --dev`

Install appropriate linter rule sets that disable rules that would conflict with Prettier.

If you use TSLint, install [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)

`yarn add tslint-config-prettier --dev`

If you use stylelint, install [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

`yarn add stylelint-config-prettier --dev`

## Modify linter configs

Update appropriate linter configs to have the newly installed linter rule sets at the end of the extends arrays. For example:

`tslint.json`

```json
{
  "extends": [
    "./node_modules/@covalent/tools/lint/tslint/tslint.json",
    "tslint-config-prettier"
  ]
}
```

`stylelintrc.json`

```json
{
  "extends": [
    "./node_modules/@covalent/tools/lint/stylelint/.stylelintrc.json",
    "stylelint-config-prettier"
  ]
}
```

## Add Prettier config files

Create a `prettier.config.js` file at the root level that references the `prettier.config.js` file located inside this repo.

```javascript
var defaultConfig = require('./node_modules/@covalent/tools/prettier/prettier.config.js');
module.exports = defaultConfig;
```

Create a `.prettierignore` file at the root level. This could a copy of your `.gitignore`.

## Create an npm script

`package.json`
```
"prettier": "./node_modules/.bin/prettier --write './**/*.{ts,js,json,css,scss,html,yml,md}'",
```

## Setup a pre commit hook


Install [husky](https://github.com/typicode/husky)

`yarn add husky --dev`


Install [pretty-quick](https://github.com/azz/pretty-quick)

`yarn add pretty-quick --dev`

Add the following to your `package.json`

```json
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged --no-restage"
    }
  },
```

## Run Prettier

`yarn prettier`

Enjoy!
