exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    const moment = require('moment');
    const chalk = require('chalk');

    randomPuppy('cats')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/cats');
        message.channel.send({embed});
        console.log(chalk.bgMagenta('[Gato]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['catto', 'neko', 'gato', 'gatito', 'kitten', 'kitty', 'cuchito'],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: 'Gato random auspiciado por: /r/cats',
  usage: 'cat'
};
