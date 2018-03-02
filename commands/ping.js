exports.run = (client, message) => {
    const Discord = require('discord.js');
    let embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setDescription('Ping?')
    message.channel.send(embed)
        .then(msg => {
            let embedEdit = new Discord.RichEmbed()
                .setColor('FF0000')
                .setDescription(`:ping_pong: Pong! - ${msg.createdTimestamp - message.createdTimestamp}ms!`)
        msg.edit(embedEdit)
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping?',
  usage: 'ping'
};
