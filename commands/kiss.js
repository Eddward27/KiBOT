exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.kiss, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['beso'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'kiss',
    description: 'Besa a alguien',
    usage: 'kiss [usuario]'
};
