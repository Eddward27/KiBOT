exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');

    randomPuppy('frog')
    .then(url => {
        console.log('[RANA]: ' + url);
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/frog');
        message.channel.send({embed});
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ribbit', 'rana', 'sapo', 'sapito', 'sapolio', 'froggo'],
  permLevel: 0
};

exports.help = {
  name: 'frog',
  description: 'Rana random auspiciada por: https://www.reddit.com/r/frog',
  usage: 'frog'
};
