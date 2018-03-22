const settings = require('../settings.json');
module.exports = message => {
    let client = message.client;
    let sender = message.author;
    if (!message.content.startsWith(settings.prefix)) return;
    if(message.channel.type === 'dm'){
        message.reply("No te pesco por privado repoio!");
        return;
    }
    if (message.author.bot) return;
    let command = message.content.split(' ')[0].slice(settings.prefix.length).toLowerCase();
    let params = message.content.split(' ').slice(1);
    let perms = client.elevation(message);
    let cmd;
    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }

    if (message.client.id === settings.idSpam)
        settings.countSpam++;
    else {
        settings.idSpam = message.client.id;
        settings.countSpam = 0;
    }
    if(settings.countSpam > 3 && message.channel.id !== '305843252769193986'){
        message.channel.send(sender + ' Por favor deja mi spam en ' + client.channels.get("305843252769193986"));
        settings.countSpam = 0;
    }

    if (cmd) {
        if (perms < cmd.conf.permLevel) return;
        cmd.run(client, message, params, sender, perms);
    }
};
