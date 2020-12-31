const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {

   
    const embed = new Discord.MessageEmbed()

        .setColor("#00ffff")
        .setTitle(message.guild.name + ` Server Stats`)
        .addField('📄 Channels', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Voice Channels | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Text Channels | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categories | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Voice Channels | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Text Channels | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categories`, true)
        .addField(':man: Members', `${message.guild.members.cache.filter(member => member.user.bot).size} Bots | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humans | ${message.guild.memberCount} Total Members | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% Bots | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humans`, true)
        .addField(':date: Guild Created At', message.guild.createdAt, true)
        .addField(":globe_with_meridians: Server Region", message.guild.region, true)
        .addField(`:keyboard: AFK Channel ID `, message.guild.afkChannelID === null ? "None Set" : message.guild.afkChannelID, true)
        .addField(`:keyboard: AFK Channel Timeout`, message.guild.afkTimeout + " seconds", true)
        .addField(`:id: Guild ID`, message.guild.id, true)
        .addField(`:man_in_tuxedo: Server Owner`, message.guild.owner, true)
        .addField(`:man_in_tuxedo: Server Owner ID`, message.guild.ownerID, true)
        .addField(`:closed_lock_with_key: Server Verification Level`, message.guild.verificationLevel, true)
        .addField(`:joystick: Roles Size`, message.guild.roles.cache.size, true)
        .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
        .setThumbnail(message.guild.iconURL())


    message.channel.send({ embed: embed })
    
}
               


module.exports.help = {
  name:"serverinfo"
}
