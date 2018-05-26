exports.run = (client, message) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    let embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setDescription('Ping?')
    message.channel.send(embed)
    .then(msg => {
        let embedEdit = new Discord.RichEmbed()
            .setColor('FF0000')
            .setDescription(`:ping_pong: Pong! - ${msg.createdTimestamp - message.createdTimestamp}ms!`)
    msg.edit(embedEdit)
    });
    console.log(chalk.bgBlackBright('[Ping]') + ' ' + message.author.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'general'
};

exports.help = {
    name: 'ping',
    description: 'Ping?',
    usage: 'ping'
};
