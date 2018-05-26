exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var fs = require('fs');
    var fileName = './data/f.json';
    var file = require('../data/f.json');
    const user = message.mentions.users.first();

    file.respetos++;
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
        if (err)
            return message.chanel.send(`Ups!... ha ocurrido un error ${err}`);
    });

    const embed = new Discord.RichEmbed()
    if (user) {
        embed.setDescription(`**${sender.username}** Pagó respetos a ${user}`)
        console.log(chalk.bgRed('[F]') + ' '+ sender.username + '@' + message.channel.name + ` -> ${user.username} - Respetos totales: ${file.respetos} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    } else {
        embed.setDescription(`**${sender.username}** Pagó respetos`)
        console.log(chalk.bgRed('[F]') + ' '+ sender.username + '@' + message.channel.name + ` Respetos totales: ${file.respetos} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }
    embed.setFooter(`${file.respetos} respetos totales`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['respetos', 'respect'],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'f',
    description: 'Paga tus respetos',
    usage: 'f [usuario]'
};
