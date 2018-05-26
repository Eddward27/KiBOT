const settings = require('../settings.json');
module.exports = message => {
    let client = message.client;
    let sender = message.author;
    if (!message.content.startsWith(settings.prefix)){
        if (message.content.startsWith(`<@${client.user.id}>`)) return message.channel.send(`Recuerda que mi prefijo es: \`${settings.prefix}\`\nSi necesitas la lista de comandos, usa: \`${settings.prefix}help\``)
            return;
    }
    if(message.channel.type === 'dm'){
        message.reply('No te pesco por privado repoio!');
        return;
    }
    if (message.author.bot) return;
    let perms = client.elevation(message);

    if (perms < 4){
        if (client.talkedRecently.has(message.author.id))
            return;
        client.talkedRecently.add(message.author.id);
    }

    setTimeout(() => {
        client.talkedRecently.delete(message.author.id);
    }, 2500);

    let command = message.content.split(' ')[0].slice(settings.prefix.length).toLowerCase();
    let params = message.content.split(' ').slice(1);
    let cmd;
    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }

    if (cmd) {
        if (perms < cmd.conf.permLevel) return message.channel.send('No tienes permisos para ejecutar este comando');
        cmd.run(client, message, params, sender, perms);
    }
};
