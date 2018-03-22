exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');

    randomPuppy('cat')
    .then(url => {
        console.log('[GATO]: ' + url);
        const embed = new Discord.RichEmbed()
            .setColor(0x880000)
            .setImage(url)
            .setFooter('Auspiciado por: https://www.reddit.com/r/cat');
        message.channel.send({embed});
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['catto', 'neko', 'gato', 'gatito', 'kitten', 'kitty', 'cuchito'],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: 'Gato random auspiciado por: https://www.reddit.com/r/cat',
  usage: 'cat'
};
