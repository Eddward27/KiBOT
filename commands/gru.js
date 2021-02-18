exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);

    let argString = args.join(" ");
    let plan = argString.split(",");

    if (plan.length < 2)
        return message.channel.send(`Por favor ingresa al menos 3 parámetros para usar el comando`)

    let img = await weez.gru(plan[0], plan[1], plan[2]);

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
    name: 'gru',
    description: 'Haz que Gru muestre su plan',
    usage: 'gru <linea 1>, <linea 2>, <linea 3>'
};
