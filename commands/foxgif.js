exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')("fox-animals", "[Zorrogif]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['zorrogif', 'foxxogof', 'firefoxgif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'foxgif',
    description: 'Gif de zorro random - Powered By GIPHY',
    usage: 'foxgif'
};
