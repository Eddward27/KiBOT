exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/anime')(neko.anime.nekoGif, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gifneko'],
    permLevel: 0,
    category: 'anime'
};

exports.help = {
    name: 'nekogif',
    description: 'Gif Neko random',
    usage: 'nekogif'
};