const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'guildMemberRoleRemove',
    once: false,
    execute(member, role) {
        guild = member.guild;
        const logch = db.get(`logch-${guild.id}`);
        user = member.user;
        const emd = new MessageEmbed();
        emd
            .setAuthor(user.username, `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`)
            .setDescription(`A action on the user have been occured, ${user.username} lost a role`)
            .addField(`Role Removed`, role)
            .addField(`Role Info`, `Position: ${role.position} Color: ${role.hexColor} Mentionable: ${role.mentionable ? 'Yes' : 'No'}`)
            .setColor(`FF0000`)
            .setFooter(`UserID - ${user.id}`)
            .setTimestamp()
        guild.channels.cache.get(logch).send(emd);
    }

}