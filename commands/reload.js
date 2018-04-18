exports.run = (client, message, args, sender, perms) => {
    message.channel.send(`Recargando comando: ${args[0]}`);
    let reload = client.reload(args[0]);
    reload.then(resolve => {
        message.channel.send(`Listo!`);
        return console.log(`[Reload] ${args[0]}`);
    }, reject => {
        message.channel.send(`Ups... Comando no encontrado`);
        return console.log(`[Reload Error] ${args[0]} NO existe`);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'reload',
    description: 'Recarga un comando [Owner Only]',
    usage: 'reload <comando>'
};
