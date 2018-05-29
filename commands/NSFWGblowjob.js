exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.gif.blowjob, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwgbj'],
    permLevel: 0,
    category: 'nsfwgif'
};

exports.help = {
    name: 'nsfwgblowjob',
    description: 'NSFW Gif - Blowjob',
    usage: 'nsfwgblowjob'
};