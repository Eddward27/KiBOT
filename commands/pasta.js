exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    let pasta = message.mentions.members.first();
    const embed = new Discord.RichEmbed()
        .setColor(0xD6832A)
        .setImage(imgs.pasta);
    if(pasta){
        embed.setDescription(pasta + ' está en la pasta')
        console.log(`Pasta: ${pasta.displayName}`);
    }
    message.channel.send({embed});
    console.log(`${chalk.bgRed('[Pasta]')} ${sender.username}@${message.channel.name} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pastita'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'pasta',
    description: 'En la pasta',
    usage: 'pasta [usuario]'
};
