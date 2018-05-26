exports.run = (client, message, args, sender) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    let avatar = message.mentions.members.first();
    if (avatar) {
        avatar = avatar.user
        console.log(`Avatar: ${avatar.tag}`);
    } else {
        avatar = sender
    }
    const embed = new Discord.RichEmbed()
        .setAuthor('Avatar')
        .setColor(0xD9A744)
        .setDescription(avatar.tag)
        .setImage(avatar.displayAvatarURL)
        .setURL(avatar.displayAvatarURL);
    message.channel.send({embed});
    console.log(`${chalk.bgBlackBright('[Avatar]')} ${sender.username}@${message.channel.name} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'avatar',
    description: 'Muestra tu avatar o el de un usuario mencionado',
    usage: 'avatar [usuario]'
};