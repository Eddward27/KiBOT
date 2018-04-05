exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const imgs = require('../data/imgs.json');
    message.channel.send(sender+' lanzó una moneda...');	//Prepara la tensión en el ambiente
    if(Math.floor(Math.random() * 2) === 0){  //0 se toma como 'Cara'
        const embed = new Discord.RichEmbed()
            .setAuthor('Coinflip!')
            .setDescription('Salió Cara!')
            .setColor(0x880000)
            .setImage(imgs.moneda[0]);
        message.channel.send({embed});
        console.log(chalk.bgRed('[Moneda]') + ' '+ sender.username + '@' + message.channel.name + ` CARA! [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }else{	//La otra opción solo puede ser 1, 'Sello'
        const embed = new Discord.RichEmbed()
            .setAuthor('Coinflip!')
            .setDescription('Salió Sello!')
            .setColor(0x000088)
            .setImage(imgs.moneda[1]);
        message.channel.send({embed});
        console.log(chalk.bgRed('[Moneda]') + ' '+ sender.username + '@' + message.channel.name + ` SELLO! [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['caraosello', 'moneda'],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  description: 'Lanza una moneda!',
  usage: 'coinflip'
};
