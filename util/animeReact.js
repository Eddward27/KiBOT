const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
var request = require('request');
const settings = require('../settings.json');
module.exports = (req, message) => {
    let sender = message.author;
    let target = message.mentions.members.first();
    request(req.api, function (error, response, body) {
        if(error){
            message.channel.send(`Ups... algo salió mal, por favor usa el comando \`${settings.prefix}report\` para notificar el error`);
            console.log(`${chalk.bgMagenta(req.consoleTag)} from: ${sender.username}@${message.channel.name} - ERROR: ${error}`);
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            let cadena = "";
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage(bodyJSON.url)
                .setFooter(`Powered by nekos.life`);
            if (target) {
                var re1 = /-SENDER-/gi;
                var re2 = /-TARGET-/gi;
                cadena = req.mention;
                cadena = cadena.replace(re1, sender)
                cadena = cadena.replace(re2, target)
            } else {
                var re = /-SENDER-/gi;
                cadena = req.alone;
                cadena = cadena.replace(re, sender)
            }
            embed.setDescription(cadena)
            message.channel.send(embed)
            console.log(`${chalk.bgMagenta(req.consoleTag)} ${sender.username}@${message.channel.name} - URL: ${bodyJSON.url} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};
