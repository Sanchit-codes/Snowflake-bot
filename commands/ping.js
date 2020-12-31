const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const msg = await message.channel.send("Pinging...");
  const Embed = new Discord.MessageEmbed()
  Embed
    .setTitle("Pong!")
    .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
    .setDescription(
      ` Latency is **${Math.floor(
        msg.createdTimestamp - message.createdTimestamp
      )}ms**\n API Ping is **${Math.round(message.client.ws.ping)}ms**`
    )
    .setFooter("Isn't that good :D")
    .setColor('RANDOM');
    
  msg.edit(Embed);
  msg.edit("\u200b");
}  


module.exports.help = {
  name:"ping"
}
