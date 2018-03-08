exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setDescription('No lo dice ' + sender + ', lo dice la ciencia')
        .setColor(0x4490FF)
        .setImage('https://i.imgur.com/eBdo41P.jpg');
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'No lo digo yo...',
  description: '...lo dice la ciencia',
  usage: 'ciencia'
};
