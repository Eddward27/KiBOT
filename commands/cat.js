exports.run = (client, message, args, sender, perms) => {
    const urls = require('../data/urls.json');
    var msg = message;
    require('../util/imageRequire')(urls.catAPI, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['catto', 'gato', 'gatito', 'kitten', 'kitty', 'cuchito'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'cat',
    description: 'Gato random auspiciado por: random.cat',
    usage: 'cat'
};
