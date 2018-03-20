exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    let user;
    if (!message.mentions.members.first()) {
      user = sender;
    } else {
      user = message.mentions.members.first();
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
