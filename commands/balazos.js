exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    let baka = message.mentions.members.first();
    if(!baka){
        const embed = new Discord.RichEmbed()
            .setColor(0xAA0000)
            .setImage('https://i.imgur.com/JeV6yQE.gif');
        message.channel.send({embed});
        return;
    }
    const embed = new Discord.RichEmbed()
        .setDescription(sender + ' manda balazos a: ' + baka)
        .setColor(0xAA0000)
        .setImage('https://i.imgur.com/JeV6yQE.gif');
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['baka'],
  permLevel: 0
};

exports.help = {
  name: 'balazos',
  description: '>.<',
  usage: 'balazos [usuario]'
};
