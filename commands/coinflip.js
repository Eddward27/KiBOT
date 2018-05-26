exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    message.channel.send(sender+' lanzó una moneda...');
    var resultado = Math.floor(Math.random() * 2)
    const embed = new Discord.RichEmbed()
    embed.setAuthor('Coinflip!');
    embed.setColor(0x880000);
    embed.setImage(imgs.moneda[resultado]);
    if (resultado === 0){
        embed.setDescription('Salió Cara!');
        console.log(chalk.bgRed('[Moneda]') + ' '+ sender.username + '@' + message.channel.name + ` CARA! [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    } else {
        embed.setDescription('Salió Sello!');
        console.log(chalk.bgRed('[Moneda]') + ' '+ sender.username + '@' + message.channel.name + ` SELLO! [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['caraosello', 'moneda', 'flipcoin'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'coinflip',
    description: 'Lanza una moneda!',
    usage: 'coinflip'
};
