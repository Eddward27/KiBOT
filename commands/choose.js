exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');

    let argString = args.join(" ");
    let elect = argString.split(",");
    if (elect.length < 2){
        message.channel.send(`Por favor ingresa al menos 2 parámetros para elegir, revisa \`${settings.prefix}help choose\` para más información`)
        console.log(chalk.bgRed('[Choose]') + ' '+ sender.username + '@' + message.channel.name + ` sin argumentos mínimos [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    let indexChoose = Math.floor(Math.random() *elect.length);
    message.channel.send(`Yo eligo`)
    .then(msg => {
        msg.edit(`Yo eligo...`)
        .then(msg => {
            msg.edit(`Yo eligo... \`${elect[indexChoose]}\``)
        })
    });
    console.log(chalk.bgRed('[Choose]') + ' '+ sender.username + '@' + message.channel.name + ` Resultado: ${elect[indexChoose]} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['elige', 'escoge', 'selecciona', 'pick'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'choose',
    description: 'Elige aleatoriamente una opción de los argumentos recibidos separados por coma `,` (Min. 2)',
    usage: 'choose <opcion1>, <opcion2>, [opcion3]...'
};
