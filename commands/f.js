exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const fs = require('fs');
    const moment = require('moment');
    const chalk = require('chalk');
    let settings = JSON.parse(fs.readFileSync("../settings.json", "utf8"));
    let respects = message.mentions.members.first();
    if(respects){
        settings.respetos++;
        fs.writeFile("../settings.json", JSON.stringify(settings), (err) => console.error);
        message.channel.send(sender + ' Pagó respetos por: ' + respects + ' - ' + settings.respetos + ' pagados en total.');
        console.log(chalk.bgRed('[F]') + ' '+ sender.username + '@' + message.channel.name + ' Pagó por: ' + respects.displayName + ' - Total: ' + settings.respetos + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    settings.respetos++;
    fs.writeFile("../settings.json", JSON.stringify(settings), (err) => console.error);
    message.channel.send(sender + ' Pagó respetos! - ' + settings.respetos + ' pagados en total.');
    console.log(chalk.bgRed('[F]') + ' '+ sender.username + '@' + message.channel.name + ' Total: ' + settings.respetos + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['respects'],
  permLevel: 0
};

exports.help = {
  name: 'f',
  description: 'Press F!',
  usage: 'f [usuario]'
};
