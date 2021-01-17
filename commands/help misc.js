const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run =async (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle("Available Misc Commands")
    .addField("1. Avatar" , "Usage- `s!av or s!avatar <mention>`")
    .addField("2. Emoji Enlarge" , "Usage- `s!enlarge <emoji>`")
    .addField("3. Bot Invite" , "Usage- `s!invite`")
    .addField("4. Latency" , "Usage- `s!ping`")
    .addField("5. Server-info", "Usage- `s!serverinfo`")
    .addField("6. User-info" ,"Usage- `s!userinfo <mention>` or `s!whois <mention>`" )
    .addField("7. Uptime", "Usage- `s!uptime`")
    .addField("8. Away from keyboard", "Usage- `s!afk <reason>`")
    .addField("9. Bot Stats", "Usage- `s!stats`")
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor('#00FFFF');

message.channel.send(embed);
}
module.exports.help = {
name:"misc"
}
