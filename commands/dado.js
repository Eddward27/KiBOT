exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    message.channel.send(sender+' lanzó un dado...');	//Prepara la tensión en el ambiente
    let resultado = (Math.floor(Math.random() * 6)) + 1; //Resultado [1,6]
    let dado;
    switch (resultado) {
        case 1:
            dado = 'https://i.imgur.com/xomXZKM.png';
            break;
        case 2:
            dado = 'https://i.imgur.com/a0VqiNC.png';
            break;
        case 3:
            dado = 'https://i.imgur.com/ienpJ5o.png';
            break;
        case 4:
            dado = 'https://i.imgur.com/WGhSGHg.png';
            break;
        case 5:
            dado = 'https://i.imgur.com/I1pPKPo.png';
            break;
        case 6:
            dado = 'https://i.imgur.com/imegDd1.png';
            break;
        default:
            message.channel.send('Ups... algo salió mal (mas detalles en consola)');
            console.log(chalk.bgRed('[Dado]') + ' El random para el dado fué: ' + resultado + ` - Revisa el código. [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
            return;
    }
    const embed = new Discord.RichEmbed()
        .setAuthor('Dado')
        .setDescription('El resultado es: ' + resultado)
        .setColor(0x840000)
        .setImage(dado);
    message.channel.send({embed});
    console.log(chalk.bgRed('[Dado]') + ' '+ sender.username + '@' + message.channel.name + ' Resultado: ' + resultado + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
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
