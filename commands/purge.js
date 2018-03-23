exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const messagecount = parseInt(args.join(' ')) + 1;
    const moment = require('moment');
    const chalk = require('chalk');
    if(isNaN(messagecount)) return;
    if(messagecount < 3 || messagecount > 101) return;
    message.channel.fetchMessages({
      limit: messagecount
  }).then(messages => {
      message.channel.bulkDelete(messages)
      let consoleNumber = messagecount-1
      console.log(chalk.bgBlackBright('[Purge]') + ' ' + message.author.username + '@' + message.channel.name + ' Mensajes: ' + consoleNumber + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`)
      let embed = new Discord.RichEmbed()
          .setColor('030303')
          .setDescription(messages.size-1 + ' mensajes fueron exitosamente borrados!')
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
