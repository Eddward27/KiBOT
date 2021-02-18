exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const urls = require('../data/urls.json')
    var request = require('request');

    request(urls.birdAPI, function (error, response, body) {
        if(error){
            console.log(chalk.bgMagenta('[Pájaro] from: ' + sender.username + '@' + message.channel.name + " - ERROR: ") + error)
        }
        if(response.statusCode === 200){
            let url = urls.birdIMG + body;
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage(url)
                .setFooter('Auspiciado por: random.birb.pw');
            message.channel.send({embed});
            console.log(chalk.bgMagenta('[Pájaro]') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tori', 'pajaro'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'bird',
    description: 'Pájaro random auspiciado por: random.birb.pw',
    usage: 'bird'
};
