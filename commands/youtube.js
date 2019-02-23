exports.run = (client, message, args, sender, perms, command) => {
    const Discord = require('discord.js');
    var search = require('youtube-search');
    const settings = require('../settings.json');
    var opts = {
        maxResults: 8,
        key: settings.youtubeKey
    };

    if (args.length < 1){
        return message.channel.send("Ingresa algo para buscar!");
    }
    let busqueda = args.join(" ");

    search(busqueda , opts, function(err, results) {
        if(err) {
            message.channel.send(`Ups! Ocurrió un error: ${err}`);
            return console.log(err);
        }
        if (results.length === 0)
            return message.channel.send(`No se encontraron resultados :c`);

        const embed = new Discord.RichEmbed()
            .setTitle(`Búsqueda YouTube`)
            .setColor(0xFF0000)
            .setDescription(`Resultados de la búsqueda de: ${busqueda}`)
            .setThumbnail(results[0].thumbnails.high.url);
        for (var i = 0; i < results.length; i++) {
            embed.addField(`${results[i].title}`, `${results[i].description}\n${results[i].link}`, false)
        }
        message.channel.send({embed});
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['video'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'youtube',
    description: 'Busca un video en YouTube',
    usage: 'youtube <busqueda>'
};
