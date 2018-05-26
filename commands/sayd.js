exports.run = (client, message, args, sender) => {
    const moment = require('moment');
    const chalk = require('chalk');
    if (args.length < 1){
        console.log(chalk.bgBlackBright('[Sayd]') + ' ' + sender.username + '@' + message.channel.name + ` Sin mensaje - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return message.channel.send("Que tengo que decir?");
    }
    let texto = args.join(" ");
    message.delete();
    message.channel.send(texto);
    console.log(chalk.bgBlackBright('[Sayd]') + ' ' + sender.username + '@' + message.channel.name + ' Mensaje: ' + texto + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'sayd',
    description: 'Digo algo? y te la dejo piola',
    usage: 'sayd <mensaje>'
};
