exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setColor(0x6FB242)
        .setImage('https://i.imgur.com/28B6Rbo.jpg');
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shrek',
  description: 'shrek',
  usage: 'shrek'
};
