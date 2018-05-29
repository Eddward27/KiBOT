exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.gif.tits, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwgboobs', 'nsfwgboob'],
    permLevel: 0,
    category: 'nsfwgif'
};

exports.help = {
    name: 'nsfwgtits',
    description: 'NSFW Gif - Tits',
    usage: 'nsfwgtits'
};