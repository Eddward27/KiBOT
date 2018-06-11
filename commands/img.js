exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    const settings = require('../settings.json');

    if (args.length < 1) return message.reply('Escribe algún subreddit donde buscar');
    let texto = args.join(" ");

    randomPuppy(texto)
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setColor(settings.color)
            .setImage(url)
            .setFooter(`Desde: reddit.com/r/${texto}`);
        message.channel.send({embed});
        console.log(chalk.bgMagenta('[IMG: ' + texto + ']') + ' '+ sender.username + '@' + message.channel.name + ' URL: ' + url + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['redditimage', 'pic', 'image', 'redditpic'],
  permLevel: 0,
  category: 'imagenes'
};

exports.help = {
  name: 'img',
  description: 'Retorna una imagen random desde un subreddit pedido\nEjemplo -img landscape',
  usage: 'img'
};
