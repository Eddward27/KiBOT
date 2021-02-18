exports.run = (client, message, args, sender, perms, command) => {
    const moment = require('moment');
    const chalk = require('chalk');
    if (args.length < 1){
        console.log(chalk.bgBlackBright('[Reverse]') + ' ' + sender.username + '@' + message.channel.name + ` Sin mensaje - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return message.channel.send('Escribe algo para poner en reversa, usa `-help reverse` para más información');
    }
    let texto = args.join(" ");
    var reversa = '';
    while (texto) {
        var caracter = texto.charAt(0);
        texto = texto.substr(1)
        reversa = caracter + reversa;
    }
    message.channel.send(reversa);
    console.log(chalk.bgBlackBright('[Reverse]') + ' ' + sender.username + '@' + message.channel.name + ' Mensaje: ' + texto + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reversa', 'rever', 'backwards'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'reverse',
    description: 'Devuelve el texto ingresado en reversa',
    usage: 'reverse <texto>'
};
