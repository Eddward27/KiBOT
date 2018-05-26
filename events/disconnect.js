module.exports = client => {
    const chalk = require('chalk');
    const moment = require('moment');
    console.log(chalk.blue(`Desconectadisimo - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`));
};
