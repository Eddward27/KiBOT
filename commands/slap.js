exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.slap, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['cachetada', 'charchazo', 'bofetada', 'abofetear'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'slap',
    description: 'Abofetea a alguien',
    usage: 'slap [usuario]'
};
