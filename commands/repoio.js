exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    let repoio = message.mentions.members.first();
    if(!repoio){
        const embed = new Discord.RichEmbed()
            .setColor(0x41C61F)
            .setImage('https://i.imgur.com/Q8keq62.jpg');
        message.channel.send({embed});
        return;
    }
    const embed = new Discord.RichEmbed()
        .setDescription(repoio + ' terrible repoio!')
        .setColor(0x41C61F)
        .setImage('https://i.imgur.com/Q8keq62.jpg');
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['repollo', 'repoiazo'],
  permLevel: 0
};

exports.help = {
  name: 'repoio',
  description: 'Supernova repoio',
  usage: 'repoio [usuario]'
};
