exports.run = (client, message, args, sender, perms, command) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    var request = require('request');

    request('http://api.oboobs.ru/boobs/count', function (error, response, body) {
        if(error){
            console.log(`${chalk.bgMagenta('[NSFW-Tits]')} from: ${sender.username}@${message.channel.name} - ERROR: ${error}`)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            var count = bodyJSON[0].count;
            var number = Math.floor(Math.random() * count)
            request(`http://api.oboobs.ru/boobs/${number}`, function (error, response, body) {
                let bodyJSONGET = JSON.parse(body);
                var url = `http://media.oboobs.ru/${bodyJSONGET[0].preview}`;
                var id = bodyJSONGET[0].id;
                var rank = bodyJSONGET[0].rank;
                const embed = new Discord.RichEmbed()
                    .setTitle('Tits')
                    .addField('Rank', rank, true)
                    .addField('ID', id, true)
                    .setURL(url)
                    .setColor(0xE20F3A)
                    .setImage(url)
                    .setFooter(`Powered by oboobs.ru`);
                message.channel.send(embed)
                console.log(`${chalk.bgMagenta('[NSFW-Tits]')} ${sender.username}@${message.channel.name} - URL: ${url} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
            });
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfwboobs', 'nsfwboob'],
    permLevel: 0,
    category: 'nsfw'
};

exports.help = {
    name: 'nsfwtits',
    description: 'Have some tits...',
    usage: 'nsfwtits'
};
