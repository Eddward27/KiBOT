exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    let toad = message.mentions.members.first();
    const embed = new Discord.RichEmbed()
        .setColor(0x41C61F)
        .setImage(imgs.callampa);
    if(!toad){
        embed.setDescription('Toad Party!')
    } else {
        embed.setDescription(toad + ' tiene la mansa party!')
        console.log(`Toad: ${toad.displayName}`);
    }
    message.channel.send({embed});
    console.log(`${chalk.bgRed('[Toad]')} ${sender.username}@${message.channel.name} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['callampa', 'hongo'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'toad',
    description: 'Toad party hard!',
    usage: 'toad [usuario]'
};
