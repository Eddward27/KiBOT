exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    var tag = ['kitten', 'cat'];
    var chosen = Math.floor(Math.random() * tag.length);
    require('../util/giphy')(tag[chosen], "[Gatogif]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['cattogif', 'gatogif', 'gatitogif', 'kittengif', 'kittygif', 'cuchitogif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'catgif',
    description: 'Gif de gato random - Powered By GIPHY',
    usage: 'catgif'
};
