exports.run = async (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const Discord = require('discord.js');
    var server = message.guild;

    let roles = server.roles.array();
    var colorDisc = { base10: 0, heigth: 0 };
    var region = { nombre: '', emoji: ''};
    var rolesLista = '';
    var verificationLvl = '';
    var members = server.members.array();
    var bots = 0;
    var channels = server.channels.array()
    var text = 0;
    var voice = 0;

    for(var i=0; i < roles.length; i++){
        if (colorDisc.heigth < roles[i].position && roles[i].color != 0) {
            colorDisc.base10 = roles[i].color;
            colorDisc.heigth = roles[i].position;
        }
    }

    for(i=0; i < roles.length; i++){
        if (roles[i].calculatedPosition != 0) {
            if (!roles[i].managed)
                rolesLista = rolesLista + roles[i].name + ', '
        }
    }
    rolesLista = rolesLista.slice(0, -2);
    if (!rolesLista)
        rolesLista = 'No hay roles creados'

    switch (server.region) {
        case "brazil":
            region.nombre = 'Brazil'
            region.emoji = ':flag_br:'
            break;
        case 'eu-central':
            region.nombre = 'Europa Central'
            region.emoji = ':flag_eu:'
            break;
        case 'hongkong':
            region.nombre = 'Hong Kong'
            region.emoji = ':flag_hk:'
            break;
        case 'japan':
            region.nombre = 'Japón'
            region.emoji = ':flag_jp:'
            break;
        case 'russia':
            region.nombre = 'Rusia'
            region.emoji = ':flag_ru:'
            break;
        case 'singapore':
            region.nombre = 'Singapur'
            region.emoji = ':flag_sg:'
            break;
        case 'sydney':
            region.nombre = 'Sídney'
            region.emoji = ':flag_au:'
            break;
        case 'us-central':
            region.nombre = 'US Central'
            region.emoji = ':flag_us:'
            break;
        case 'us-east':
            region.nombre = 'US Este'
            region.emoji = ':flag_us:'
            break;
        case 'us-south':
            region.nombre = 'US Sur'
            region.emoji = ':flag_us:'
            break;
        case 'us-west':
            region.nombre = 'US Oeste'
            region.emoji = ':flag_us:'
            break;
        case 'eu-west':
            region.nombre = 'Europa Occidental'
            region.emoji = ':flag_eu:'
            break;
        default:
            region.nombre = 'Valor no definido'
            region.emoji = ':thermometer_face:'
            break;
    }

    switch (server.verificationLevel) {
        case 0:
            verificationLvl = '(0) Sin restricciones'
            break;
        case 1:
            verificationLvl = '(1) Es necesario un email verificado en tu cuenta de Discord'
            break;
        case 2:
            verificationLvl = '(2) Es necesario un email verificado y estar registrado mas de 5 minutos'
            break;
        case 3:
            verificationLvl = '(3) Es necesario ser miembro de este servidor por más de 10 minutos'
            break;
        case 4:
            verificationLvl = '(4) Es necesario tener un número de teléfono verificado en tu cuenta de Discord'
            break;
        default:
            verificationLvl = 'No se logró obtener el nivel de verificación del servidor'
            break;
    }

    for (i = 0; i < members.length; i++) {
        if (members[i].user.bot)
            bots++;
    }

    for (i = 0; i < channels.length; i++) {
        if (channels[i].type === 'text')
            text++;
        if (channels[i].type === 'voice')
            voice++;
    }

    const embed = new Discord.RichEmbed();
    embed.setThumbnail(server.iconURL);
    embed.setTitle('Información del servidor');
    embed.setColor(colorDisc.base10.toString(16));
    embed.addField(`Nombre:`, server.name, true);
    embed.addField(`ID:`, server.id, true);
    embed.addField(`Región:`, `${region.nombre} ${region.emoji}`, true);
    embed.addField(`Dueño:`, server.owner.user.tag, true);
    embed.addField(`Nivel de verificación:`, verificationLvl, true);
    embed.addField(`Fecha de creación:`, server.createdAt, false);
    embed.addField(`Roles:`, rolesLista, false);
    embed.addField(`Canales de texto:`, text, true);
    embed.addField(`Canales de voz:`, voice, true);
    embed.addField(`Total de miembros:`, server.memberCount, false);
    embed.addField(`Humanos: `, server.memberCount - bots, true);
    embed.addField(`Bots: `, bots, true);

    message.channel.send(embed);
    console.log(chalk.bgBlackBright('[Serverinfo]') + ' ' + sender.username + '@' + message.channel.name + ' Servidor: ' + server.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'serverinfo',
    description: 'Muestra información del servidor actual',
    usage: 'serverinfo'
};
