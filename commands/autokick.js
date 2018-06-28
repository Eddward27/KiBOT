const moment = require('moment');
const chalk = require('chalk');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports.run = async (client, message, args, sender, perms) => {
    var user = message.member
    if(!user.kickable) return message.reply('Parece que no tengo permisos para kickearte, te salvaste...');

    var kickNombre = user.user.tag
    const reason = `Autokick ¯\\_(ツ)_/¯`;
    await user.kick(reason).then(() => {
        console.log(chalk.bgBlackBright('[AutoKick]') + ' ' + sender.username + '@' + message.channel.name + ` Usuario: ${kickNombre}@${message.guild.id}:${message.guild.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        message.channel.send('See You Space Cowboy...').then(async msg => {
            await sleep(3000)
            msg.edit(`See You Space Cowboy... ${kickNombre} fué auto-kickeado`)
        });
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'guild'
};

exports.help = {
    name: 'autokick',
    description: 'Te mando a la berga',
    usage: 'autokick',
};
