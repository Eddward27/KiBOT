exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.tickle, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['cosquillas'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'tickle',
    description: 'Cosquillas a alguien',
    usage: 'tickle [usuario]'
};