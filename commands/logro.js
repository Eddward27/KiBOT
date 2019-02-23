exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);

    if (args.length < 1){
        return message.channel.send('Especifíca un logro para desbloquear...')
    }

    var logro = args.join(" ");
    var img = await weez.logro(logro);

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
    name: 'logro',
    description: 'Desbloquea un logro!',
    usage: 'logro <logro>'
};
