exports.run = (client, message, args, sender, perms) => {
    const urls = require('../data/urls.json');
    var msg = message;
    require('../util/imageRequire')(urls.dogAPI, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['doggo', 'inu', 'perro', 'doge', 'pupper', 'cachorro'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'dog',
    description: 'Perrito random auspiciado por: dog.ceo',
    usage: 'dog'
};
