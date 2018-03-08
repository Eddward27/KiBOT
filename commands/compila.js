exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setColor(0x2421BA)
        .setImage('https://i.imgur.com/HENFXQi.jpg');
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'compila',
  description: 'No compila :c',
  usage: 'compila'
};
