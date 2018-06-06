exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.img.tits, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwhboobs', 'nsfwhboob'],
    permLevel: 0,
    category: 'nsfw'
};

exports.help = {
    name: 'nsfwhtits',
    description: 'NSFW - H Tits',
    usage: 'nsfwhtits'
};
