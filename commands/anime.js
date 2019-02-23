exports.run = async (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    var anifetch = require("anifetch");
    let busqueda = args.join(" ");
    if (busqueda.length < 3)
        return message.channel.send("La búsqueda debe contener al menos 3 carácteres");
    let resultado = await anifetch.searchAnime("MyAnimeList", "anime", busqueda, 1);
    if (resultado.length === 0)
        return message.channel.send("No se encontró coincidencia en la búsqueda, intenta con otro nombre");

    var inic = resultado[0].date_start.split('T')
    inic = inic[0]
    if (resultado[0].date_end != null){
        var fin = resultado[0].date_end.split('T')
        inic = `${inic} hasta ${fin[0]}`
    }

    let sinopsis = resultado[0].synopsis
    if(sinopsis.length > 1024)
        sinopsis = sinopsis.slice(0, 1020) + '...'

    const embed = new Discord.RichEmbed()
        .setFooter(`${resultado[0].provider_name}`, resultado[0].provider_avatar)
        .setTitle(resultado[0].title_canonical)
        .setURL(resultado[0].url)
        .setThumbnail(resultado[0].cover)
        .setColor(`0x${(Math.random()*0xFFFFFF<<0).toString(16)}`)
        .addField("Nombre Original", resultado[0].title_native, true)
        .addField("Puntuación", resultado[0].score, true)
        .addField("Episodios", resultado[0].episodes, true)
        .addField("Estado", resultado[0].status, true)
        .addField("Tipo", resultado[0].type, true)
        .addField("Formato", resultado[0].format, true)
        .addField("Clasificación", resultado[0].rating, true)
        .addField("Fecha de emisión", inic, true)
        .addField("Sinopsis", sinopsis, false);

    message.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mal', 'myanimelist'],
    permLevel: 0,
    category: 'anime'
};

exports.help = {
    name: 'anime',
    description: 'Busca un anime en MyAnimeList',
    usage: 'anime <nombre>'
};
