// @ts-check
const defaultConfig = require('./node_modules/@covalent/coding-standards/tslint/tslint.js');
const newConfig = { ...defaultConfig };
newConfig.extends = newConfig.extends.filter((config) => config !== 'tslint-angular');
module.exports = newConfig;
