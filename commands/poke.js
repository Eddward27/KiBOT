exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/animeReact')(neko.react.poke, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toque', 'pellizco', 'pinchar'],
    permLevel: 0,
    category: 'react'
};

exports.help = {
    name: 'poke',
    description: 'Toca a alguien',
    usage: 'poke [usuario]'
};
