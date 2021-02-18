exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var limite = 10;

    if (args[0]) {
        if (isNaN(args[0])) {
            message.channel.send('Por favor especifíca una un valor numérico como límite');
            return console.log(`${chalk.bgRed('[Random]')} ${sender.username} - Argumento inválido - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
        limite = args[0];
    }
    var resultado = Math.floor(Math.random() * limite)
    message.channel.send(`Despues de pensarlo un poco elegí el número: \`${resultado}\``);
    return console.log(`${chalk.bgRed('[Random]')} ${sender.username} - Límite: ${limite} Resultado: ${resultado} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rand', 'aleatorio'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'random',
    description: 'Elige un número aleatorio, también puedes especificar un límite para el resultado (No inclusivo)',
    usage: 'random [limite]'
};
