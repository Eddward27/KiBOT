//Referencia al paquete Discord
const Discord = require('discord.js');	//Uso de libreria 'discord.js'
const bot = new Discord.Client();	//Instancia de bot

//Variables para el bot
const prefix = '!';	//Prefijo usado para activar comandos de bot
const token = 'MzYxOTAzMzkyMDA1NTU0MTc2.DMSz3g.0jUmWhq7Sq1Q5Sj7WEQnyJklhBU';	//Token secreto para usar bot
const avatarURLkBOT = 'https://cdn.discordapp.com/attachments/368996103917666305/369657756304801802/me2.png';	//URL de avatar para KiBOT, por el mismisimo Kibo

// Functions
function hook(channel, title, message, color, avatar) {	//Funcion que crea los webhooks '!hook'
    if (!channel) return console.log('Canal no especificado.');
    if (!title) return console.log('Titulo no especificado.');
    if (!message) return console.log('Mesnsaje no especificado.');
    if (!color) color = 'd9a744';
    if (!avatar) avatar = avatarURLkBOT;

    color = color.replace(/\s/g, '');	//Elimina espacios que puedan quedar en color y avatar
    avatar = avatar.replace(/\s/g, '');

    channel.fetchWebhooks()
        .then(webhook => {	//Webhook 'original'
            let foundHook = webhook.find('name', 'Webhook');

            if (!foundHook) {
                channel.createWebhook('Webhook', avatarURLkBOT)
                    .then(webhook => {
                        webhook.send('', {
                            "username": title,
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description":message
                            }]
                        })
                            .catch(error => {
                                console.log(error);
                                return channel.send('**Algo salió mal con el webhook. Vea la consola para más detalles.**');
                            })
                    })
            } else {
                foundHook.send('', {
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                    .catch(error => {
                        console.log(error);
                        return channel.send('**Algo salió mal con el webhook. Vea la consola para más detalles.**');
                    })
                }
        })
}

//Evento Listener: Mensaje Recibido
bot.on('message', message => {
	//Variables
	let msg = message.content.toUpperCase();	//Mensaje en mayúsculas
	let sender = message.author;	//Autor del mensaje que activo el comando
	let cont = message.content.slice(prefix.lenght).split(" "); //Corta el prefijo del mensaje y lo separa por espacios, guardados en un arreglo
	let args = cont.slice(1); //Corta el comando dejando solo los argumentos

    if(sender.bot){ //Ignora los mensajes de cualquier BOT
        return;
    }

	//Comandos

	//Ping-Pong!
	if(msg === prefix + 'PING'){
        let embed = new Discord.RichEmbed()
            .setColor('FF0000')
            .setDescription(':ping_pong: Pong! - '+bot.ping+ 'ms!')
        message.channel.send({ embed });
	}

/*
    //Uptime
    if(msg === prefix + 'UPTIME'){
        let embed = new Discord.RichEmbed()
            .setColor('FF0000')
            .setDescription('Uptime: '+bot.uptime)
        message.channel.send({ embed });
	}
*/
/*
    if(msg === prefix + 'INVITE'){
        bot.generateInvite(['ADMINISTRATOR'])
            .then(link => {
                console.log(`Link de invitación generado: ${link}`);
        let embed = new Discord.RichEmbed()
            .setTitle('KiBOT: Link de invitación')
            .setImage(avatarURLkBOT)
            .setColor(0x00AE86)
            .setURL(link)
        message.channel.send({ embed });
  });
    }
*/

	//Purge
	if(msg.startsWith(prefix + 'PURGE')){
		async function purge() {
			message.delete(); //Se borra el mensaje que activo el comando para que no interfiera con el borrado

			//Verifica si el autor es digno del comando (si tiene el rol 'bot-comander')
			if(!message.member.roles.find("name", "bot-commander")){
				message.channel.send('Necesitas el rol \`bot-commander\` para usar este comando');
				return;
			}

			//Verifica si el argumento es un número
			if(isNaN(args[0])){
				message.channel.send('Usa un número como argumento!\nUso: '+prefix+'purge <cantidad>');
				return;
			}

			const fetched = await message.channel.fetchMessages({limit: args[0]}); //Toma los ultimos 'args[0]' mensajes en el canal
			console.log(args[0]+' mensajes pedidos a borrar, '+fetched.size + ' mensajes encontrados, borrando...');	//Detalles por consola

			//Borrando
			message.channel.bulkDelete(fetched)
				.catch(error => message.channel.send(`Error: ${error}`)); //Si hay un error lo copia en el canal
		}
		//Se llama a la funcion de borrando
		purge();
	}

    //Webhook
	if (msg.startsWith(prefix + 'HOOK')) {
        message.delete();	//Elimina el mensaje que origino el comando

        if (msg === prefix + 'HOOK') {	//!hook sin argumentos
            return hook(message.channel, 'Uso de Hook', sender+`\n${prefix}hook <título>, <mensaje>, [color hexadecimal], [avatarURL]\n\n**<> es requerido\n[] es opcional**`,'FC8469','https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user_help-128.png'); // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(prefix.length + 4).split(",");	//Separa argumentos en arreglo, argumentos enviados separados por comas ','
        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);
    }

    //Dado
	if(msg === prefix + 'DADO'){	//Dado, aleatorio de [1,6], hace uso de webhook (!hook)
		message.delete();
		var dado = Math.floor((Math.random() * 6) + 1);
		hook(message.channel, 'Dado', sender+' Haz lanzado un '+dado+'!','308030','https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/die-128.png');
	}

    //Avatar
	if(msg === prefix + 'AVATAR'){	//Muestra el avatar el autor del mensaje
        const embed = new Discord.RichEmbed()
            .setAuthor('Avatar')
            .setDescription(sender)
            .setColor(0xD9A744)
            .setImage(sender.avatarURL)
            .setURL(sender.avatarURL)
        message.channel.send({embed});
	}

    /////////
});

//Evento Listener: ready
bot.on('ready', () => {
	console.log('KiBOT IS ALIVE!!!');	//Avisa que el bot está listo por consola

//Bot Status
bot.user.setStatus('Online');    //Online, Idle, Invisible, dnd

//Jugando, Streaming - SOLO UNO DE LOS DOS PUEDE USARSE A LA VEZ!!
    //Jugando
bot.user.setGame('First Steps!');
    //Streaming
//bot.user.setGame('nombre del stream', 'link twitch.tv o hitbox.tv');
});

//Login
bot.login(token);	//Login de bot a Discord

/////////////////////////////////////////////////////////////
