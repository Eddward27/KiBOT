const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
var request = require('request');
module.exports = (req, message) => {
    let sender = message.author;
    request(req.api, function (error, response, body) {
        if(error){
            console.log(`${chalk.bgMagenta(req.consoleTag)} from: ${sender.username}@${message.channel.name} - ERROR: ${error}`)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage(bodyJSON[req.entrada])
                .setFooter(`Powered by ${req.source}`);
            message.channel.send({embed});
            console.log(`${chalk.bgMagenta(req.consoleTag)} ${sender.username}@${message.channel.name} - URL: ${bodyJSON[req.entrada]} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};