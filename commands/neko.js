exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/anime')(neko.anime.neko, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'anime'
};

exports.help = {
    name: 'neko',
    description: 'Imagen Neko random',
    usage: 'neko'
};
