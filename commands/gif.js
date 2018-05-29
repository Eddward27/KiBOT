exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')(args[0], "[Gif Req.]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gifs'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'gif',
    description: 'Busca un GIF random! - Powered By GIPHY',
    usage: 'gif [búsqueda]'
};
