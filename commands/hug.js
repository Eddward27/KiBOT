exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.hug, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['abrazo'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'hug',
    description: 'Abraza a alguien',
    usage: 'hug [usuario]'
};
