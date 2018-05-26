exports.run = async (client, message, args, sender) => {
    const Discord = require('discord.js');
    const messagecount = parseInt(args.join(' '));
    const moment = require('moment');
    const chalk = require('chalk');
    await message.delete();
    if(isNaN(messagecount)) return message.channel.send("Especifica una cantidad de [2, 100] mensajes para borrar");
    if(messagecount < 2 || messagecount > 100) return;
    await message.channel.fetchMessages({
      limit: messagecount
  }).then(messages => {
      message.channel.bulkDelete(messages)
      let consoleNumber = messagecount
      console.log(chalk.bgBlackBright('[Purge]') + ' ' + message.author.username + '@' + message.channel.name + ' Mensajes Encontrados: '+ messages.size + ' Mensajes Pedidos: ' + consoleNumber + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`)
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
    permLevel: 1,
    category: 'guild'
};

exports.help = {
    name: 'purge',
    description: 'Borra \'x\' mensajes de un canal',
    usage: 'purge <cantidad>'
};
