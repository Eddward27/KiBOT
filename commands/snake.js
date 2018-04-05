exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const urls = require('../data/urls.json');
    var request = require('request');

    request(urls.snakeAPI, function (error, response, body) {
        if(error){
            console.log(chalk.bgMagenta('[Snake] from: ' + sender.username + '@' + message.channel.name + " - ERROR: ") + error)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage(bodyJSON.file)
                .setFooter('Auspiciado por: fur.im');
            message.channel.send({embed});
            console.log(chalk.bgMagenta('[Snake]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + bodyJSON.file + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['culebra', 'serpiente', 'snek'],
  permLevel: 0
};

exports.help = {
  name: 'snake',
  description: 'Serpiente random auspiciado por: fur.im',
  usage: 'snake'
};
