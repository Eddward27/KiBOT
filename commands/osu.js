exports.run = (client, message, args, sender, perms, command) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    if (args.length < 1) {
        return message.channel.send(`Debes especificar al menos un nombre de usuario para buscar\nUsa \`${settings.prefix}help\` para más información`)
    }
    message.channel.startTyping()
    var request = require('request');
    let type = args[0];
    type = type.toLowerCase();
    let modo;
    let modoURL;
    switch (type) {
        case 'osu':
            type = 0;
            args.shift();
            modo = 'osu!'
            modoURL = 'osu'
            break;
        case 'taiko':
            type = 1;
            args.shift();
            modo = 'osu!taiko'
            modoURL = 'taiko'
            break;
        case 'ctb':
            type = 2;
            args.shift();
            modo = 'osu!catch'
            modoURL = 'fruits'
            break;
        case 'mania':
            type = 3;
            args.shift();
            modo = 'osu!mania'
            modoURL = 'mania'
            break;
        default:
            type = 0;
            modo = 'osu!'
            modoURL = 'osu'
            break;

    }
    let user = args.join(" ");
    let apiURL = `https://osu.ppy.sh/api/get_user?k=${settings.osu}&m=${type}&u=${user}`
    request(apiURL, function (error, response, body) {
        if(error){
            console.log(`${chalk.bgMagenta('[Osu]')} from: ${sender.username}@${message.channel.name} - ERROR: ${error}`)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            if (bodyJSON.length === 0) {
                return message.channel.send('Usuario no encontrado :c');
            }
            var acc = parseFloat(bodyJSON[0].accuracy)
            acc = acc.toFixed(2);
            const embed = new Discord.RichEmbed()
                .setTitle(`${bodyJSON[0].username} - ${modo}`)
                .setURL(`https://osu.ppy.sh/users/${bodyJSON[0].user_id}/${modoURL}`)
                .setTimestamp()
                .setColor(0xFF66AA)
                .setThumbnail(`https://a.ppy.sh/${bodyJSON[0].user_id}`)
                .addField('Username', bodyJSON[0].username, true)
                .addField('ID', bodyJSON[0].user_id, true)
                .addField('Nivel', Math.trunc(bodyJSON[0].level), true)
                .addField('País', bodyJSON[0].country, true)
                .addField('Rango PP', `#${bodyJSON[0].pp_rank}`, true)
                .addField('Rango PP país', `#${bodyJSON[0].pp_country_rank}`, true)
                .addField('Puntuación rankeada', bodyJSON[0].ranked_score, true)
                .addField('Puntuación Total', bodyJSON[0].total_score, true)
                .addField('Precisión', `${acc}%`, true)
                .addField('Conteo de jugadas', bodyJSON[0].playcount, true)
                .addField('PP', Math.trunc(bodyJSON[0].pp_raw), true)
                .addField('Número de eventos', bodyJSON[0].events.length, true)
                .addField('SS+ - SS - S+ - S - A', `${bodyJSON[0].count_rank_ssh} - ${bodyJSON[0].count_rank_ss} - ${bodyJSON[0].count_rank_sh} - ${bodyJSON[0].count_rank_s} - ${bodyJSON[0].count_rank_a}`)
                .setFooter(`${modo}`, 'https://s.ppy.sh/favicon.ico');
            message.channel.send({embed});
            console.log(`${chalk.bgMagenta('[Osu]')} ${sender.username}@${message.channel.name} - ID User: ${bodyJSON[0].user_id} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
            message.channel.stopTyping(true)
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'osu',
    description: 'Obtiene información de un perfil de osu!, por defecto se busca en modo de juego \'osu\'\nTipos: \'osu\' \'taiko\' \'ctb\' \'mania\'',
    usage: 'osu [tipo] <nombre de usuario>'
};
