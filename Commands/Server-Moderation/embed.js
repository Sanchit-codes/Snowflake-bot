const Discord = require("discord.js")
module.exports = {
    name: 'embed',
    aliases: ['emd'],
    description: 'To say a embed message through bot.',
    usage: ['text'],
    guildOnly: true,
    execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to execute command.");
        let color = args[0];
        if (!color) return message.channel.send("No color provided!");
        let msg = message.content.slice(message.content.indexOf(args[1]), message.content.length);

        if (!msg) return message.channel.send("No message provided!");


        let emb = new Discord.MessageEmbed()

            .setColor(color)
            .setDescription(msg)
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL)
        message.channel.send(emb)

        message.delete();
    }
}