exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const messagecount = parseInt(args.join(' '));
    if(isNaN(messagecount)) return;
    if(messagecount < 2 || messagecount > 100) return;
    message.channel.fetchMessages({
      limit: messagecount
  }).then(messages => {
      message.channel.bulkDelete(messages)
      console.log(messages.size + ' mensajes fueron borrados del canal "' + message.channel.name + '"')
      let embed = new Discord.RichEmbed()
          .setColor('030303')
          .setDescription(messages.size + ' mensajes fueron exitosamente borrados!')
      message.channel.send(embed)
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['delete', 'pg'],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Borra \'x\' mensajes de un canal',
  usage: 'purge <cantidad>'
};
