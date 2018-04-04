exports.run = (client, message, args, sender, perms) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    if (args.length < 2){
        message.channel.send(`Por favor ingresa al menos 2 parámetros para elegir, revisa \`${settings.prefix}help choose\` para más información`)
        console.log(chalk.bgRed('[Choose]') + ' '+ sender.username + '@' + message.channel.name + ` sin argumentos mínimos [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }
    let lowerArgs = args.map(v => v.toLowerCase());
    if (lowerArgs.includes('monika')){
        message.channel.send("J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭ J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭ J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭ J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭ J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭ J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭ J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭ J̴̙͌ȕ̶̮͜s̴̗̳̐ť̸̊ͅM̸͔̍ǒ̵̗̬n̵̙̙̈́i̴̛̺̱̐k̵͕̟͊å̸͇̭");
        message.channel.send("JUST");
        message.channel.send("MONIKA")
        console.log(chalk.bgRed('[Choose]') + ' '+ sender.username + '@' + message.channel.name + ` MONIKA [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        return;
    }

    let indexChoose = Math.floor(Math.random() *args.length);
    message.channel.send(`Yo eligo`)
        .then(msg => {
            msg.edit(`Yo eligo...`)
                .then(msg => {
                    msg.edit(`Yo eligo... \`${args[indexChoose]}\``)
        })
    });
    console.log(chalk.bgRed('[Choose]') + ' '+ sender.username + '@' + message.channel.name + ` Resultado: ${args[indexChoose]} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['elige', 'escoge', 'selecciona', 'pick'],
    permLevel: 0
};

exports.help = {
    name: 'choose',
    description: 'Elige aleatoriamente una opción de los argumentos recibidos separados por un espacio (Min. 2)',
    usage: 'choose <opcion1> <opcion2> [opcion3]...'
};
