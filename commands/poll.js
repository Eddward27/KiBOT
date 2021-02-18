exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    const optionEmoji = require('../data/regionalIndicator.json');

    let poll = args.join(" ").split(",");
    let pregunta = poll.shift();
    if (poll.length < 2){
        message.channel.send(`Formato inválido, usa \`${settings.prefix}help poll\` para más información`)
        console.log(chalk.bgRed('[Poll]') + ' '+ sender.username + '@' + message.channel.name + ` sin argumentos mínimos [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    if (poll.length > 26){
        message.channel.send(`Límite de opciones excedido, por favor repíte el comando con menos opciones (Máx: 26)`);
        console.log(chalk.bgRed('[Poll]') + ' '+ sender.username + '@' + message.channel.name + ` Límite de opciones excedido: ${poll.length-1} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    for (var i = 0; i < poll.length; i++) { //Se borran los espacios que sobran
        poll[i] = poll[i].trim();
    }
    pregunta = pregunta.trim();

    var title = `Encuesta: ${pregunta}`;
    var respuestas = `Responde con la **reacción** de la opción deseada:\n`;
    for (var i = 0; i < poll.length; i++) {
        respuestas = respuestas.concat(`\n${optionEmoji.emojis[i]} -> ${poll[i]}`);
    }

    const embed = new Discord.RichEmbed()
        .setTitle(title)
        .setDescription(respuestas)
        .setColor(0xFF8C28);
    message.channel.send({embed})
    .then (async function (msg){
        for (var j = 0; j < poll.length; j++) {
            await msg.react(`${optionEmoji.react[j]}`);
        }
    });

    console.log(chalk.bgRed('[Poll]') + ' '+ sender.username + '@' + message.channel.name + ` Pregunta: ${pregunta} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['encuesta'],
    permLevel: 0,
  category: 'util'
};

exports.help = {
    name: 'poll',
    description: 'Genera una encuesta para los usuarios respondiendo con reacciones',
    usage: 'poll <pregunta>, <opción 1>, <opción 2>, [opción 3]...'
};
