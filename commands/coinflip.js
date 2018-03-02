exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    message.channel.send(sender+' lanzó una moneda...');	//Prepara la tensión en el ambiente
    if(Math.floor(Math.random() * 2) === 0){  //0 se toma como 'Cara'
        const embed = new Discord.RichEmbed()
            .setAuthor('Coinflip!')
            .setDescription('Salió Cara!')
            .setColor(0x880000)
            .setImage('https://i.imgur.com/eisOgJ8.png');
        message.channel.send({embed});
    }else{	//La otra opción solo puede ser 1, 'Sello'
        const embed = new Discord.RichEmbed()
            .setAuthor('Coinflip!')
            .setDescription('Salió Sello!')
            .setColor(0x000088)
            .setImage('https://i.imgur.com/dPYONPD.png');
        message.channel.send({embed});
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['caraosello', 'moneda'],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  description: 'Lanza una moneda!',
  usage: 'coinflip'
};
