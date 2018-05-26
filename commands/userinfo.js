exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    let usuario;
    let status;
    let color;
    let game;
    let url;

    if (!message.mentions.members.first()) {
        message.channel.send('Menciona a alguien para mostrar su información!')
        console.log(chalk.bgBlackBright('[User Info]') + ' ' + sender.username + '@' + message.channel.name + `SIN MENCION!!! [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    } else {
        usuario = message.mentions.members.first();
        console.log(chalk.bgBlackBright('[User Info]') + ' ' + sender.username + '@' + message.channel.name + ' User: ' + usuario.displayName + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }
    if(usuario.presence.game){
        if (usuario.presence.game.type === 1) {
            status = 'En Stream: ' + usuario.presence.game.name
            color = '0x6441A4'
            url = usuario.presence.game.url

            const embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle('Informacion de Usuario')
                .addField('Nombre', usuario.displayName, true)
                .addField('Estado', status, true)
                .addField('Stream', url, true)
                .addField('Rol más alto', usuario.highestRole.name, true)
                .addField('Nombre de Usuario', usuario.user.tag, true)
                .addField('ID', usuario.id, true)
                .addField('Miembro del servidor desde', usuario.joinedAt)
                .addField('En Discord desde', usuario.user.createdAt)
                .setImage(usuario.user.displayAvatarURL)
                .setURL(url)
                .setFooter(url);
            message.channel.send({embed});
            return;
        }
    }
    switch(usuario.presence.status){
        case 'offline':
            status = 'Desconectado'
            color = '0x747F8D'
                break;
        case 'idle':
            status = 'Ausente'
            color = '0xFAA61A'
            break;
        case 'dnd':
            status = 'No Molestar'
            color = '0xF04747'
            break;
        default:
            status = 'En Línea'
            color = '0x43B581'
            break;
    }
    if(usuario.presence.game){
        game = usuario.presence.game;
        switch(game.type){
            case 0:
                status = 'Jugando: ' + game.name
                color = '0xFFD530'
                break;
            case 1:
                status = 'En Stream'
                color = '0x6441A4'
                url = game.url
                break;
            case 2:
                status = 'Escuchando: ' + game.name
                color = '0x1ED760'
                break;
            case 3:
                status = 'Viendo: ' + game.name
                color = '0xFF0000'
                break;
        }
    }

    const embed = new Discord.RichEmbed()
        .setColor(color)
        .setTitle('Informacion de Usuario')
        .addField('Nombre', usuario.displayName, true)
        .addField('Estado', status, true)
        .addField('Rol más alto', usuario.highestRole.name, true)
        .addField('Nombre de Usuario', usuario.user.tag, true)
        .addField('ID', usuario.id, true)
        .addField('Miembro del servidor desde', usuario.joinedAt)
        .addField('En Discord desde', usuario.user.createdAt)
        .setImage(usuario.user.displayAvatarURL);
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['infouser', 'infousuario'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'userinfo',
    description: 'Muestra la informacion de un usuario',
    usage: 'userinfo [usuario]'
};
