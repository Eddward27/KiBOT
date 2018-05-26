exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')("dog", "[Perrogif]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['doggogif', 'inugif', 'perrogif', 'dogegif', 'puppergif', 'cachorrogif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'doggif',
    description: 'Gif de perro random - Powered By GIPHY',
    usage: 'doggif'
};
