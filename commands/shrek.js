exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const embed = new Discord.RichEmbed()
        .setColor(0x6FB242)
        .setImage('https://i.imgur.com/28B6Rbo.jpg');
    message.channel.send({embed});
    console.log(chalk.bgRed('[Shrek]') + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['orgo'],
  permLevel: 0
};

exports.help = {
  name: 'shrek',
  description: 'shrek',
  usage: 'shrek'
};
