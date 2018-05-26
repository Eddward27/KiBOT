exports.run = (client, message, args, sender) => {
    const moment = require('moment');
    const chalk = require('chalk');
    if (args.length < 1){
        console.log(chalk.bgBlackBright('[Say]') + ' ' + sender.username + '@' + message.channel.name + ` Sin mensaje - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return message.channel.send("Que tengo que decir?");
    }
    let texto = args.join(" ");
    message.channel.send(texto);
    console.log(chalk.bgBlackBright('[Say]') + ' ' + sender.username + '@' + message.channel.name + ' Mensaje: ' + texto + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['decir'],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'say',
    description: 'Digo algo?',
    usage: 'say <mensaje>'
};
