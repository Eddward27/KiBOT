exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    if (args.length < 1){
        console.log(chalk.bgBlackBright('[Set]') + ' ' + sender.username + '@' + message.channel.name + ` Sin actividad - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return message.channel.send("Que tengo que hacer?");
    }
    let activity = args.join(" ");
    message.channel.send(`Actividad seteada a: ${activity}`);
    client.user.setActivity(activity);
    console.log(chalk.bgBlackBright('[Set]') + ' ' + sender.username + '@' + message.channel.name + ` Actividad: ${activity} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'set',
    description: '[Owner Only] Setea la actividad de KiBOT a cualquiera especificada',
    usage: 'set <actividad>'
};
