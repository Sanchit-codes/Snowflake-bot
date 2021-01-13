const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run =async (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle("Availabe Moderation commands")
    .addField('1. Nickname',"Usage- `s!nick <mention> <nickanme>` or `s!nick <mention>` to reset")
    .addField("2. Add Role", "Usage- `s!addrole <mention> <role-name or role-id>`")
    .addField("3. Remove Role", "Usage- `s!removerole <mention> <role-name or role-id>`")
    .addField("4. Slowmode", "Usage- `s!sm <time>`")
    .addField("5. Clear Messages", "Usage- `s!clear <messages>`")
    .addField("6. Embed Builder","Usage- `s!embed <color> <message>`")
    .addField("7. Spam","Usage- `s!spam <message>`")
    .setColor("#00FFFF")
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
    message.channel.send(embed);
}
module.exports.help = {
    name:"mod"
  }
  