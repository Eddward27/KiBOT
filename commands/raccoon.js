exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    const moment = require('moment');
    const chalk = require('chalk');

    randomPuppy('raccoons')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/raccoons');
        message.channel.send({embed});
        console.log(chalk.bgMagenta('[Mapache]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mapache', 'mapocho', 'racc', 'trashpanda', 'ladron'],
  permLevel: 0
};

exports.help = {
  name: 'raccoon',
  description: 'Mapache random auspiciado por: /r/raccoons',
  usage: 'raccoon'
};
