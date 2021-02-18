exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    if (args.length < 1)
        return require('../util/giphy')('', "[Gif Req.]", msg);
    let texto = args.join(" ");
    require('../util/giphy')(texto, "[Gif Req.]", msg);
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
