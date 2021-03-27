const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { prefix } = require('../../config.json');
const client = new Discord.Client();
module.exports = {
    name: 'stats',
    aliases: ['botinfo','info'],
    description: 'Shows the Stats of the bot.',
    cooldown: 5,
    async execute(message) {
        let servers = client.guilds.cache.size;
        let users = client.users.cache.size;
        guild = message.guild;
        const embed = new MessageEmbed()
            .setTitle("Snowflake's Stats")
            .setDescription('**Username** `Snowflake#2611` \n**UniqueID** `790572858434256916`\n**Prefix** `'+prefix+'` **Special Command** `Snowflake prefix`\n**Library [Discord.js Version 12.5.1](https://discord.js.org/)** \n**GitHub [Github Pages](https://phantom-14.github.io/Snowflake-bot/)**\n'+
            '\n **__Invites__**\n\n**[Invite1](https://cutt.ly/snowflake-bot)**  **[Invite2](https://discord.com/oauth2/authorize?client_id=790572858434256916&scope=bot&permissions=8)**\n'+
            '\n**__Devlopers and Supporters__**\n \nDevloped by `! Phantom#1171` and `_TheKaushikG_#5300` | Supported by `Yuvii <3#9691` and `SdZu#2732` along with `KevinSidd#4136` and `Layeeque#0001`'+
            '\n\n**__CPU Stats__**\n \n**Processor** `Intel Core i7 7700K 4.5GHz` \n**RAM** `3GB`\nMemory `10GB` \n**Uplink** `1 Gbit/s with unmetered bandwidth`')
            .setThumbnail("https://cdn.discordapp.com/attachments/793458074341343243/800014379285348372/snowflake.png")
            .setImage("https://cdn.discordapp.com/attachments/793458074341343243/799195274420682812/SnowFlake_Discord.png")
            .setColor(guild.me.roles.highest.hexColor)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();
        message.channel.send(embed);
    }
}