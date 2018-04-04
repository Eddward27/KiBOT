exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var request = require('request');

    request('http://aws.random.cat/meow', function (error, response, body) {
        if(error){
            console.log(chalk.bgMagenta('[Gato] from: ' + sender.username + '@' + message.channel.name + " - ERROR: ") + error)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage(bodyJSON.file)
                .setFooter('Auspiciado por: random.cat');
            message.channel.send({embed});
            console.log(chalk.bgMagenta('[Gato]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + bodyJSON.file + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['catto', 'neko', 'gato', 'gatito', 'kitten', 'kitty', 'cuchito'],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: 'Gato random auspiciado por: random.cat',
  usage: 'cat'
};
