exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    let claro = message.mentions.members.first();
    if(!claro){
        const embed = new Discord.RichEmbed()
            .setDescription('Claaaaaaaro...')
            .setColor(0xFF8C28)
            .setImage(imgs.thumbsup);
        message.channel.send({embed});
        console.log(chalk.bgRed('[OK]') + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    const embed = new Discord.RichEmbed()
        .setDescription('Claro que yes, ' + claro)
        .setColor(0xFF8C28)
        .setImage(imgs.thumbsup);
    message.channel.send({embed});
    console.log('[OK] '+ sender.username + '@' + message.channel.name + ' hacia: ' + claro.displayName + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k', 'bueno', 'ya'],
  permLevel: 0
};

exports.help = {
  name: 'ok',
  description: 'Claaaaro...',
  usage: 'ok [usuario]'
};
