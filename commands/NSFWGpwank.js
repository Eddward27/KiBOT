exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.gif.pwank, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwgmastur'],
    permLevel: 0,
    category: 'nsfwgif'
};

exports.help = {
    name: 'nsfwgpwank',
    description: 'NSFW Gif - Pwank',
    usage: 'nsfwgpwank'
};