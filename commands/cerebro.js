exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);

    let argString = args.join(" ");
    let idea = argString.split(",");

    if (idea.length < 2)
        return message.channel.send(`Por favor ingresa al menos 4 parámetros para usar el comando`)

    let img = await weez.cerebro(idea[0], idea[1], idea[2], idea[3]);

    message.channel.send({files: [img]})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
    category: 'fun'
};

exports.help = {
    name: 'cerebro',
    description: 'Meme cerebro',
    usage: 'cerebro <linea 1>, <linea 2>, <linea 3>, <linea 4>'
};
