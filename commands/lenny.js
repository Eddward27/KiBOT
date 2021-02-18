exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    message.channel.send('( ͡° ͜ʖ ͡°)')
    console.log(`${chalk.bgBlackBright('[Lenny]')} ${sender.username}@${message.channel.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'lenny',
    description: '( ͡° ͜ʖ ͡°)',
    usage: '-lenny'
};
