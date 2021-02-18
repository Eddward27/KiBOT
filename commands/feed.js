exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.feed, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['comida', 'alimentar'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'feed',
    description: 'Da de comer a alguien',
    usage: 'feed [usuario]'
};
