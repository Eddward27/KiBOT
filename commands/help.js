const settings = require('../settings.json');
const moment = require('moment');
const chalk = require('chalk');
const Discord = require('discord.js');
const ver = require('../package.json').version;
exports.run = (client, message, args, sender, perms) => {
    const maxField = 2;
    var commandsArray = [];
    var salto = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var general = "";
    var fun = "";
    var imagenes = "";
    var gifs = "";
    var react = "";
    var anime = "";
    var util = "";
    var guild = "";
    var admin = "";
    var ero = "";
    var nsfw = "";
    var nsfwgif = "";

    client.commands.map(c => {
        if (c.conf.permLevel <= perms)
            commandsArray[commandsArray.length] = {name: c.help.name, category: c.conf.category}
    });

    for (let index = 0; index < commandsArray.length; index++) {
        switch (commandsArray[index].category) {
            case 'general':
                general = `${general}\`-${commandsArray[index].name}\`, `;
                salto[0]++;
                if (salto[0] > maxField){
                    salto[0] = 0
                    general = general + '\n'
                }
                break;
            case 'fun':
                fun = `${fun}\`-${commandsArray[index].name}\`, `;
                salto[1]++;
                if (salto[1] > maxField){
                    salto[1] = 0
                    fun = fun + '\n'
                }
                break;
            case 'imagenes':
                imagenes = `${imagenes}\`-${commandsArray[index].name}\`, `;
                salto[2]++;
                if (salto[2] > maxField){
                    salto[2] = 0
                    imagenes = imagenes + '\n'
                }
                break;
            case 'gifs':
                gifs = `${gifs}\`-${commandsArray[index].name}\`, `;
                salto[3]++;
                if (salto[3] > maxField){
                    salto[3] = 0
                    gifs = gifs + '\n'
                }
                break;
            case 'react':
                react = `${react}\`-${commandsArray[index].name}\`, `;
                salto[4]++;
                if (salto[4] > maxField){
                    salto[4] = 0
                    react = react + '\n'
                }
                break;
            case 'anime':
                anime = `${anime}\`-${commandsArray[index].name}\`, `;
                salto[5]++;
                if (salto[5] > maxField){
                    salto[5] = 0
                    anime = anime + '\n'
                }
                break;
            case 'util':
                util = `${util}\`-${commandsArray[index].name}\`, `;
                salto[6]++;
                if (salto[6] > maxField){
                    salto[6] = 0
                    util = util + '\n'
                }
                break;
            case 'guild':
                guild = `${guild}\`-${commandsArray[index].name}\`, `;
                salto[7]++;
                if (salto[7] > maxField){
                    salto[7] = 0
                    guild = guild + '\n'
                }
                break;
            case 'admin':
                admin = `${admin}\`-${commandsArray[index].name}\`, `;
                salto[8]++;
                if (salto[8] > maxField){
                    salto[8] = 0
                    admin = admin + '\n'
                }
                break;
            case 'ero':
                ero = `${ero}\`-${commandsArray[index].name}\`, `;
                //salto[9]++;
                //if (salto[9] > maxField){
                //    salto[9] = 0
                //    ero = ero + '\n'
                //}
                break;
            case 'nsfw':
                nsfw = `${nsfw}\`-${commandsArray[index].name}\`, `;
                salto[10]++;
                if (salto[10] > maxField){
                    salto[10] = 0
                    nsfw = nsfw + '\n'
                }
                break;
            case 'nsfwgif':
                nsfwgif = `${nsfwgif}\`-${commandsArray[index].name}\`, `;
                salto[11]++;
                if (salto[11] > maxField){
                    salto[11] = 0
                    nsfwgif = nsfwgif + '\n'
                }
                break;
            default:
                console.log(`El comando '${commandsArray[index].name}' no tiene categoría o es una inválida!!!`);
                break;
        }
    }

    general = general.slice(0, -2);
    fun = fun.slice(0, -2);
    imagenes = imagenes.slice(0, -2);
    gifs = gifs.slice(0, -2);
    react = react.slice(0, -2);
    anime = anime.slice(0, -2);
    util = util.slice(0, -2);
    guild = guild.slice(0, -2);
    admin = admin.slice(0, -2);
    ero = ero.slice(0, -2);
    nsfw = nsfw.slice(0, -2);
    nsfwgif = nsfwgif.slice(0, -2);

    if (args[0]){

    }

    if (args[0]) {
        let command = args[0];
        if (client.commands.has(command) || client.aliases.has(command)) {
            var alias = '';
            command = client.commands.get(command) || client.commands.get(client.aliases.get(command));
            if (command.conf.permLevel > perms) {
                message.channel.send(`No tienes los permisos suficientes para ver la ayuda de este comando`);
                return console.log(`${chalk.bgBlackBright('[Help]')} ${sender.username}@${message.channel.name} Sin permisos: ${command.help.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
            }
            if(command.conf.aliases.length === 0){
                alias = 'N/A'
            }else{
                alias = `${command.conf.aliases}`
                alias = alias.replace(/,/g, ', ')
            }
            if (command.conf.category === 'ero' || command.conf.category === 'nsfw' || command.conf.category === 'nsfwgif') {
                if(!message.channel.nsfw){
                    message.channel.send(':rolling_eyes: **Intenta eso en otro canal** :rolling_eyes:')
                    .then( msg => {
                        setTimeout(function(){
                            message.delete()
                            msg.delete()
                        }, 4000);
                    });
                    return console.log(`Canal SFW`);
                }
            }
            message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUso: ${command.help.usage}\nAliases: ${alias}\nCategoría: ${command.conf.category}`, {code:'asciidoc'});
            return console.log(chalk.bgBlackBright('[Help]') + ' ' + sender.username + '@' + message.channel.name + ' Comando: ' + command.help.name + ` [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
        }else{
            return message.channel.send('Ese comando o alias no existe...');
        }
    }

    const embed = new Discord.RichEmbed()
        .setTitle(`Lista de comandos`)
        .setDescription(`Para más ayuda escribe \`${settings.prefix}help 'comando'\`\nCooldown: 2.5 seg.`)
        .setThumbnail('https://i.imgur.com/7Mqu5Ma.png')
        .setURL('https://kibot.glitch.me/comandos.html')
        .setFooter(`https://kibot.glitch.me/ - Version: ${ver} - (´・ω・\`)`, 'https://i.imgur.com/7Mqu5Ma.png')
        .setColor(settings.color);
    if (general) embed.addField('General', general, true);
    if (fun) embed.addField('Fun', fun, true);
    if (gifs) embed.addField('Gifs', gifs, true);
    if (react) embed.addField('React', react, true);
    if (anime) embed.addField('Anime', anime, true);
    if (imagenes) embed.addField('Imagenes', imagenes, true);
    if (util) embed.addField('Util', util, true);
    if (guild) embed.addField('Guild', guild, true);
    if (admin) embed.addField('Admin', admin, true);

    //THAT'S LEWD!!!
    if (message.channel.nsfw) {
        if (ero) embed.addField('Ero', ero, false);
        if (nsfw) embed.addField('NSFW', nsfw, true);
        if (nsfwgif) embed.addField('NSFW Gifs', nsfwgif, true);
    } else {
        if (ero || nsfw || nsfwgif) embed.addField('NSFW', 'Intenta en otro canal', true);
    }

    embed.addBlankField()
    embed.addField(`Ejemplo:`, `\`${settings.prefix}help pokefusion\` para obtener más información acerca del comando pokefusion`)
    embed.addField(`Links:`, `[KiBOT Web](https://kibot.glitch.me/) - [Invite](${settings.invite}) - [Servidor KiBOT](${settings.support}) - [Discordbots.org](https://discordbots.org/bot/361903392005554176)\n[Vota por KiBOT c:](https://discordbots.org/bot/361903392005554176/vote)`)
    message.channel.send({embed})
    console.log(`${chalk.bgBlackBright('[Help]')} ${sender.username}@${message.channel.name} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'aiura', 'halp'],
    permLevel: 0,
    category: 'general'
};

exports.help = {
    name: 'help',
    description: 'Muestra la ayuda para los comandos que puedes usar',
    usage: 'help [comando]'
};
