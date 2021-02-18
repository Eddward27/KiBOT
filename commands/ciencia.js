exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    const embed = new Discord.RichEmbed()
        .setDescription('No lo dice ' + sender + ', lo dice la ciencia')
        .setColor(0x4490FF)
        .setImage(imgs.ciencia);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Ciencia]') + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['science'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'ciencia',
    description: 'No lo digo yo... lo dice la ciencia',
    usage: 'ciencia'
};
