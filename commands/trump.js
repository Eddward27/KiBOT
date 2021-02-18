exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);

    if (args.length < 1){
        return message.channel.send('Especifíca una ley para aprobar...')
    }

    var ley = args.join(" ");
    var img = await weez.trump(ley);

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
    name: 'trump',
    description: 'Haz que Trump apruebe una ley',
    usage: 'trump <ley>'
};
