exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')("snake-animals", "[Snakegif]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['culebragif', 'serpientegif', 'snekgif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'snakegif',
    description: 'Gif de serpiente random - Powered By GIPHY',
    usage: 'snakegif'
};
