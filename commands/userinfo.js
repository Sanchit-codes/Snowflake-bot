const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:Online:792348900858003476> Online",
        idle: "<a:aa_Idle_Status:792349681836359691> Idle",
        dnd: "<a:aa_DND_Status:792349907259490314> Do Not Disturb",
        offline: "<:OfflineStatus792350125095256095> Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:BotCheck:758956052573716520> Yes";
  } else {
    bot = "<:mdUsers:792348547135569940> No";
  }

            let embed = new Discord.MessageEmbed()
                .setAuthor(member.user.username)
                
                .setColor("#00ff00")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<:tick:792353974438461440> Nickname: ${member.nickname}` : "<a:RedTick:792354166663282728> None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<a:RedTick:792354166663282728> Not playing"}`,inline, true)
                .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<a:RedTick:792354166663282728> No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
                .setThumbnail("https://cdn.discordapp.com/attachments/756712077736935577/792353584292298802/mathmodelssn.jpg")
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }