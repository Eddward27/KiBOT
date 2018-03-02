exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setAuthor('Avatar')
        .setDescription(sender)
        .setColor(0xD9A744)
        .setImage(sender.avatarURL)
        .setURL(sender.avatarURL)
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Muestra el avatar de un usuario mencionado',
  usage: 'avatar <usuario>'
};
