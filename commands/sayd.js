exports.run = (client, message, args) => {
    let texto = args.join(" ");
    message.delete();
    message.channel.send(texto);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sayd',
  description: 'Digo algo? y te la dejo piola',
  usage: 'sayd <mensaje>'
};
