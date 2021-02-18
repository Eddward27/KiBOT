exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    let claro = message.mentions.members.first();
    const embed = new Discord.RichEmbed()
        .setColor(0xFF8C28)
        .setImage(imgs.thumbsup);
    if(!claro){
        embed.setDescription('Claaaaaaaro...')
    } else {
        embed.setDescription('Claro que yes, ' + claro)
        console.log(`Claro: ${claro.displayName}`);
    }
    message.channel.send({embed});
    console.log(`${chalk.bgRed('[Ok]')} ${sender.username}@${message.channel.name} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['k', 'bueno', 'ya'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'ok',
    description: 'Claaaaro...',
    usage: 'ok [usuario]'
};
