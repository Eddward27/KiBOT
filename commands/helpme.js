const settings = require('../settings.json');
const moment = require('moment');
const chalk = require('chalk');
exports.run = (client, message, params, sender) => {
    const commandNames = Array.from(client.commands.keys());
    message.author.send(`= Lista de comandos =\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}`).join('\n')}`, {code:'asciidoc'});
    message.channel.send(`Lista de comandos enviada!!`);
    console.log(chalk.bgBlackBright('[Helpme]') + ' ' + sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hme', 'aiurame', 'halpme'],
    permLevel: 4,
    category: 'general'
};

exports.help = {
    name: 'helpme',
    description: 'Muestra la lista de ayuda por DM',
    usage: 'helpme'
};
