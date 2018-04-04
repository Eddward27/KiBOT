exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var request = require('request');

    request('https://random.dog/woof.json', function (error, response, body) {
        if(error){
            console.log(chalk.bgMagenta('[Perro] from: ' + sender.username + '@' + message.channel.name + " - ERROR: ") + error)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage(bodyJSON.url)
                .setFooter('Auspiciado por: random.dog');
            message.channel.send({embed});
            console.log(chalk.bgMagenta('[Perro]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + bodyJSON.url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['doggo', 'inu', 'perro', 'doge', 'pupper', 'cachorro'],
  permLevel: 0
};

exports.help = {
  name: 'dog',
  description: 'Perrito random auspiciado por: random.dog',
  usage: 'dog'
};
