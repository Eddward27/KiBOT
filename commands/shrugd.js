exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    message.delete()
    message.channel.send('¯\\_(ツ)_/¯')
    console.log(`${chalk.bgBlackBright('[Shrugd]')} ${sender.username}@${message.channel.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'shrugd',
    description: '¯\_(ツ)_/¯',
    usage: 'shrugd'
};
