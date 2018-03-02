exports.run = (client, message, args, sender) => {
    let mention = message.mentions.members.first();
    if(!mention) return message.channel.send(sender +' tu ID de Discord es: \''+sender.id+'\'');
    message.channel.send('El ID de Discord de: ' + mention.displayName + ' es: \'' + mention.id +'\'');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['id', 'discordid'],
  permLevel: 0
};

exports.help = {
  name: 'userid',
  description: 'Muestra tu ID de Discord, o la de un usuario',
  usage: 'userid [usuario]'
};
