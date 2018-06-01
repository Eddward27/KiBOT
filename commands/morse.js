exports.run = (client, message, args, sender, perms, command) => {
    const moment = require('moment');
    const chalk = require('chalk');
    const morse = require('../data/morse.json');
    const settings = require('../settings.json');

    if (!args[0]) {
        message.channel.send(`Especifíca un texto para transformar \`${settings.prefix}morse <texto>\``);
        return console.log(`${chalk.bgRed('[Morse]')} ${sender.username}@${message.channel.name} - Sin texto - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }

    var mensaje = "";
    let texto = args.join(" ");
    texto = texto.trim();
    texto = texto.toUpperCase();
    while (texto) {
        var caracter = texto.charAt(0);
        texto = texto.substr(1)
        switch (caracter) {
            case morse.caracter[0]:
                mensaje = mensaje + morse.codigo[0] + ' '
                break;
            case morse.caracter[1]:
                mensaje = mensaje + morse.codigo[1] + ' '
                break;
            case morse.caracter[2]:
                mensaje = mensaje + morse.codigo[2] + ' '
                break;
            case morse.caracter[3]:
                mensaje = mensaje + morse.codigo[3] + ' '
                break;
            case morse.caracter[4]:
                mensaje = mensaje + morse.codigo[4] + ' '
                break;
            case morse.caracter[5]:
                mensaje = mensaje + morse.codigo[5] + ' '
                break;
            case morse.caracter[6]:
                mensaje = mensaje + morse.codigo[6] + ' '
                break;
            case morse.caracter[7]:
                mensaje = mensaje + morse.codigo[7] + ' '
                break;
            case morse.caracter[8]:
                mensaje = mensaje + morse.codigo[8] + ' '
                break;
            case morse.caracter[9]:
                mensaje = mensaje + morse.codigo[9] + ' '
                break;
            case morse.caracter[10]:
                mensaje = mensaje + morse.codigo[10] + ' '
                break;
            case morse.caracter[11]:
                mensaje = mensaje + morse.codigo[11] + ' '
                break;
            case morse.caracter[12]:
                mensaje = mensaje + morse.codigo[12] + ' '
                break;
            case morse.caracter[13]:
                mensaje = mensaje + morse.codigo[13] + ' '
                break;
            case morse.caracter[14]:
                mensaje = mensaje + morse.codigo[14] + ' '
                break;
            case morse.caracter[15]:
                mensaje = mensaje + morse.codigo[15] + ' '
                break;
            case morse.caracter[16]:
                mensaje = mensaje + morse.codigo[16] + ' '
                break;
            case morse.caracter[17]:
                mensaje = mensaje + morse.codigo[17] + ' '
                break;
            case morse.caracter[18]:
                mensaje = mensaje + morse.codigo[18] + ' '
                break;
            case morse.caracter[19]:
                mensaje = mensaje + morse.codigo[19] + ' '
                break;
            case morse.caracter[20]:
                mensaje = mensaje + morse.codigo[20] + ' '
                break;
            case morse.caracter[21]:
                mensaje = mensaje + morse.codigo[21] + ' '
                break;
            case morse.caracter[22]:
                mensaje = mensaje + morse.codigo[22] + ' '
                break;
            case morse.caracter[23]:
                mensaje = mensaje + morse.codigo[23] + ' '
                break;
            case morse.caracter[24]:
                mensaje = mensaje + morse.codigo[24] + ' '
                break;
            case morse.caracter[25]:
                mensaje = mensaje + morse.codigo[25] + ' '
                break;
            case morse.caracter[26]:
                mensaje = mensaje + morse.codigo[26] + ' '
                break;
            case morse.caracter[27]:
                mensaje = mensaje + morse.codigo[27] + ' '
                break;
            case morse.caracter[28]:
                mensaje = mensaje + morse.codigo[28] + ' '
                break;
            case morse.caracter[29]:
                mensaje = mensaje + morse.codigo[29] + ' '
                break;
            case morse.caracter[30]:
                mensaje = mensaje + morse.codigo[30] + ' '
                break;
            case morse.caracter[31]:
                mensaje = mensaje + morse.codigo[31] + ' '
                break;
            case morse.caracter[32]:
                mensaje = mensaje + morse.codigo[32] + ' '
                break;
            case morse.caracter[33]:
                mensaje = mensaje + morse.codigo[33] + ' '
                break;
            case morse.caracter[34]:
                mensaje = mensaje + morse.codigo[34] + ' '
                break;
            case morse.caracter[35]:
                mensaje = mensaje + morse.codigo[35] + ' '
                break;
            case morse.caracter[36]:
                mensaje = mensaje + morse.codigo[36] + ' '
                break;
            case morse.caracter[37]:
                mensaje = mensaje + morse.codigo[37] + ' '
                break;
            case morse.caracter[38]:
                mensaje = mensaje + morse.codigo[38] + ' '
                break;
            case morse.caracter[39]:
                mensaje = mensaje + morse.codigo[39] + ' '
                break;
            case morse.caracter[40]:
                mensaje = mensaje + morse.codigo[40] + ' '
                break;
            case morse.caracter[41]:
                mensaje = mensaje + morse.codigo[41] + ' '
                break;
            case morse.caracter[42]:
                mensaje = mensaje + morse.codigo[42] + ' '
                break;
            case morse.caracter[43]:
                mensaje = mensaje + morse.codigo[43] + ' '
                break;
            case morse.caracter[44]:
                mensaje = mensaje + morse.codigo[44] + ' '
                break;
            case morse.caracter[45]:
                mensaje = mensaje + morse.codigo[45] + ' '
                break;
            case morse.caracter[46]:
                mensaje = mensaje + morse.codigo[46] + ' '
                break;
            case morse.caracter[47]:
                mensaje = mensaje + morse.codigo[47] + ' '
                break;
            case morse.caracter[48]:
                mensaje = mensaje + morse.codigo[48] + ' '
                break;
            case morse.caracter[49]:
                mensaje = mensaje + morse.codigo[49] + ' '
                break;
        }
    }

    message.channel.send(`\`${mensaje}\``)
    console.log(`${chalk.bgRed('[Morse]')} ${sender.username}@${message.channel.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'morse',
    description: 'Transforma una palabra a código morse',
    usage: 'morse <palabra>'
};
