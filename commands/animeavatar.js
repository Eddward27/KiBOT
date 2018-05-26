exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/anime')(neko.anime.avatar, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['avataranime'],
    permLevel: 0,
    category: 'anime'
};

exports.help = {
    name: 'animeavatar',
    description: 'Imagen random de perfil anime',
    usage: 'animeavatar'
};
