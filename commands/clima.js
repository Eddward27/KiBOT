function timeToHuman(fecha)
{
    var theDate = new Date(fecha * 1000);
    dateString = theDate.toGMTString();
    return dateString;
}

exports.run = (client, message, args, sender, perms, command) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    const chalk = require('chalk');
    const settings = require('../settings.json');
    if (args.length < 1) {
        return message.channel.send(`Debes especificar una ciudad para buscar\nUsa \`${settings.prefix}help clima\` para más información`)
    }
    var request = require('request');
    let ciudad = args.join(" ");
    var apiURL = `http://api.openweathermap.org/data/2.5/weather?appid=${settings.OPENWEATHERMAP}&units=metric&lang=es&q=${ciudad}`
    request(apiURL, function (error, response, body) {
        if(error){
            console.log(`${chalk.bgMagenta('[Clima]')} from: ${sender.username}@${message.channel.name} - ERROR: ${error}`)
        }
        if(response.statusCode === 200){
            let bodyJSON = JSON.parse(body);
            if (bodyJSON.cod === 404) {
                return message.channel.send('Ciudad no encontrada :c');
            }
            message.channel.startTyping()
            var pais = bodyJSON.sys.country.toLowerCase()
            var fechaConsulta = timeToHuman(bodyJSON.dt);
            var amanecer = timeToHuman(bodyJSON.sys.sunrise);
            var atardecer = timeToHuman(bodyJSON.sys.sunset);
            const embed = new Discord.RichEmbed()
                .setTitle(`${bodyJSON.name}`)
                .setURL(`https://openweathermap.org/city/${bodyJSON.id}`)
                .setTimestamp()
                .setColor(settings.color)
                .setThumbnail(`https://openweathermap.org/img/w/${bodyJSON.weather[0].icon}.png`)
                .setDescription(`Ciudad: ${bodyJSON.name}, ${bodyJSON.sys.country}`)
                .addField('Clima', `Grupo climático: ${bodyJSON.weather[0].main}\nDetalle: ${bodyJSON.weather[0].description}`, true)
                .addField('Coordenadas', `Latitud: ${bodyJSON.coord.lat}, Longitud: ${bodyJSON.coord.lon}`, true)
                .addField('Viento', `Velocidad: ${bodyJSON.wind.speed} m/s\nDirección: ${bodyJSON.wind.deg}°`, true)
                .addField('Nubosidad', `${bodyJSON.clouds.all}%`, true)
                .addField('Datos Climáticos', `Temperatura: ${bodyJSON.main.temp}°C\nPresión Atmosférica: ${bodyJSON.main.pressure} hPa\nHumedad: ${bodyJSON.main.humidity}%\nT. Mínima: ${bodyJSON.main.temp_min}°C\nT. Máxima: ${bodyJSON.main.temp_max}°C`)
                .addField('Hora del amanecer', amanecer, true)
                .addField('Hora del atardecer', atardecer, true)
                .addField('Hora de consulta', fechaConsulta)
                .setFooter(`Powered by openweathermap.org`, `http://openweathermap.org/images/flags/${pais}.png`);
            message.channel.send({embed});
            console.log(`${chalk.bgMagenta('[Clima]')} ${sender.username}@${message.channel.name} - Ciudad: ${bodyJSON.name}, ${bodyJSON.sys.country} [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
            message.channel.stopTyping(true)
        } else {
            return message.channel.send('Ciudad no encontrada :c');
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['weather'],
    permLevel: 0,
    category: 'util'
};

exports.help = {
    name: 'clima',
    description: 'Busca el clima de una ciudad\nEj, -clima Valparaíso, CL',
    usage: 'clima <ciudad>'
};
