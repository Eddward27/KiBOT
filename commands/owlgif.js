exports.run = (client, message, args, sender, perms) => {
    var msg = message;
    require('../util/giphy')("owl-animals", "[Búho]", msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['chunchogif', 'buhogif', 'fukurogif', 'owlsgif', 'chunchosgif', 'buhosgif'],
    permLevel: 0,
    category: 'gifs'
};

exports.help = {
    name: 'owlgif',
    description: 'Gif de búho random - Powered By GIPHY',
    usage: 'owlgif'
};
