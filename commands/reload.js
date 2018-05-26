exports.run = (client, message, args, sender, perms) => {
    if(args.length !== 1)
        return message.channel.send(`Por favor especifíca un comando a recargar`);
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
    aliases: ['refresh'],
    permLevel: 4,
    category: 'admin'
};

exports.help = {
    name: 'reload',
    description: '[Owner Only] Recarga un comando',
    usage: 'reload <comando>'
};
