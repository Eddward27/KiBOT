const {RichEmbed} = require('discord.js');
const settings = require('../settings.json');
const moment = require('moment');
const chalk = require('chalk');

exports.run = async (client, message, args, sender, perms) => {
    var user = message.mentions.members.first();
    if (message.mentions.members.size < 1) return message.reply('Debes mencionar a un usuario para kickear').catch(console.error);
    if (user.id === sender.id) return message.channel.send('Kick fallido: No puedes kickearte a ti mismo');
    if (user.id === client.user.id) return message.channel.send('Kick fallido: Tranquilo crack, yo no me voy asi de fácil');
    if(!user.kickable) return message.reply('No puedo kickear a este usuario, puede que no tenga permisos o su rol es superior al mío');

    const modlog = message.guild.channels.find('name', 'mod-log');
    var kickNombre = user.user.tag
    const reason = args.splice(1, args.length).join(' ') || `Razón no especificada`;
    await user.kick(reason).then(() => {
        console.log(chalk.bgBlackBright('[Kick]') + ' ' + sender.username + '@' + message.channel.name + ` Usuario: ${kickNombre}@${message.guild.id}:${message.guild.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        message.channel.send(`Usuario ${kickNombre} kickeado!`);
        if(modlog){
            const embed = new RichEmbed()
                .setColor(0x00AE86)
                .setTimestamp()
                .setDescription(`**Acción:** Kick\n**Objetivo:** ${kickNombre}\n**Moderador:** ${message.author.tag}\n**Razón:** ${reason}`)
            return client.channels.get(modlog.id).send({embed});
        }
        message.channel.send('Para un aviso más detallado por favor crea un canal llamado `mod-log`').then(msg =>
            msg.delete(2500)
        );
    }).catch(() => {
        message.channel.send('Ups, algo salió mal...\nTal vez no tengo permisos o el rol del usuario objetivo es mas alto que el mío');
        console.log(chalk.bgBlackBright('[Kick]') + ' ' + sender.username + '@' + message.channel.name + ` Error en kickear - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kickea2'],
    permLevel: 1,
    category: 'guild'
};

exports.help = {
    name: 'kick',
    description: 'Kickea al usuario especificado (Solo por usuarios con rol `Mod` o `Admin`)',
    usage: 'kick <usuario> [razon]',
};
