exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const embed = new Discord.RichEmbed()
        .setColor(0x2421BA)
        .setImage('https://i.imgur.com/HENFXQi.jpg');
    message.channel.send({embed});
    console.log(chalk.bgRed('[Compila]') + ' '+ sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'compila',
  description: 'No compila :c',
  usage: 'compila'
};
