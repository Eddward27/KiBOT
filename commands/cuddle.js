exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.cuddle, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['acurrucarse'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'cuddle',
    description: 'Acurrucate con alguien',
    usage: 'cuddle [usuario]'
};
