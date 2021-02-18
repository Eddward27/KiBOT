exports.run = (client, message, args, sender, perms) => {
    const urls = require('../data/urls.json');
    var msg = message;
    require('../util/imageRequire')(urls.snakeAPI, msg);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['culebra', 'serpiente', 'snek'],
    permLevel: 0,
    category: 'imagenes'
};

exports.help = {
    name: 'snake',
    description: 'Serpiente random auspiciado por: fur.im',
    usage: 'snake'
};
