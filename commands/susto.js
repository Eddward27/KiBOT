exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);
    let scary = message.mentions.members.first();

    if (!scary){
        return message.channel.send('Menciona a alguien para que sepa lo aterrador que es...')
    }

    scary = scary.user
    var img = await weez.susto(scary.displayAvatarURL);

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
    name: 'susto',
    description: 'Menciona algún usuario para asustar a la niña',
    usage: 'susto <usuario>'
};
