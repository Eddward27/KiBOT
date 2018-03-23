const settings = require('../settings.json');
const moment = require('moment');
const chalk = require('chalk');
exports.run = (client, message, params, sender) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Lista de comandos =\n\n[Usa ${settings.prefix}help <comando> para más detalles y aliases]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
    console.log(chalk.bgBlackBright('[Help]') + ' ' + sender.username + '@' + message.channel.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUso: ${command.help.usage}\nAliases: ${command.conf.aliases}`, {code:'asciidoc'});
      console.log(chalk.bgBlackBright('[Help]') + ' ' + sender.username + '@' + message.channel.name + ' Comando: ' + command.help.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'aiura', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Muestra la ayuda para los comandos que puedes usar',
  usage: 'help [command]'
};
