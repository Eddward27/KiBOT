exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    const moment = require('moment');
    const chalk = require('chalk');

    randomPuppy('dogs')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/dogs');
        message.channel.send({embed});
        console.log(chalk.bgMagenta('[Perro]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['doggo', 'inu', 'perro', 'doge', 'pupper', 'cachorro'],
  permLevel: 0
};

exports.help = {
  name: 'dog',
  description: 'Perrito random auspiciado por: /r/dogs',
  usage: 'dog'
};
