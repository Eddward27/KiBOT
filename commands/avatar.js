exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    let avatar = message.mentions.members.first();
    if(avatar){
        const embed = new Discord.RichEmbed()
            .setAuthor('Avatar')
            .setDescription(avatar)
            .setColor(0xD9A744)
            .setImage(avatar.user.avatarURL)
            .setURL(avatar.avatarURL)
        message.channel.send({embed});
        console.log(chalk.bgBlackBright('[Avatar]') + ' ' + sender.username + '@' + message.channel.name + ` Avatar: ${avatar.user.username} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    const embed = new Discord.RichEmbed()
        .setAuthor('Avatar')
        .setDescription(sender)
        .setColor(0xD9A744)
        .setImage(sender.avatarURL)
        .setURL(sender.avatarURL)
    message.channel.send({embed});
    console.log(chalk.bgBlackBright('[Avatar]') + ' ' + sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Muestra tu avatar o el de un usuario mencionado',
  usage: 'avatar [usuario]'
};
