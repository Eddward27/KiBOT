exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    const moment = require('moment');
    const chalk = require('chalk');

    randomPuppy('owls')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/owls');
        message.channel.send({embed});
        console.log(chalk.bgMagenta('[Búho]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['chuncho', 'buho', 'fukuro', 'owls', 'chunchos', 'buhos'],
  permLevel: 0
};

exports.help = {
  name: 'owl',
  description: 'Búho random auspiciado por: /r/owls',
  usage: 'owl'
};
