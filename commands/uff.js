exports.run = (client, message, args, sender, perms, command) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    const embed = new Discord.RichEmbed()
    switch (command){
        case 'uf':
            embed.setImage(imgs.uff[0])
            break;
        case 'uff':
            embed.setImage(imgs.uff[1])
            break;
        case 'ufff':
            embed.setImage(imgs.uff[2])
            break;
        case 'uffff':
            embed.setImage(imgs.uff[3])
            break;
    }
    embed.setDescription('Uff m3n!')
    embed.setColor(0xCFDA60)
    message.channel.send({embed});
    console.log(chalk.bgRed(`[${command}]`) + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uf','ufff', 'uffff'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'uff',
    description: 'm3n!',
    usage: 'uff'
};
