exports.run = (client, message, args, sender) => {
    const moment = require('moment');
    const chalk = require('chalk');
    let texto = args.join(" ");
    message.channel.send(texto);
    console.log(chalk.bgBlackBright('[Say]') + ' ' + sender.username + '@' + message.channel.name + ' Mensaje: ' + texto + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Digo algo?',
  usage: 'say <mensaje>'
};
