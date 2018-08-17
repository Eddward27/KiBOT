exports.run = (client, message, args, sender, perms) => {
    const urls = require('../data/urls.json');
    var msg = message;
    require('../util/imageRequire')(urls.coffeeAPI, msg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['coffee', 'cafecito'],
  permLevel: 0,
  category: 'imagenes'
};

exports.help = {
  name: 'cafe',
  description: 'Café random auspiciado por: coffee.alexflipnote.xyz',
  usage: 'cafe'
};
