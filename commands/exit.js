exports.run = async (client, message, args, sender, perms) => {
    message.channel.send('Me mori :skull_crossbones:').then(invite => process.exit() );
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
    category: 'admin'
};

exports.help = {
    name: 'exit',
    description: 'Ejecuta process.exit()',
    usage: 'exit'
};
