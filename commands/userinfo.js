exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    let user;
    if (!message.mentions.members.first()) {
      user = sender;
      console.log(chalk.bgBlackBright('[User Info]') + ' ' + user.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    } else {
      user = message.mentions.members.first();
      console.log(chalk.bgBlackBright('[User Info]') + ' ' + sender.username + '@' + message.channel.name + ' User: ' + user.displayName + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }

    const embed = new Discord.RichEmbed()
        .setColor(0x00ae86)
        .setTitle('Informacion de Usuario')
        .addField('ID', user.id)
        .addField('Fecha creación', user.createdAt)
        .addField('Nombres', 'Nick: ' + user.displayName + `\nUsuario: ${user.tag}`)
        .setImage(user.avatarURL);
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['infouser', 'infousuario'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Muestra la informacion de un usuario',
  usage: 'userinfo [usuario]'
};
