exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    const embed = new Discord.RichEmbed()
        .setColor(0x2421BA)
        .setImage(imgs.compila);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Compila]') + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'compila',
    description: 'No compila :c',
    usage: 'compila'
};
