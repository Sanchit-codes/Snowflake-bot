const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let servers = bot.guilds.cache.size;
    let users = bot.users.cache.size;
    const embed = new MessageEmbed()
        .setTitle("Snow-flake's Stats")
        .addField(" Username", "Snowflake#2611")
        .addField(" Unique ID", "`790572858434256916`")
        .addField(" Prefix", "s!(Not Case-Senstive)")
        .addField(" ServerCount", servers)
        .addField(" UserCount", users)
        .addField(" Library", "[Discord.js Version 12.5.1](https://discord.js.org/)")
        .addField(" Documentation", "[phantom-14.github.io](https://phantom-14.github.io/Snowflake-bot/)")
        .addField(" Invite", "[Click Me!](https://cutt.ly/snowflake-bot)")
        .setThumbnail("https://cdn.discordapp.com/attachments/793458074341343243/800014379285348372/snowflake.png")
        .setImage("https://cdn.discordapp.com/attachments/793458074341343243/799195274420682812/SnowFlake_Discord.png")
        .setColor("00FFFF")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
    message.channel.send(embed);
}
module.exports.help = {
    name: "stats"
}
