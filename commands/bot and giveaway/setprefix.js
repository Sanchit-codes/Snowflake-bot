const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'setprefix',
    aliases: ['changeprefix'],
    description: 'Change the prefix in the current guild!',
    args: true,
    usage: ['newprefix'],

    async execute(message, args, client) {
        if (!message.member.hasPermission('MANAGE_SERVER') && !message.member.roles.cache.some((r) => r.name === "Administration")) {
            return message.channel.send('Sorry! You need to have the `manage_server` permissions to start change bot prefix.');
        }
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        guild = message.guild;
        content = args.join(" ");

        await db.set(`gprefix-${message.guild.id}`, content)
        const embed = new MessageEmbed()
            .setDescription(`You have setted prefix to ${content}`)
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}
