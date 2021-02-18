exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var request = require('request');

    request('http://api.yomomma.info/', function (error, response, body) {
        if(error){
            console.log(`${chalk.bgMagenta('[Yomama]')} from: ${sender.username}@${message.channel.name} - ERROR: ${error}`)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setDescription(bodyJSON.joke)
                .setFooter(`Powered by yomomma.info`);
            message.channel.send({embed});
            console.log(`${chalk.bgMagenta('[Yomama]')} ${sender.username}@${message.channel.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tumami', 'yomamma', 'yomomma'],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'yomama',
    description: 'Muestra un chiste random de \'yomomma.info\'',
    usage: 'yomama'
};
