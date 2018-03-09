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
  aliases: ['science'],
  permLevel: 0
};

exports.help = {
  name: 'ciencia',
  description: 'No lo digo yo... lo dice la ciencia',
  usage: 'ciencia'
};
