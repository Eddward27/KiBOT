exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var pkmn1 = Math.floor(Math.random() * (151));
    var pkmn2 = Math.floor(Math.random() * (151));
    while (pkmn1 === pkmn2){
        var pkmn2 = Math.floor(Math.random() * (151));
    }
    var urlFusion = "http://images.alexonsager.net/pokemon/fused/" + pkmn1 + "/" + pkmn1 + "." + pkmn2 + ".png"
    const embed = new Discord.RichEmbed()
        .setAuthor('Pokéfusion!!')
        .setColor(0x770000)
        .setImage(urlFusion);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Pokéfusion]') + ' '+ sender.username + '@' + message.channel.name + ` ${pkmn1} & ${pkmn2} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

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
