exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');

    randomPuppy('dog')
    .then(url => {
        console.log('[PERRO]: ' + url);
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/dog');
        message.channel.send({embed});
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['doggo', 'inu', 'perro', 'doge', 'pupper', 'cachorro'],
  permLevel: 0
};

exports.help = {
  name: 'dog',
  description: 'Perrito random auspiciado por: https://www.reddit.com/r/dog',
  usage: 'dog'
};
