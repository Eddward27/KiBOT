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
            const embed = new Discord.RichEmbed()
                .setTitle(req.name)
                .setURL(bodyJSON.url)
                .setColor(0x880000)
                .setImage(bodyJSON.url)
                .setFooter(`Powered by nekos.life`);
            message.channel.send(embed)
            console.log(`${chalk.bgMagenta(req.consoleTag)} ${sender.username}@${message.channel.name} - URL: ${bodyJSON.url} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};
