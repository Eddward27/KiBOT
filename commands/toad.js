exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    let toad = message.mentions.members.first();
    if(!toad){
        const embed = new Discord.RichEmbed()
            .setDescription('Toad Party!')
            .setColor(0x41C61F)
            .setImage(imgs.callampa);
        message.channel.send({embed});
        console.log(chalk.bgRed('[Toad]') + ' '+ sender.username + '@' + message.channel.name + `[${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    const embed = new Discord.RichEmbed()
        .setDescription(toad + ' tiene la mansa party!')
        .setColor(0x41C61F)
        .setImage(imgs.callampa);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Toad]') + ' '+ sender.username + '@' + message.channel.name + ' Callampa: ' + toad.displayName + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
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
