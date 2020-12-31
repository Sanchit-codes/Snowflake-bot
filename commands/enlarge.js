
const Discord = require("discord.js");

module.exports.run = async ( bot, message, args) => {
    
    const emoji = args[0];
    if (!emoji) return message.channel.send("No emoji provided!");

    let custom = Discord.Util.parseEmoji(emoji);
    const embed = new Discord.MessageEmbed()
    .setTitle(`Enlarged version of ${emoji}`)
    .setColor("#FFFF00");

    
        embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
        return message.channel.send(embed);
    

}

module.exports.help = {
    name: "enlarge"
};