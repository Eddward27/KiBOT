exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    let repoio = message.mentions.members.first();
    if(!repoio){
        const embed = new Discord.RichEmbed()
            .setColor(0x41C61F)
            .setImage(imgs.repoio);
        message.channel.send({embed});
        console.log(chalk.bgRed('[Repollo]') + ' '+ sender.username + '@' + message.channel.name + `[${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    const embed = new Discord.RichEmbed()
        .setDescription(repoio + ' terrible repoio!')
        .setColor(0x41C61F)
        .setImage(imgs.repoio);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Repollo]') + ' '+ sender.username + '@' + message.channel.name + ' Repollo: ' + repoio.displayName + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['repollo', 'repoiazo', 'rechicken'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'repoio',
    description: 'Supernova repoio',
    usage: 'repoio [usuario]'
};
