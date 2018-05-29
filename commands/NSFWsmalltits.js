exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.img.smalltits, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwsmallboobs', 'nsfwsmallboob'],
    permLevel: 0,
    category: 'nsfw'
};

exports.help = {
    name: 'nsfwsmalltits',
    description: 'NSFW - Small Tits',
    usage: 'nsfwsmalltits'
};