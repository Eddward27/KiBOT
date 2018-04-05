exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const dado = require('../data/dado.json');
    message.channel.send(sender+' lanzó un dado...');	//Prepara la tensión en el ambiente
    let resultado = (Math.floor(Math.random() * 6)); //Resultado [1,6]
    const embed = new Discord.RichEmbed()
        .setAuthor('Dado')
        .setDescription('El resultado es: ' + (resultado+1))
        .setColor(0x840000)
        .setImage(dado.img[resultado]);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Dado]') + ' '+ sender.username + '@' + message.channel.name + ' Resultado: ' + (resultado+1) + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dado',
  description: 'Lanza un dado',
  usage: 'dado'
};
