exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    const moment = require('moment');
    const chalk = require('chalk');

    randomPuppy('geg')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('hey it geg');
        message.channel.send({embed});
        console.log(chalk.bgMagenta('[Geg]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['heyitgeg'],
  permLevel: 0,
  category: 'imagenes'
};

exports.help = {
  name: 'geg',
  description: 'hey it geg',
  usage: 'geg'
};
