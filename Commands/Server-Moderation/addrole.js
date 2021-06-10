const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'role',
    aliases: ['addrole'],
    description: 'Add role to the user.',
    usage: ['mention role(name/id/mention)'],
    guildOnly: true,
    execute(message, args) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send("You don't have the permissions to use this command!");
        }

        else {

            if (!rMember)
                return message.channel.send("Couldn't find that user.");

            let role = args.join(" ").slice(23);
            if (!role)
                return message.channel.send("Specify a role!");

            let gRole = message.guild.roles.cache.find(roles => roles.name === role) || message.guild.roles.cache.find(roles => roles.id === role);
            if (!gRole)
                return message.channel.send("Couldn't find that role.");

            if (rMember.roles.cache.has(gRole.id))
                return message.channel.send("They already have that role.");

            else {
                rMember.roles.add(gRole.id).catch(console.error);
                const sembed = new MessageEmbed();
                sembed
                    .addField(`Added Role!`, `Sucessfully added role <@&${gRole.id}> to ${rMember}`)
                    .setFooter(message.author.tag + ` • Thanks for using!`, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor(userinfoget.displayHexColor);

                try {
                    message.channel.send(sembed);
                }
                catch (e) {
                    console.log(e.stack);
                }
            }
        }
    }
}