exports.run = (client, message, args, sender) => {
    const poke = require('../data/pokefusion.json');
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var pkmn1
    var pkmn2
    if (args.length < 1){
        pkmn1 = Math.floor(Math.random() * poke.name.length);
        pkmn2 = Math.floor(Math.random() * poke.name.length);
    }else{
        var customPKMN1 = parseInt(args[0])
        var customPKMN2 = parseInt(args[1])
        if(isNaN(customPKMN1) || isNaN(customPKMN2) || customPKMN1 > 151 || customPKMN2 > 151 || customPKMN1 < 0 || customPKMN2 < 0){
            return message.channel.send("Por favor ingresa 2 números menores a 151 para realizar la fusión")
        }
        pkmn1 = customPKMN1
        pkmn2 = customPKMN2
    }
    while (pkmn1 === pkmn2){
        var pkmn2 = Math.floor(Math.random() * poke.name.length);
    }
    //var urlFusionIMG = "http://images.alexonsager.net/pokemon/fused/" + pkmn2 + "/" + pkmn2 + "." + pkmn1 + ".png"
    //var urlFusion = "http://pokemon.alexonsager.net/" + pkmn1 + "/" + pkmn2
    var fusionName = poke.nameFront[pkmn1] + poke.nameEnd[pkmn2]
    var urlPKMN1 = poke.urlPKMN + poke.name[pkmn1]
    if(pkmn1 === 122){
        urlPKMN1 = poke.urlPKMN + "mr-mime"
        fusionName = poke.nameFront[pkmn1] + capitalizeFirstLetter(poke.nameEnd[pkmn2])
    }
    var urlPKMN2 = poke.urlPKMN + poke.name[pkmn2]
    if(pkmn2 === 122)
        urlPKMN2 = poke.urlPKMN + "mr-mime"
    var footBerry = Math.floor(Math.random() * poke.berry.length);
    const embed = new Discord.RichEmbed()
        .setAuthor(fusionName, poke.pokeballICO, `${poke.urlFusion}${pkmn1}/${pkmn2}`)
        .setThumbnail(poke.dexSprite)
        .setTitle("Pokéfusion!")
        .setURL(`${poke.urlFusion}${pkmn1}/${pkmn2}`)
        .setDescription("Fusion de: " + poke.name[pkmn1] + " & " + poke.name[pkmn2])
        .addField(poke.name[pkmn1], urlPKMN1)
        .addField(poke.name[pkmn2], urlPKMN2)
        .setImage(`${poke.urlFusionIMG}${pkmn2}/${pkmn2}.${pkmn1}.png`)
        .setColor(0x770000)
        .setFooter(fusionName, poke.berry[footBerry]);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Pokéfusion]') + ' '+ sender.username + '@' + message.channel.name + ` ${poke.name[pkmn1]} (${pkmn1}) & ${poke.name[pkmn2]} (${pkmn2}) = ${poke.nameFront[pkmn1]}${poke.nameEnd[pkmn2]} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['poke', 'fusion'],
    permLevel: 0
};

exports.help = {
    name: 'pokefusion',
    description: 'Muestra una Pokéfusion aleatoria (Gen. 1) o bien recibe dos números hasta el 151 para crear la fusion pedida',
    usage: 'pokefusion [N° Poké 1] [N° Poké 2]'
};
