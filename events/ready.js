const chalk = require('chalk');
const moment = require('moment');
const settings = require('../settings.json');
const Discord = require('discord.js');
module.exports = client => {
    const logChannel = client.guilds.find('id', '429696032775864335').channels.find('id', '443134017634566144');
    client.user.setStatus('online');
    client.user.setActivity(`${settings.prefix}new`);
    console.log(chalk.bgGreen.black(`ESTA VIVO!!!!!!!!!!!!! - [${moment().format('YYYY-MM-DD HH:mm:ss')}]`));

    if (logChannel){
        const embed = new Discord.RichEmbed()
            .setAuthor("Bot Ready")
            .setDescription(`El bot se acaba de volver a iniciar`)
            .setTimestamp()
            .setFooter('Reset!!!');
        logChannel.send({embed});
    }
};
