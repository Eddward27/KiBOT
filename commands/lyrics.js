exports.run = (client, message, args, sender, perms, command) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const Discord = require('discord.js');
    const settings = require('../settings.json');
    var Genius = require('node-genius');
    var geniusClient = new Genius(settings.geniusToken);

    if (args.length < 1){
        return message.channel.send('Especifíca una canción para buscar su letra...')
    }

    var busqueda = args.join(" ");

    geniusClient.search(busqueda, function (error, results) {
        if(error){
            console.log(error);
            message.channel.send(`Algo salió mal... Reporta esto con \`${settings.prefix}report\``);
        }
        else {
            let resultado = JSON.parse(results);
            if(resultado.response.hits.length){
                message.channel.startTyping()
                const embed = new Discord.RichEmbed()
                    .setTitle(`Busqueda de letra`)
                    .setDescription(`Cantidad de respuestas: ${resultado.response.hits.length}`)
                    .setColor(settings.color)
                    .setFooter(`Powered by genius.com`)
                    .setTimestamp();
                resultado.response.hits.forEach(cancion => {
                    embed.addField(cancion.result.full_title, cancion.result.url)
                });
                message.channel.send(embed);
                message.channel.stopTyping(true)
            } else {
                message.channel.send(`No se encontró canción con el nombre: \`${busqueda}\``)
            }
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['letra', 'lyric'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'lyrics',
    description: 'Obtiene la letra de alguna canción, Powered by genius.com',
    usage: 'lyrics <nombre cancion>'
};
