const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Lista de comandos =\n\n[Usa ${settings.prefix}help <comando> para más detalles y aliases]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUso: ${command.help.usage}\nAliases: ${command.conf.aliases}`, {code:'asciidoc'});
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
