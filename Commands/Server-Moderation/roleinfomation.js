const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'roleinfo',
    aliases: ['addrole'],
    description: 'Add role to the user.',
    usage: ['mention role(name/id/mention)'],
    guildOnly: true,
    execute(message, args) {
        let role = args[0];
        if (!role)
            return message.channel.send("Specify a role!");

        let gRole = message.guild.roles.cache.find(roles => roles.name === role) || message.guild.roles.cache.find(roles => roles.id === role);
        if (!gRole)
            return message.channel.send("Couldn't find that role.");

        let membersWithRole = gRole.members.map(m => m.user);
        let color = gRole.hexColor;
        let hoisted = gRole.hoist;
        let id = gRole.id;
        let mentionable = gRole.mentionable;
        let position = gRole.position;
        const emd = new MessageEmbed();
        emd
            .setTitle(`Information about role ${gRole.name}`)
            .setDescription(`• RoleID - ${id}\n• RoleColor - ${color}\n• Hoisted - ${hoisted}\n• Mentionable - ${mentionable}\n• Position - ${position}\n• Members with Role\n${membersWithRole}`)
            .setFooter(message.member.displayName + ` • Thanks for using!`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(color)
        message.channel.send(emd)

    }

}