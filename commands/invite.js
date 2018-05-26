const settings = require('../settings.json');
const moment = require('moment');
const chalk = require('chalk');

exports.run = (client, message, args, sender, perms) => {
    message.channel.send(settings.invite)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'general'
};

exports.help = {
    name: 'invite',
    description: 'Recive un link para invitar a KiBOT a tu servidor',
    usage: 'invite',
};
