exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.gif.classic, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwgsex'],
    permLevel: 0,
    category: 'nsfwgif'
};

exports.help = {
    name: 'nsfwgclassic',
    description: 'NSFW Gif - Clásico',
    usage: 'nsfwgclassic'
};