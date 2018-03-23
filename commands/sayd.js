exports.run = (client, message, args, sender) => {
    const moment = require('moment');
    const chalk = require('chalk');
    let texto = args.join(" ");
    message.delete();
    message.channel.send(texto);
    console.log(chalk.bgBlackBright('[Sayd]') + ' ' + sender.username + '@' + message.channel.name + ' Mensaje: ' + texto + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sayd',
  description: 'Digo algo? y te la dejo piola',
  usage: 'sayd <mensaje>'
};
