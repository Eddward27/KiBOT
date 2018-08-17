exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    if (args.length < 1){
        console.log(chalk.bgBlackBright('[V]') + ' ' + sender.username + '@' + message.channel.name + ` Sin mensaje - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return message.channel.send('No especificaste un ID');
    }
    let msgID = args[0];
    var emojis = client.guilds.find('id', '429696032775864335').emojis
    const yes = emojis.find('name', 'si');
    const no = emojis.find('name', 'no');
    message.channel.fetchMessage(msgID)
        .then(async function (msg){
            await msg.react(yes);
            await msg.react(no);
        })
        .catch(console.error);
    message.delete()
    console.log(`${chalk.bgRed('[V]')} ${sender.username}@${message.channel.name} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['vpoll'],
    permLevel: 4,
    category: 'admin'
};

exports.help = {
    name: 'v',
    description: '[ADMIN] Para generar una votacion a un mensaje cualquiera por ID',
    usage: 'v <id mensaje>'
};
