exports.run = (client, message, args, sender, perms) => {
    const Discord = require('discord.js');

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };

    var msg = message;
    try{
        var tiempo;
        var medidaTiempo;
        message = message.content.split(' ');
        console.log('[reminder] Mensaje de "' + msg.author.username + '" en: "' + msg.guild.name + `" recibido - ${new Date()}`);

        medidaTiempo = message[1].substring((message[1].length - 1), (message[1].length));
        tiempo = message[1].substring(0, (message[1].length - 1));

        switch (medidaTiempo) {
            case 's':
                tiempo = tiempo * 1000;
                break;

            case 'm':
                tiempo = tiempo * 1000 * 60;
                break;

            case 'h':
                tiempo = tiempo * 1000 * 60 * 60;
                break;

            case 'd':
                tiempo = tiempo * 1000 * 60 * 60 * 24;
                break;

            default:
                tiempo = tiempo * 1000;
                break;
        }

        client.setTimeout(function () {

            message.shift();
            message.shift();

            var content = message.join();
            content = content.replaceAll(',', ' ');
            msg.reply(content);

            console.log('[reminder] Mensaje de "' + msg.author.username + '" en: "' + msg.guild.name + `" enviado - ${new Date()}`);
        }, tiempo)
    } catch (e) {
        const embed = new Discord.RichEmbed()
            .setAuthor('Reminder')
            .setDescription('Ha ocurrido un error, asegurate de que el mensaje contiene un límite de tiempo designado\n\nremindme <tiempo> <mensaje>\nEjemplo: 30m\ns -> Segundo\nm -> Minutos\n d -> Dias')
            .setColor(0x172D51);
        msg.reply({embed});
        console.error(e.toString());
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['recuerdame', 'avisame','acuerdame'],
  permLevel: 0
};

exports.help = {
  name: 'remindme',
  description: 'Deja que KiBOT te recuerde algo en el tiempo especificado',
  usage: 'remindme <tiempo> <mensaje>'
};
