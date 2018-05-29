exports.run = async (client, message, args, sender, perms) => {
    const nekoNSFW = require('../data/nekoNSFW.json');
    var msg = message;
    require('../util/nekoNSFW')(nekoNSFW.ero.kitsune, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'ero'
};

exports.help = {
    name: 'erokitsune',
    description: 'ERO - Kitsune',
    usage: 'erokitsune'
};