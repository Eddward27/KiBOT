//Referencias a Packages
const Discord = require('discord.js');	//Uso de libreria 'discord.js'
const fs = require('fs');   //Uso de fs

const bot = new Discord.Client();	//Instancia de bot

//Variables para el bot
const config = require("./config/config.json");
//Imagenes usadas en KiBOT se encuentran en 'https://imgur.com/a/UBRYe'

// Functions
function hook(channel, title, message, color, avatar) {	//Funcion que crea los webhooks '!hook'
    if (!channel) return console.log('Canal no especificado.');
    if (!title) return console.log('Titulo no especificado.');
    if (!message) return console.log('Mesnsaje no especificado.');
    if (!color) color = 'd9a744';
    if (!avatar) avatar = config.botAvatar;

    color = color.replace(/\s/g, '');	//Elimina espacios que puedan quedar en color y avatar
    avatar = avatar.replace(/\s/g, '');

    channel.fetchWebhooks()
        .then(webhook => {	//Webhook 'original'
            let foundHook = webhook.find('name', 'Webhook');

            if (!foundHook) {
                channel.createWebhook('Webhook', config.botAvatar)
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
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toUpperCase();
	//let cont = message.content.slice(config.prefix.lenght).trim().split(/ +/g); //Corta el prefijo del mensaje y lo separa por espacios, guardados en un arreglo
	//let args = cont.slice(1); //Corta el comando dejando solo los argumentos

    if(sender.bot || !message.content.startsWith(config.prefix)){ //Ignora los mensajes de cualquier BOT y también ignora si no comienza con el prefijo
        return;
    }

    //Comandos de modificación
    if(command === 'PREFIJO'){
        if(msg === config.prefix + 'PREFIJO'){  //Si el comando se envió sin argumentos, se retorna el prefijo actual
            message.channel.send('Prefijo actual: \''+config.prefix+'\'')
            return;
        }
        if(sender.id !== config.ownerID) return message.channel.send('**No tienes permisos para cambiar este valor**'); //Verifica si el autor del mensaje es el dueño
        /*if(args[0].lenght !== 1){   //Verifica si el nuevo prefijo es de 1 caráter de largo
            message.channel.send('**Intenta con un prefijo de 1 carácter :baby_chick:**');
            return;
        }*/
        let nuevoPrefijo = args[0]; //Cambia el prefijo en la memoria

        console.log('Cambio de prefijo: \''+config.prefix+'\' a \''+nuevoPrefijo+'\'...')   //Avisa por consola el cambio de prefijo

        config.prefix = nuevoPrefijo;   //Guarda la configuración en la memoria
        fs.writeFile('./config/config.json', JSON.stringify(config), (err) => console.error);   //Modifica el archivo '/config/config.json'

        message.channel.send('**@everyone Nuevo prefijo: \''+config.prefix+'\'**');   //Avisa por Discord
    }
    //Comandos de modificación-END

	//Comandos

	//Ping-Pong!
	if(command === 'PING'){
        let embed = new Discord.RichEmbed()
            .setColor('FF0000')
            .setDescription(':ping_pong: Pong! - '+bot.ping+ 'ms!')
        message.channel.send({ embed });
	}

/*
    //Uptime
    if(command === 'UPTIME'){
        let embed = new Discord.RichEmbed()
            .setColor('FF0000')
            .setDescription('Uptime: '+bot.uptime)
        message.channel.send({ embed });
	}
*/
/*
    if(command === 'INVITE'){
        bot.generateInvite(['ADMINISTRATOR'])
            .then(link => {
                console.log(`Link de invitación generado: ${link}`);
        let embed = new Discord.RichEmbed()
            .setTitle('KiBOT: Link de invitación')
            .setImage(config.botAvatar)
            .setColor(0x00AE86)
            .setURL(link)
        message.channel.send({ embed });
  });
    }
*/

	//Purge
	if(command === 'PURGE'){
		async function purge() {
			message.delete(); //Se borra el mensaje que activo el comando para que no interfiera con el borrado

			//Verifica si el autor es digno del comando (si tiene el rol 'bot-comander')
			if(!message.member.roles.find("name", "bot-commander")){
				message.channel.send('Necesitas el rol \`bot-commander\` para usar este comando');
				return;
			}

			//Verifica si el argumento es un número
			if(isNaN(args[0])){
				message.channel.send('Usa un número como argumento!\nUso: '+config.prefix+'purge <cantidad>');
				return;
			}

			const fetched = await message.channel.fetchMessages({limit: args[0]}); //Toma los ultimos ${args[0]} mensajes en el canal
			console.log(args[0]+' mensajes pedidos a borrar, '+fetched.size + ' mensajes encontrados, borrando...');	//Detalles por consola

			//Borrando
			message.channel.bulkDelete(fetched)
				.catch(error => message.channel.send(`Error: ${error}`)); //Si hay un error lo copia en el canal
		}
		//Se llama a la funcion de borrando
		purge();
	}

    //Webhook
	if (command === 'HOOK') {
        message.delete();	//Elimina el mensaje que origino el comando

        if (msg === config.prefix + 'HOOK') {	//!hook sin argumentos
            return hook(message.channel, 'Uso de Hook', sender+`\n${config.prefix}hook <título>, <mensaje>, [color hexadecimal], [avatarURL]\n\n**<> es requerido\n[] es opcional**`,'FC8469','https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user_help-128.png'); // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(config.prefix.length + 4).split(",");	//Separa argumentos en arreglo, argumentos enviados separados por comas ','
        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);
    }

    //Dado
	if(command === 'DADO'){	//Dado, aleatorio de [1,6], hace uso de webhook (!hook)
		message.delete();
		var dado = Math.floor((Math.random() * 6) + 1);
		hook(message.channel, 'Dado', sender+' Haz lanzado un '+dado+'!','308030','https://i.imgur.com/r3OwpNL.png');
	}

    //Avatar
	if(command === 'AVATAR'){	//Muestra el avatar el autor del mensaje
        const embed = new Discord.RichEmbed()
            .setAuthor('Avatar')
            .setDescription(sender)
            .setColor(0xD9A744)
            .setImage(sender.avatarURL)
            .setURL(sender.avatarURL)
        message.channel.send({embed});
	}

    //ID
    if(command === 'ID'){
        message.channel.send(sender+' tu ID de Discord es: \''+sender.id+'\'');
    }

    //Kick
    if(command === 'KICK'){
        if(msg === config.prefix + 'KICK'){
            hook(message.channel,'Uso de Kick', config.prefix+'kick <usuario>','EEFF44','https://i.imgur.com/WRlQqKl.png');
            return;
        }
        let kickea2 = message.mentions.members.first();
        let razon = args.slice(1).join(" ");
        message.channel.send(kickea2+' KICKEA2!!!');
        kickea2.kick(razon);
    }

    //Say
    if(command === 'SAY'){
        let texto = args.join(" ");
        message.channel.send(texto);
    }

    //Sayd
    if(command === 'SAYD'){
        let texto = args.join(" ");
        message.delete();
        message.channel.send(texto);
    }

    //Coinflip
    if(command === 'COINFLIP' || command === 'CARAOSELLO'){
        message.channel.send(sender+' lanzó una moneda...');	//Prepara la tensión en el ambiente
        if(Math.floor(Math.random() * 2) === 0){  //0 se toma como 'Cara'
            const embed = new Discord.RichEmbed()
                .setAuthor('Coinflip!')
                .setDescription('Salió Cara!')
                .setColor(0x880000)
                .setImage('https://i.imgur.com/eisOgJ8.png');
            message.channel.send({embed});
        }else{	//La otra opción solo puede ser 1, 'Sello'
            const embed = new Discord.RichEmbed()
                .setAuthor('Coinflip!')
                .setDescription('Salió Sello!')
                .setColor(0x000088)
                .setImage('https://i.imgur.com/dPYONPD.png');
            message.channel.send({embed});
    }
    }
});

//Evento Listener: ready
bot.on('ready', () => {
	console.log('KiBOT IS ALIVE!!!');	//Avisa que el bot está listo por consola

//Bot Status
bot.user.setStatus('online');    //Online, Idle, Invisible, dnd ----------NO PARECE FUNCIONAR!!

//Jugando, Streaming - SOLO UNO DE LOS DOS PUEDE USARSE A LA VEZ!!
    //Jugando
bot.user.setGame('with my code!');
    //Streaming
//bot.user.setGame('nombre del stream', 'link twitch.tv o hitbox.tv');
});

//Login
bot.login(config.token);	//Login de bot a Discord

/////////////////////////////////////////////////////////////
