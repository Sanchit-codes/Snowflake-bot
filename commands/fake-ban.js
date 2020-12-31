const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to be banned. :x:')
    let user = message.guild.member(message.mentions.users.first());
    let embed = new Discord.MessageEmbed();
    embed
    .setTitle("Sucessfully banned user.")
    .setDescription(user.user.username +" is banned")
    .setThumbnail("https://cdn.discordapp.com/attachments/793458074341343243/793458207007178773/tenor.gif")
    .setFooter("I dont think he is banned xD")
    .setColor("RANDOM")
    .setTimestamp
    message.channel.send(embed)
}
module.exports.help = {
    name: "forceban"
  }