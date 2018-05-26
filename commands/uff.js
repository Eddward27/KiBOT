exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    const embed = new Discord.RichEmbed()
        .setDescription('Uff m3n!')
        .setColor(0xCCCCCC)
        .setImage(imgs.uff);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Uff]') + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uf','ufff'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'uff',
    description: 'm3n!',
    usage: 'uff'
};
