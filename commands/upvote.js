exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');

    message.channel.send(`Gracias por darnos tu voto, por favor entra aquí para hacerlo: https://discordbots.org/bot/361903392005554176/vote`);
    console.log(chalk.bgMagenta('[Vote]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vote'],
  permLevel: 0,
  category: 'general'
};

exports.help = {
  name: 'upvote',
  description: 'Vota por KiBOT en discordbots.org!',
  usage: 'upvote'
};
