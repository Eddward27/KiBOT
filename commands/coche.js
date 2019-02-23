exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);
    if(message.mentions.members.array().length != 2)
        return message.channel.send('Debes mencionar a 2 usuarios para usar este comando...')

    let img = await weez.coche(message.mentions.members.last().user.displayAvatarURL, message.mentions.members.first().user.displayAvatarURL);
    message.channel.send({files: [img]})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'fun'
};

exports.help = {
    name: 'coche',
    description: 'Meme de coche, se explica por sí mismo',
    usage: 'coche <usuario no>, <usuario si>'
};
