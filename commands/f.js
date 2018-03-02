exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    let respects = message.mentions.members.first();
    if(respects)
        return message.channel.send(sender + ' Pidió respetos para: ' + respects);
    return message.channel.send(sender + ' Pagó respetos!');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['respects'],
  permLevel: 0
};

exports.help = {
  name: 'f',
  description: 'Press F!',
  usage: 'f [usuario]'
};
