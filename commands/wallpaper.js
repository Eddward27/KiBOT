exports.run = async (client, message, args, sender, perms) => {
    const neko = require('../data/neko.json');
    var msg = message;
    require('../util/anime')(neko.anime.wallpaper, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'anime'
};

exports.help = {
    name: 'wallpaper',
    description: 'Wallpaper anime random',
    usage: 'wallpaper'
};
