exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.img.avatar, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'nsfw'
};

exports.help = {
    name: 'nsfwavatar',
    description: 'NSFW - Avatar',
    usage: 'nsfwavatar'
};