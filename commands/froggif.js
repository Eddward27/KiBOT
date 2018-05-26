exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')("frog-animals", "[Ranagif]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ribbitgif', 'ranagif', 'sapogif', 'sapitogif', 'sapoliogif', 'froggogif', 'froppygif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'froggif',
    description: 'Gif de rana random - Powered By GIPHY',
    usage: 'froggif'
};
