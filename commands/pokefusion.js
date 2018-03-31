exports.run = (client, message, args, sender) => {
    const poke = require('../data/pokefusion.json');
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var pkmn1 = Math.floor(Math.random() * poke.name.length);
    var pkmn2 = Math.floor(Math.random() * poke.name.length);
    while (pkmn1 === pkmn2){
        var pkmn2 = Math.floor(Math.random() * poke.name.length);
    }
    var urlFusionIMG = "http://images.alexonsager.net/pokemon/fused/" + pkmn2 + "/" + pkmn2 + "." + pkmn1 + ".png"
    var urlFusion = "http://pokemon.alexonsager.net/" + pkmn1 + "/" + pkmn2
    var fusionName = poke.nameFront[pkmn1] + poke.nameEnd[pkmn2]
    var urlPKMN1 = "https://www.pokemon.com/us/pokedex/" + poke.name[pkmn1]
    if(pkmn1 === 122){
        urlPKMN1 = "https://www.pokemon.com/us/pokedex/mr-mime"
        fusionName = poke.nameFront[pkmn1] + capitalizeFirstLetter(poke.nameEnd[pkmn2])
    }
    var urlPKMN2 = "https://www.pokemon.com/us/pokedex/" + poke.name[pkmn2]
    if(pkmn2 === 122)
        urlPKMN2 = "https://www.pokemon.com/us/pokedex/Mr-Mime"
    var footBerry = Math.floor(Math.random() * poke.berry.length);
    const embed = new Discord.RichEmbed()
        .setAuthor(fusionName, "https://cdn.bulbagarden.net/upload/9/93/Bag_Pok%C3%A9_Ball_Sprite.png", urlFusion)
        .setThumbnail("https://cdn.bulbagarden.net/upload/9/9f/Key_Pok%C3%A9dex_m_Sprite.png")
        .setTitle("Pokéfusion!")
        .setURL(urlFusion)
        .setDescription("Fusion de: " + poke.name[pkmn1] + " & " + poke.name[pkmn2])
        .addField(poke.name[pkmn1], urlPKMN1)
        .addField(poke.name[pkmn2], urlPKMN2)
        .setImage(urlFusionIMG)
        .setColor(0x770000)
        .setFooter(fusionName, poke.berry[footBerry]);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Pokéfusion]') + ' '+ sender.username + '@' + message.channel.name + ` ${poke.name[pkmn1]} (${pkmn1}) & ${poke.name[pkmn2]} (${pkmn2}) = ${poke.nameFront[pkmn1]}${poke.nameEnd[pkmn2]} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

//https://www.pokemon.com/us/pokedex/

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['poke', 'fusion'],
    permLevel: 0
};

exports.help = {
    name: 'pokefusion',
    description: 'Muestra una Pokéfusion aleatoria (Gen. 1)',
    usage: 'pokefusion'
};
