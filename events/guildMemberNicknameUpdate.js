const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'guildMemberNicknameUpdate',
    once: false,
    execute(member, oldNickname, newNickname) {
        guild = member.guild;
        const logch = db.get(`logch-${guild.id}`);
        user = member.user;

        if(!oldNickname){
            oldNickname = `None`;
        }
        if(!newNickname){
            newNickname = `None`;
        }
        const emd = new MessageEmbed();
        emd
            .setAuthor(user.username, `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`)
            .setDescription(`A action on the user have been occured, ${user.username} got new nickname`)
            .addField(`Previous`, oldNickname)
            .addField(`Updated`, newNickname)
            .setFooter(`UserID - ${user.id}`)
            .setColor(guild.me.roles.highest.hexColor)
            .setTimestamp()
        guild.channels.cache.get(logch).send(emd);
    }

}