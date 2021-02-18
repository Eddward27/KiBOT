exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var usuario;
    var status;
    var color;
    var game;
    var url;

    if (!message.mentions.members.first()) {
        message.channel.send('Menciona a alguien para mostrar su información!');
        console.log(`${chalk.bgBlackBright('[User Info]')} ${sender.username}@${message.channel.name} Sin Mención! [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    usuario = message.mentions.members.first();

    const embed = new Discord.RichEmbed();
    embed.setTitle('Informacion de Usuario');
    embed.addField('Nombre', usuario.displayName, true);
    embed.setImage(usuario.user.displayAvatarURL);

    switch(usuario.presence.status){
        case 'offline':
            status = 'Desconectado';
            color = '0x747F8D';
            break;
        case 'idle':
            status = 'Ausente';
            color = '0xFAA61A';
            break;
        case 'dnd':
            status = 'No Molestar';
            color = '0xF04747';
            break;
        default:
            status = 'En Línea';
            color = '0x43B581';
            break;
    }
    if(usuario.presence.game){
        game = usuario.presence.game;
        switch(game.type){
            case 0:
                status = 'Jugando: ' + game.name;
                color = '0xFFD530';
                break;
            case 1:
                status = 'En Stream';
                color = '0x6441A4';
                url = game.url;
                break;
            case 2:
                status = 'Escuchando: ' + game.name;
                color = '0x1ED760';
                break;
            case 3:
                status = 'Viendo: ' + game.name;
                color = '0xFF0000';
                break;
        }
    }
    embed.setColor(color);
    embed.addField('Estado', status, true);
    if (url){
        embed.addField('Stream', url, true);
        embed.setURL(url);
        embed.setFooter(url);
    }
    if (usuario.highestRole.calculatedPosition === 0){
        embed.addField('Rol más alto', 'Sin rol asignado', true);
    } else {
        embed.addField('Rol más alto', usuario.highestRole.name, true);
    }
    embed.addField('Nombre de Usuario', usuario.user.tag, true);
    embed.addField('ID', usuario.id, true);
    embed.addField('Miembro del servidor desde', usuario.joinedAt);
    embed.addField('En Discord desde', usuario.user.createdAt);
    message.channel.send({embed});
    console.log(`${chalk.bgBlackBright('[User Info]')} ${sender.username}@${message.channel.name} User: ${usuario.displayName} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
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
