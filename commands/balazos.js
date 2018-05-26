exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    let baka = message.mentions.members.first();

    if(!baka){
        const embed = new Discord.RichEmbed()
        .setColor(0xAA0000)
        .setImage(imgs.balazos);
        message.channel.send({embed});
        console.log(chalk.bgRed('[Balazos]') + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    const embed = new Discord.RichEmbed()
    .setDescription(sender + ' manda balazos a: ' + baka)
    .setColor(0xAA0000)
    .setImage(imgs.balazos);
    message.channel.send({embed});
    console.log('[Balazos] '+ sender.username + '@' + message.channel.name + ' hacia: ' + baka.displayName + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['baka', 'balazo', 'bala'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'balazos',
    description: '>.<',
    usage: 'balazos [usuario]'
};
