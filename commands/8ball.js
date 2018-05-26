exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const bola = require('../data/8ball.json');
    let indexRespuesta = Math.floor(Math.random() * bola.respuestas.length);
    let pregunta = args.join(" ");

    if (args.length < 1){
        message.reply('Necesitas preguntarle algo a la bola para que te responda!');
        console.log(chalk.bgRed('[Bola8]') + ' '+ sender.username + '@' + message.channel.name + ` sin pregunta [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }

    message.channel.send(':8ball: *' + bola.respuestas[indexRespuesta] + '*');
    console.log('[Bola8] '+ sender.username + '@' + message.channel.name + ' Pregunta: ' + pregunta + ' - Respuesta: ' + bola.respuestas[indexRespuesta] + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bola8'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: '8ball',
    description: 'Preguntale algo a la bola 8',
    usage: '8ball <pregunta>'
};
