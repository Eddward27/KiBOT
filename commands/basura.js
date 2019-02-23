exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);
    let basura = message.mentions.members.first();

    if (!basura){
        return message.channel.send('Menciona a alguien para que sepa lo basura que es...')
    }

    basura = basura.user


    var img = await weez.basura(basura.displayAvatarURL);

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
    name: 'basura',
    description: 'Menciona algún usuario para que sepa que es una basura',
    usage: 'basura <usuario>'
};
