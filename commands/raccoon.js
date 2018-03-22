exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');

    randomPuppy('raccoons')
    .then(url => {
        console.log('[MAPACHE]: ' + url);
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/raccoons');
        message.channel.send({embed});
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mapache', 'mapocho', 'racc', 'trashpanda', 'ladron'],
  permLevel: 0
};

exports.help = {
  name: 'raccoon',
  description: 'Mapache random auspiciado por: https://www.reddit.com/r/raccoons',
  usage: 'raccoon'
};
