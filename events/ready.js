const chalk = require('chalk');
module.exports = client => { // eslint-disable-line no-unused-vars
    
    var streamSettings = {
        name: 'Stream Pulento',
        url: 'https://www.twitch.tv/elwarizapo',
        type: 1
    };
    
    client.user.setStatus('online'); // online, idle, invisible, dnd
    
    client.user.setActivity('With my code');
    
    console.log(chalk.bgGreen.black('ESTA VIVO!!!!!!!!!!!!!'));
};
