exports.run = (client, message, args, sender, perms, command) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    var request = require('request');
    if (args.length < 1) {
        return message.channel.send(`Debes especificar un término para buscar\nUsa \`${settings.prefix}help urban\` para más información`)
    }
    var api = `http://api.urbandictionary.com/v0/define?term=${args.join(" ")}`
    request(api, function (error, response, body) {
        if(error){
            console.log(`${chalk.bgMagenta('[Urban]')} from: ${sender.username}@${message.channel.name} - ERROR: ${error}`)
        }
        if(response.statusCode === 200){
        let bodyJSON = JSON.parse(body);
            if (bodyJSON.result_type === "no_results") {
                return message.channel.send('No se encontró una definición con ese término...')
            }
            var respuesta = bodyJSON.list[0]
            const embed = new Discord.RichEmbed()
                .setURL(respuesta.permalink)
                .setTitle('Urban Dictionary')
                .addField('Término', respuesta.word, true)
                .addField('Definición', respuesta.definition, true)
                .addField('Ejemplo', respuesta.example)
                .setColor(settings.color)
                .addField('Votos', `:thumbsup: ${respuesta.thumbs_up} - :thumbsdown: ${respuesta.thumbs_down}`, true)
                .addField('ID', respuesta.defid, true)
                .setFooter(`Powered by urbandictionary.com - Definido por: ${respuesta.author}`);
            message.channel.send({embed});
            console.log(`${chalk.bgMagenta('[Urban]')} ${sender.username}@${message.channel.name} - Termino: ${respuesta.word} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['urbandictionary'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'urban',
    description: 'Busca un término en urbandictionary.com',
    usage: 'urban <término>'
};
