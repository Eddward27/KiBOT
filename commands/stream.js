exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    let comma = args.join(" ").split(",");
    if (comma.length !== 2){
        console.log(chalk.bgBlackBright('[Stream]') + ' ' + sender.username + '@' + message.channel.name + ` Sin actividad - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return message.channel.send(`Para esto necesito solamente dos argumentos separados por coma \`,\`\nVer \`${settings.prefix}help\` stream para información de uso`);
    }
    comma[0] = comma[0].trim();
    comma[1] = comma[1].trim();
    let options = {
        url: comma[1],
        type: 'STREAMING'
    }
    message.delete();
    client.user.setActivity(comma[0], options);
    message.channel.send(`Stream listo!\nNombre: ${comma[0]}\nURL: ${options.url}`);
    console.log(chalk.bgBlackBright('[Stream]') + ' ' + sender.username + '@' + message.channel.name + ` Nombre: ${comma[0]} URL: ${options.url} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
    category: 'admin'
};

exports.help = {
    name: 'stream',
    description: '[Owner Only] Setea la actividad de KiBOT a stream especificado',
    usage: 'stream <nombre>, <url http://...>'
};
