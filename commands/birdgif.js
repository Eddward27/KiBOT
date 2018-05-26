exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')("bird-animals", "Pájarogif]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['torigif', 'pajarogif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'birdgif',
    description: 'Gif de pájaro random - Powered By GIPHY',
    usage: 'birdgif'
};
