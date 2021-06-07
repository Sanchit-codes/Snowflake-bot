const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'voiceChannelJoin',
    once: false,
    execute(member, channel) {
        guild = member.guild;
        const logch = db.get(`logch-${guild.id}`);
        user = member.user;
        const emd = new MessageEmbed();
        emd
            .setAuthor(user.username, `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`)
            .setDescription(`${user.username} joined voice channel <#${channel.id}>`)
            .setColor(`00FF00`)
            .setFooter(`UserID - ${user.id}`)
            .setTimestamp();
            if(!logch) return;
        guild.channels.cache.get(logch).send(emd);
    }

}