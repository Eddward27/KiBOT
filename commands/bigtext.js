exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    const regionalIndicator = require('../data/regionalIndicator.json');

    if (!args[0]) {
        message.channel.send(`Especifíca un texto para escribir \`${settings.prefix}bigtext <texto>\``);
        return console.log(`${chalk.bgRed('[BigText]')} ${sender.username}@${message.channel.name} - Sin texto - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }

    var mensaje = "";
    let texto = args.join(" ");
    texto = texto.trim();
    var textoConsola = texto;
    texto = texto.toLowerCase();

    while (texto) {
        var caracter = texto.charAt(0);
        texto = texto.substr(1)
        switch (caracter) {
            case 'a':
                mensaje = mensaje + regionalIndicator.emojis[0];
                break;
            case 'b':
                mensaje = mensaje + regionalIndicator.emojis[1];
                break;
            case 'c':
                mensaje = mensaje + regionalIndicator.emojis[2];
                break;
            case 'd':
                mensaje = mensaje + regionalIndicator.emojis[3];
                break;
            case 'e':
                mensaje = mensaje + regionalIndicator.emojis[4];
                break;
            case 'f':
                mensaje = mensaje + regionalIndicator.emojis[5];
                break;
            case 'g':
                mensaje = mensaje + regionalIndicator.emojis[6];
                break;
            case 'h':
                mensaje = mensaje + regionalIndicator.emojis[7];
                break;
            case 'i':
                mensaje = mensaje + regionalIndicator.emojis[8];
                break;
            case 'j':
                mensaje = mensaje + regionalIndicator.emojis[9];
                break;
            case 'k':
                mensaje = mensaje + regionalIndicator.emojis[10];
                break;
            case 'l':
                mensaje = mensaje + regionalIndicator.emojis[11];
                break;
            case 'm':
                mensaje = mensaje + regionalIndicator.emojis[12];
                break;
            case 'n':
                mensaje = mensaje + regionalIndicator.emojis[13];
                break;
            case 'o':
                mensaje = mensaje + regionalIndicator.emojis[14];
                break;
            case 'p':
                mensaje = mensaje + regionalIndicator.emojis[15];
                break;
            case 'q':
                mensaje = mensaje + regionalIndicator.emojis[16];
                break;
            case 'r':
                mensaje = mensaje + regionalIndicator.emojis[17];
                break;
            case 's':
                mensaje = mensaje + regionalIndicator.emojis[18];
                break;
            case 't':
                mensaje = mensaje + regionalIndicator.emojis[19];
                break;
            case 'u':
                mensaje = mensaje + regionalIndicator.emojis[20];
                break;
            case 'v':
                mensaje = mensaje + regionalIndicator.emojis[21];
                break;
            case 'w':
                mensaje = mensaje + regionalIndicator.emojis[22];
                break;
            case 'x':
                mensaje = mensaje + regionalIndicator.emojis[23];
                break;
            case 'y':
                mensaje = mensaje + regionalIndicator.emojis[24];
                break;
            case 'z':
                mensaje = mensaje + regionalIndicator.emojis[25];
                break;
            case ' ':
                mensaje = mensaje + '   ';
                break;
            default:
                break;
        }
    }
    message.channel.send(mensaje)
    console.log(`${chalk.bgRed('[BigText]')} ${sender.username}@${message.channel.name} - ${textoConsola} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'bigtext',
    description: 'Genera un texto con indicadores regionales',
    usage: 'bigtext <texto>'
};
