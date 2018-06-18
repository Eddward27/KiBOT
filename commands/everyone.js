exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    var emojis = client.guilds.find('id', '429696032775864335').emojis
    const emoji = emojis.find('name', 'ping');
    const embed = new Discord.RichEmbed()
        .setColor(0xF04847)
        .setDescription('PING!!!!!')
        .setImage(imgs.ping);
    message.channel.send({embed}).then(sentMessage => sentMessage.react(emoji));
    console.log(`${chalk.bgRed('[Everyone]')} ${sender.username}@${message.channel.name} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pinged', 'everyoneping', 'eping'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'everyone',
    description: '@everyone :/',
    usage: 'everyone'
};
