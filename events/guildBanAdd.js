module.exports = (guild, user) => {
  guild.defaultChannel.send(`${user.username} se fue baneado!`);
};
