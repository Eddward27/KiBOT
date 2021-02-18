exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    let serversArray = client.guilds.array();
    var serverNames = '';
    for (let i = 0; i < serversArray.length; i++)
        serverNames = serverNames + `\`${serversArray[i].name}\`, `;
    serverNames = serverNames.slice(0, -2);
    message.channel.send(`Nombres de servidores en los que KiBOT funciona (${serversArray.length}):\n${serverNames}`);
    console.log(chalk.bgBlackBright('[Guilds]') + ' ' + sender.username + '@' + message.channel.name + ` Cantidad Servidores: ${serversArray.length} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['servidores', 'servers', 'guilds'],
    permLevel: 4,
    category: 'admin'
};

exports.help = {
    name: 'guild',
    description: '[Owner Only] Muestra el nombre de los servidores de los que KiBOT es parte',
    usage: 'guild'
};
