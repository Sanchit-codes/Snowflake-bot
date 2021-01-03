const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run =async (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle("GiveAway Time")
    .addField("1. Start Command","Usage- `s!gstart <#channel> <time> <winners> <Prize>`")
    .addField("2. End Giveaway","Usage- `s!gend <message-id>`")
    .addField("3. Reroll Command","Usage- `s!greroll <message-id>`")
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('#00FFFF');

    message.channel.send(embed);
}
module.exports.help = {
    name:"giveaway"
  }
  