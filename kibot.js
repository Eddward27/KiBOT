const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

const log = message => {
    console.log(chalk.yellow(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`));
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    let comandosCargados = ''
    if (err) console.log(`Command load error: ${err}`);
    log(`Cargando ${files.length} comandos.`);
    files.forEach(f => {
        let props = require(`./commands/${f}`);
        comandosCargados = comandosCargados + `${props.help.name}, `;
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
    comandosCargados = comandosCargados.slice(0, -2);
    log(`Comandos cargados: ${comandosCargados}`)
});

client.reload = command =>{
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e){
            reject(e);
        }
    });
};

client.elevation = message => {
    let permlvl = 0;
    if (message.member){
        let mod_role = message.guild.roles.find('name', settings.modRoleName);
        if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 1;
        let admin_role = message.guild.roles.find('name', settings.adminRoleName);
        if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 2;
        if (message.member.hasPermission('ADMINISTRATOR')) permlvl = 3;
        if (message.author.id === process.env.OWNERID) permlvl = 4;
    }
    return permlvl;
};

client.on('warn', e => {
    console.log(chalk.bgYellow('[ADVERTENCIA]: ' + e.replace) + " - " + moment().format('YYYY-MM-DD HH:mm:ss'));
});

client.on('error', e => {
    console.log(chalk.bgRed('[ERROR]: ' + e.replace) + " - " + moment().format('YYYY-MM-DD HH:mm:ss'));
});

client.on("guildCreate", guild => {
    let intro = `Gracias por añadirme al servidor, usa el comando \`${settings.prefix}help\` para más información\nSi tienes alguna duda o sugerencia, puedes hacerla en mi servidor de soporte ${settings.support}`
    console.log(`${chalk.green('[NUEVO SERVIDOR]: ')} Unido a: ${guild.name} (id: ${guild.id}). Con: ${guild.memberCount} miembros! - ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
    if (guild.systemChannel)
        guild.systemChannel.send(intro);
    else
        guild.owner.send(intro);
    client.user.setActivity(`${client.guilds.size} servidores!`, { type: 'WATCHING' });
});

process.on('unhandledRejection', err => {
    console.log(`${chalk.bgRed("ERROR UNHANDLED: ")} ${err} - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`)
});

client.login(settings.token);
