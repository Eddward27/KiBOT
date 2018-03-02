exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setDescription('Uff m3n!')
        .setColor(0xCCCCCC)
        .setImage('https://i.imgur.com/aTt46JA.jpg');
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uf','ufff'],
  permLevel: 0
};

exports.help = {
  name: 'uff',
  description: 'm3n!',
  usage: 'uff'
};
