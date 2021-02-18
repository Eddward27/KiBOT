const settings = require('../settings.json');

exports.run = (client, message, args, sender, perms) => {
    message.channel.send(settings.support);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['soporte'],
    permLevel: 0,
    category: 'general'
};

exports.help = {
    name: 'support',
    description: 'Obten un link para entrar al servidor de KiBOT Support',
    usage: 'support'
};
