const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
var request = require('request');
const settings = require('../settings.json');
module.exports = (req, consoleTag, message) => {
    var GphApiClient = require('giphy-js-sdk-core')
    client = GphApiClient(settings.giphyToken)
    let sender = message.author;

    client.random('gifs', {"tag": req, "fmt": "json"})
    .then((response) => {
        if(response.data.url){
            const embed = new Discord.RichEmbed()
                .setColor(0x880000)
                .setImage("https://media.giphy.com/media/" + response.data.images.id + "/giphy.gif")
                .setThumbnail(settings.giphyLogo)
                .setURL(response.data.url)
                .setFooter('Powered By GIPHY');
            message.channel.send({embed});
            console.log(chalk.bgMagenta(consoleTag) + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + response.data.url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }else{
            message.channel.send('No se encontró nada :c')
        }
    })
    .catch((err) => {
        console.log(err);
    })
};
