exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.gif.hentai, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'nsfwgif'
};

exports.help = {
    name: 'nsfwghentai',
    description: 'NSFW Gif - Hentai',
    usage: 'nsfwghentai'
};