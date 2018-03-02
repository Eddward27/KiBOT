exports.run = (client, message, args) => {
    let texto = args.join(" ");
    message.channel.send(texto);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Digo algo?',
  usage: 'say <mensaje>'
};
