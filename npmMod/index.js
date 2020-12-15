const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.yellow.italic.inverse("false"));

const result = validator.isEmail('shimul@gmail.com');
console.log(result ? chalk.green.italic.inverse(result) : chalk.red.italic.inverse(result));