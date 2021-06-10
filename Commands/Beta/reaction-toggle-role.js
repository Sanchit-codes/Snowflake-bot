const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reaction-role',
    aliases: ['rrtoggle', 'rr-role', 'setrole'],
    description: 'Setup the message on which reaction will be added',

    async execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        guild = message.guild;
        msgid = db.get(`rrmsg-${message.guild.id}`)

        let emoji = args[0];

        if (!emoji) return message.reply(`Please Provide an emoji`)

        let role = args.slice(1).join(" ");
            if (!role)
                return message.channel.send("Specify a role!");

            let gRole = message.guild.roles.cache.find(roles => roles.name === role) || message.guild.roles.cache.find(roles => roles.id === role);
            if (!gRole)
                return message.channel.send("Couldn't find that role.");

        await db.set(`rr-role${emoji.id}`, gRole.id)
        await db.set(`rr-role-${msgid}`, emoji.id)
        const embed = new MessageEmbed()
            .setDescription(`You have toggled <@&${gRole.id}> to emoji ${emoji}`)
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}