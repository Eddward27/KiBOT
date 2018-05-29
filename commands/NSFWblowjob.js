exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.img.blowjob, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwbj'],
    permLevel: 0,
    category: 'nsfw'
};

exports.help = {
    name: 'nsfwblowjob',
    description: 'NSFW - Blowjob',
    usage: 'nsfwblowjob'
};