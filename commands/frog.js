exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    const moment = require('moment');
    const chalk = require('chalk');

    randomPuppy('frogs')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/frogs');
        message.channel.send({embed});
        console.log(chalk.bgMagenta('[Rana]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ribbit', 'rana', 'sapo', 'sapito', 'sapolio', 'froggo'],
  permLevel: 0
};

exports.help = {
  name: 'frog',
  description: 'Rana random auspiciada por: /r/frogs',
  usage: 'frog'
};
