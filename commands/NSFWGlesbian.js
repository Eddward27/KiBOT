exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.gif.lesbian, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'nsfwgif'
};

exports.help = {
    name: 'nsfwglesbian',
    description: 'NSFW Gif - Lesbian',
    usage: 'nsfwglesbian'
};