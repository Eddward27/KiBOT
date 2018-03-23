exports.run = (client, message, args, sender) => {
    const moment = require('moment');
    const chalk = require('chalk');
    let mention = message.mentions.members.first();
    if(!mention){
        message.channel.send(sender +' tu ID de Discord es: \''+sender.id+'\'');
        console.log(chalk.bgBlackBright('[ID]') + ' ' + sender.username + '@' + message.channel.name + ' ID: ' + sender.id + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    message.channel.send('El ID de Discord de: ' + mention.displayName + ' es: \'' + mention.id +'\'');
    console.log(chalk.bgBlackBright('[ID]') + ' ' + sender.username + '@' + message.channel.name + ' User: ' + mention.displayName + ' ID: ' + mention.id + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['id', 'discordid'],
  permLevel: 0
};

exports.help = {
  name: 'userid',
  description: 'Muestra tu ID de Discord, o la de un usuario',
  usage: 'userid [usuario]'
};
