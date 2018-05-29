exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.gif.kuni, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'nsfwgif'
};

exports.help = {
    name: 'nsfwgoral',
    description: 'NSFW Gif - Oral',
    usage: 'nsfwgoral'
};