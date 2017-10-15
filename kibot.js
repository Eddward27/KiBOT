//Referencia al paquete Discord
const Discord = require('discord.js');
const bot = new Discord.Client();

//Variables para el bot
const prefix = '!';
const token = 'MzYxOTAzMzkyMDA1NTU0MTc2.DMSz3g.0jUmWhq7Sq1Q5Sj7WEQnyJklhBU';

// Functions
function hook(channel, title, message, color, avatar) {
    if (!channel) return console.log('Canal no especificado.');
    if (!title) return console.log('Titulo no especificado.');
    if (!message) return console.log('Mesnsaje no especificado.');
    if (!color) color = 'd9a744';
    if (!avatar) avatar = 'https://cdn.discordapp.com/app-icons/361903392005554176/9be7c98f8d5a3088a20951e868fcb7f2.png'

    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');

    channel.fetchWebhooks()
        .then(webhook => {
            let foundHook = webhook.find('name', 'Webhook');

            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn.discordapp.com/app-icons/361903392005554176/9be7c98f8d5a3088a20951e868fcb7f2.png')
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

//Evento Listener: Mensaje Recivido
bot.on('message', message => {
	//Variables
	let msg = message.content.toUpperCase();
	let sender = message.author;
	let cont = message.content.slice(prefix.lenght).split(" "); //Corta el prefijo del mensaje y lo separa por espacios, guardados en un arreglo
	let args = cont.slice(1); //Corta el comando dejando solo los argumentos

    if(sender.bot){ //Ignora los mensajes de cualquier BOT
        return;
    }

	//Comandos
	//Ping-Pong!
	if(msg === prefix + 'PING'){
		message.channel.send('Pong!');
	}

	//Purge
	if(msg.startsWith(prefix + 'PURGE')){
		async function purge() {
			message.delete(); //Se borra el mensaje que activo el comando para que no interfiera con el borrado

			//Verifica si el autor es digno del comando
			if(!message.member.roles.find("name", "bot-commander")){
				message.channel.send('Necesitas el rol \`bot-commander\` para usar este comando');
				return;
			}

			//Verifica si el argumento es un numero
			if(isNaN(args[0])){
				message.channel.send('Usa un número como argumento!\nUso: '+prefix+'purge <cantidad>');
				return;
			}

			const fetched = await message.channel.fetchMessages({limit: args[0]}); //Toma los ultimos 'args[0]' mensajes en el canal
			console.log(fetched.size + ' mensajes encontrados, borrando...');

			//borrando
			message.channel.bulkDelete(fetched)
				.catch(error => message.channel.send(`Error: ${error}`)); //Si hay un error lo copia en el canal
		}
		//Se llama a la funcion de borrando
		purge();

	}

	if (msg.startsWith(prefix + 'HOOK')) {
        message.delete();

        if (msg === prefix + 'HOOK') {
            return hook(message.channel, 'Uso de Hook', sender+`\n${prefix}hook <título>, <mensaje>, [color hexadecimal], [avatarURL]\n\n**<> es requerido\n[] es opcional**`,'FC8469','https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user_help-128.png'); // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(prefix.length + 4).split(",");
        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);
    }

	if(msg === prefix + 'DADO'){
		message.delete();
		var dado = Math.floor((Math.random() * 6) + 1);
		hook(message.channel, 'Dado', sender+' Haz lanzado un '+dado+'!','308030','https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/die-128.png');
	}

	if(msg === prefix + 'AVATAR'){
        const embed = new Discord.RichEmbed()
            .setAuthor('Avatar')
            .setDescription(sender)
            .setColor(0xD9A744)
            .setImage(sender.avatarURL)
            .setURL(sender.avatarURL)
        message.channel.send({embed});
	}
});

//Evento Listener: ready
bot.on('ready', () => {
	console.log('KiBOT IS ALIVE!!!');
});

//Login
bot.login(token);
