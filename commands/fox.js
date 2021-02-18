exports.run = (client, message, args, sender, perms) => {
    const urls = require('../data/urls.json');
    var msg = message;
    require('../util/imageRequire')(urls.foxAPI, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['zorro', 'foxxo', 'firefox'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'fox',
    description: 'Zorro random auspiciado por: giraffeduck.com',
    usage: 'fox'
};
