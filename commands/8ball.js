exports.run = (client, message, args, sender, perms) => {
    if (args.length < 1) return message.reply('Necesitas preguntarle algo a la bola para que te responda!');
    const respuestas = [
        'Que las probabilidades estén a tu favor...',
        'Definitivamente no! En serio pensaste que esto funcionaría?',
        'Definitivamente',
        'Parece probable..',
        'Seguro, por qué no?',
        'No!',
        'Probablemente.',
        'Si mi código funciona, entonces esto puede pasar!',
        'Ciertamente',
        'Esta decidido que así pasará',
        'Sin duda alguna',
        'Definitivamente sí',
        'Puedes confiar en ello',
        'Como yo lo veo, sí',
        'Lo más probable',
        'Claro que yes',
        'Todo apunta a que sí',
        'Hmmm... intenta otra vez',
        'Pregunta de nuevo más tarde',
        'Mejor no decirte ahora',
        'Eso no se puede predecir ahora',
        'Concéntrate y pregunta otra vez',
        'No cuentes con ello',
        'Mi respuesta es no',
        'Mis fuentes dicen que no',
        'Muy dudoso',
    ];

    message.channel.send(':8ball: *' + (respuestas[Math.floor(Math.random() * respuestas.length)]) + '*');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bola8'],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Preguntale algo a la bola 8',
  usage: '8ball <pregunta>'
};
