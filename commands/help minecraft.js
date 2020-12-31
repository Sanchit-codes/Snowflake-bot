const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run =async (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle("Availabe Minecraft commands")
    .addField("1. MineCraft UserID","Usage- `s!uuid <username>`")
    .addField("2. MineCraft Profile","Usage- `s!profile <uuid>`")
    .addField("3. MineCraft Server","Usage- `s!server <ip-add>`")
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('#00FFFF');

    message.channel.send(embed);
}
module.exports.help = {
    name:"minecraft"
  }
  