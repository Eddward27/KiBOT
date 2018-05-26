const {RichEmbed} = require('discord.js');
const settings = require('../settings.json');
const moment = require('moment');
const chalk = require('chalk');

exports.run = (client, message, args, sender, perms) => {
    var user = message.mentions.members.first();
    if (message.mentions.members.size < 1) return message.reply('Debes mencionar a un usuario para kickear').catch(console.error);
    if (user === sender) return message.channel.send('Kick fallido: No puedes kickearte a ti mismo');
    if (user.id === client.user.id) return message.channel.send('Kick fallido: Tranquilo crack, yo no me voy asi de fácil');
    const modlog = message.guild.channels.find('name', 'mod-log');
    user.kick().then((user) => {
        console.log(chalk.bgBlackBright('[Kick]') + ' ' + sender.username + '@' + message.channel.name + ` Usuario: ${user.tag}@${message.guild.id}:${message.guild.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        if(modlog){
            const reason = args.splice(1, args.length).join(' ') || `Razón no especificada`;
            message.channel.send(`Usuario ${user.tag} kickeado!`);
            const embed = new RichEmbed()
                .setColor(0x00AE86)
                .setTimestamp()
                .setDescription(`**Acción:** Kick\n**Objetivo:** ${user.tag}\n**Moderador:** ${message.author.tag}\n**Razón:** ${reason}`)
            return client.channels.get(modlog.id).send({embed});
        }
        message.channel.send(`Usuario ${user.tag} kickeado!`);
        message.channel.send('Para un aviso más detallado por favor crea un canal llamado `mod-log`');
    }).catch(() => {
        message.channel.send('Ups, algo salió mal...\nTal vez no tengo permisos, `' + settings.prefix + 'support` para el servidor de ayuda :thermometer_face:');
        console.log(chalk.bgBlackBright('[Kick]') + ' ' + sender.username + '@' + message.channel.name + ` Error en kickear - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kickea2'],
    permLevel: 2,
    category: 'guild'
};

exports.help = {
    name: 'kick',
    description: 'Kickea al usuario especificado (Solo por usuarios con rol `Mod` o `Admin`)',
    usage: 'kick <usuario> [razon]',
};
