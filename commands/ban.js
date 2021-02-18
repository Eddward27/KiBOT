const {RichEmbed} = require('discord.js');
const settings = require('../settings.json');
const moment = require('moment');
const chalk = require('chalk');

exports.run = async (client, message, args, sender, perms) => {
    var user = message.mentions.members.first();
    if (message.mentions.members.size < 1) return message.reply('Debes mencionar a un usuario para banear').catch(console.error);
    if (user.id === sender.id) return message.channel.send('Ban fallido: No puedes banearte a ti mismo');
    if (user.id === client.user.id) return message.channel.send('Ban fallido: Tranquilo crack, yo no me voy asi de fácil');
    if(!user.bannable) return message.reply('No puedo banear a este usuario, puede que no tenga permisos o su rol es superior al mío');

    const adminlog = message.guild.channels.find('name', 'admin-log');
    var banNombre = user.user.tag
    const reason = args.splice(1, args.length).join(' ') || `Razón no especificada`;
    var options = {days:7, reason:reason};
    await user.ban(options).then(() => {
        console.log(chalk.bgBlackBright('[Ban]') + ' ' + sender.username + '@' + message.channel.name + ` Usuario: ${banNombre}@${message.guild.id}:${message.guild.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        message.channel.send(`Usuario ${banNombre} baneado!`);
        if(adminlog){
            const embed = new RichEmbed()
                .setColor(0x00AE86)
                .setTimestamp()
                .setDescription(`**Acción:** Ban\n**Objetivo:** ${banNombre}\n**Administrador:** ${message.author.tag}\n**Razón:** ${reason}`)
            return client.channels.get(adminlog.id).send({embed});
        }
        message.channel.send('Para un aviso más detallado por favor crea un canal llamado `admin-log`').then(msg =>
            msg.delete(2500)
        );
    }).catch(() => {
        message.channel.send('Ups, algo salió mal...\nTal vez no tengo permisos o el rol del usuario objetivo es mas alto que el mío');
        console.log(chalk.bgBlackBright('[Ban]') + ' ' + sender.username + '@' + message.channel.name + ` Error en baneo - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['banea2'],
    permLevel: 2,
    category: 'guild'
};

exports.help = {
    name: 'ban',
    description: 'Banea al usuario mencionado (Solo por usuarios con rol `Admin`)',
    usage: 'ban <usuario> [razon]'
};
