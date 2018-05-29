exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.img.tits, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwboobs', 'nsfwboob'],
    permLevel: 0,
    category: 'nsfw'
};

exports.help = {
    name: 'nsfwtits',
    description: 'NSFW - Tits',
    usage: 'nsfwtits'
};