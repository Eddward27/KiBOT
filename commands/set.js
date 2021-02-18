exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    if (args.length < 1){
        console.log(chalk.bgBlackBright('[Set]') + ' ' + sender.username + '@' + message.channel.name + ` Sin actividad - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        client.user.setActivity();
        return message.channel.send(`Actividad Borrada`);
    }
    let activity = args.join(" ");
    client.user.setActivity(activity);
    message.channel.send(`Actividad seteada a: ${activity}`);
    console.log(chalk.bgBlackBright('[Set]') + ' ' + sender.username + '@' + message.channel.name + ` Actividad: ${activity} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
  category: 'admin'
};

exports.help = {
    name: 'set',
    description: '[Owner Only] Setea la actividad de KiBOT a cualquiera especificada',
    usage: 'set <actividad>'
};
