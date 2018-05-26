exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/anime')(neko.anime.kitsune, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'anime'
};

exports.help = {
    name: 'kitsune',
    description: 'Imagen Kitsune random',
    usage: 'kitsune'
};