exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.pat, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['acaricia', 'palmada'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'pat',
    description: 'Da palmadas a alguien',
    usage: 'pat [usuario]'
};
