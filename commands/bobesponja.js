exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');

    const embed = new Discord.RichEmbed()
        .setColor(0xAA0000)
        .setImage(imgs.bob);

    if (args[0]) {
        let texto = args.join(" ");
        var resultado = ''
        texto = texto.toLowerCase();
        while (texto) {
            var caracter = texto.charAt(0);
            texto = texto.substr(1)
            if (Math.floor(Math.random() * 2))
                caracter = caracter.toUpperCase();
            resultado = resultado + caracter;
        }
        embed.setDescription(resultado);
    }
    message.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bob', 'spongebob'],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'bobesponja',
    description: 'eSto eS uN mEMe',
    usage: 'bobesponja [texto]'
};
