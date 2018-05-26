exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')("raccoon-animals", "[Mapachegif]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mapachegif', 'mapochogif', 'raccgif', 'trashpandagif', 'ladrongif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'raccoongif',
    description: 'Gif de mapache random - Powered By GIPHY',
    usage: 'raccoongif'
};
