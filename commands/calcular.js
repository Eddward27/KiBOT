exports.run = (client, message, args, sender) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const calc = require('calculatorjs');
    if (!args[0]) {
        console.log(`${chalk.bgRed('[Calcular]')} ${sender.username}@${message.channel.name} No args [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return message.channel.send('Por favor escribe una expresión para calcular');
    }
    let texto = args.join(" ");
    texto = texto.replace(/ /g,'')
    try {
        var resultado = calc(texto)
        message.channel.send(`Resultado: \`${resultado}\``)
        console.log(`${chalk.bgRed('[Calcular]')} ${sender.username}@${message.channel.name} ${texto} = ${resultado} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    } catch (e) {
        message.channel.send('Error de sintaxis: Por favor escribe una expresión válida para calcular')
        console.log(`${chalk.bgRed('[Calcular]')} ${sender.username}@${message.channel.name} Error [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['calc', 'calculator', 'calculadora'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'calcular',
    description: 'Calcula el resultado de una expresión, Ejemplo: (5+2-(7/8))*2',
    usage: 'calcular <expresión>'
};
