exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const urls = require('../data/urls.json');
    var request = require('request');

    request(urls.foxAPI, function (error, response, body) {
        if(error){
            console.log(chalk.bgMagenta('[Zorro] from: ' + sender.username + '@' + message.channel.name + " - ERROR: ") + error)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage(bodyJSON.url)
                .setFooter('Auspiciado por: giraffeduck.com');
            message.channel.send({embed});
            console.log(chalk.bgMagenta('[Zorro]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + bodyJSON.url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zorro', 'foxxo', 'firefox'],
  permLevel: 0
};

exports.help = {
  name: 'fox',
  description: 'Zorro random auspiciado por: giraffeduck.com',
  usage: 'fox'
};
