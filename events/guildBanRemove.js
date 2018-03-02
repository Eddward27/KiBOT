const Discord = require('discord.js');

module.exports = (guild, user) => {

  guild.defaultChannel.send(`A ${user.tag} se le perdonó el ban!`);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Acción:** Desbaneo\n**Target:** ${user.tag}\n**Moderador:** ${guild.client.unbanAuth.tag}\n**Razón:** ${guild.client.unbanReason}`);
  return guild.channels.get(guild.channels.find('name', 'mod-log').id).send({embed});

};
