exports.run = async (client, message, args, sender, perms, command) => {
    var Weez = require("weez");
    const settings = require('../settings.json');
    var weez = new Weez.WeezAPI(settings.weezToken);

    let argString = args.join(" ");
    let estoes = argString.split(",");
    if (estoes.length != 2){
        return message.channel.send('Debes ingresar un texto y luego separado por una coma menciona a un usuario para usar el comando');
    }

    let mencionado = message.mentions.members.first();
    let avatar
    if (mencionado){
        avatar = mencionado.user.displayAvatarURL;
    } else {
        avatar = estoes[1]
    }

    let img = await weez.estoes(avatar, estoes[0])
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
    name: 'estoes',
    description: 'Es esto un comando?',
    usage: 'estoes <texto>, <usuario>'
};
