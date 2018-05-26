exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    const imgs = require('../data/imgs.json');
    if (args.length < 1){
        message.delete()
        message.reply(':robot: Necesitas enviar al menos una descripción del bug encontrado, trata de ser lo más preciso posible!');
        console.log(chalk.bgBlackBright('[Bug Report]') + ' '+ sender.username + '@' + message.channel.name + ' Guild: ' + message.guild.name + ` sin reporte [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const bugChannel = client.guilds.find('id', '429696032775864335').channels.find('id', '429719945253879818');
    let reporte = args.join(" ");
    const embed = new Discord.RichEmbed()
        .setAuthor("Bug Report!", imgs.eyeBOT)
        .setThumbnail(sender.avatarURL)
        .setDescription(`Bug enviado por:\nUsername: ${sender.username}\nID: ${sender.id}\n${sender.tag}\nDesde el servidor: ${message.guild.name}`)
        .addField("Reporte", reporte)
        .addField("ID de reporte", id)
        .setTimestamp()
        .setFooter('Bug Report');
    bugChannel.send({embed});
    message.delete()
    message.channel.send(`Tu reporte fué enviado satisfactoriamente\nUsa \`${settings.prefix}support\` para conocer el servidor de soporte\nSi lo estimas conveniente, puedes mandar un correo a \`kibotdiscord@gmail.com\` con la ID del reporte adjuntando una captura de pantalla o más detalles del problema\nID del reporte: \`${id}\``)
    console.log(chalk.bgBlackBright('[Bug Report]') + ' '+ sender.username + '@' + message.channel.name + ' Guild: ' + message.guild.name + ` Reporte enviado ID: ${id} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bug', 'reporte'],
    permLevel: 0,
    category: 'general'
};

exports.help = {
    name: 'report',
    description: 'Envía un reporte de bug hacia los cuarteles generales de KiBOT',
    usage: 'report <mensaje>'
};
