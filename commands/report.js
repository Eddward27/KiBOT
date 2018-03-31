exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');
    const fs = require('fs');
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    let counter = JSON.parse(fs.readFileSync("../settings.json", "utf8"));
    if (args.length < 1){
        message.delete()
        message.reply(':robot: Necesitas enviar al menos una descripción del bug encontrado, trata de ser lo más preciso posible!');
        console.log(chalk.bgBlackBright('[Bug Report]') + ' '+ sender.username + '@' + message.channel.name + ' Guild: ' + message.guild.name + ` sin reporte [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    counter.countReport++;
    fs.writeFile("../settings.json", JSON.stringify(counter), (err) => console.error);
    const bugChannel = client.guilds.find('id', '429696032775864335').channels.find('id', '429719945253879818');
    let reporte = args.join(" ");
    const embed = new Discord.RichEmbed()
        .setAuthor("Bug Report!", "https://i.imgur.com/7Mqu5Ma.png")
        .setThumbnail(sender.avatarURL)
        .setDescription(`Bug enviado por:\nUsername: ${sender.username}\nID: ${sender.id}\n${sender.tag}\nDesde el servidor: ${message.guild.name}`)
        .addField("Reporte", reporte)
        .addField("ID de reporte", counter.countReport)
        .setTimestamp()
        .setFooter('Bug Report');
    bugChannel.send({embed});
    message.delete()
    message.channel.send(`Tu reporte fué enviado satisfactoriamente\nUsa \`${settings.prefix}support\` para conocer el servidor de soporte\nID del reporte: ${counter.countReport}`)
    console.log(chalk.bgBlackBright('[Bug Report]') + ' '+ sender.username + '@' + message.channel.name + ' Guild: ' + message.guild.name + ` Reporte enviado ID: ${counter.countReport} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bug', 'reporte'],
    permLevel: 0
};

exports.help = {
    name: 'report',
    description: 'Envía un reporte de bug hacia los cuarteles generales de KiBOT',
    usage: 'report <mensaje>'
};
