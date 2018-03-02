exports.run = (client, message, args, sender, perms) => {
    const main = require('../kibot.js');
    const settings = require('../settings.json');
    let kickea2 = message.mentions.members.first();
    if(!kickea2){
        main.hook.call(message.channel,'Uso de Kick', settings.prefix+'kick <usuario>','EEFF44','https://i.imgur.com/WRlQqKl.png');
        return;
    }
    let razon = args.slice(1).join(" ");
    message.channel.send(kickea2+' KICKEA2!!!');
    kickea2.kick(razon);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'name',
description: 'desc',
usage: 'uso'
};
