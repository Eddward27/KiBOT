exports.run = (client, message, args, sender, perms) => {
    let uptime = client.uptime;
    let dias = 0;
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let noListo = true;
    while (noListo) {
        if (uptime >= 8.64e+7) {
            dias++;
            uptime -= 8.64e+7;
        } else if (uptime >= 3.6e+6) {
            horas++;
            uptime -= 3.6e+6;
        } else if (uptime >= 60000) {
            minutos++;
            uptime -= 60000;
        } else if (uptime >= 1000) {
            segundos++;
            uptime -= 1000;
        }
        if (uptime < 1000)  noListo = false;
    }
    message.channel.send(`**Uptime:\n\nDias: \`${dias}\` \nHoras: \`${horas}\` \nMinutos: \`${minutos}\` \nSegundos: \`${segundos}\`**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['alive'],
  permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'Tiempo que llevo vivo',
  usage: 'uptime'
};
