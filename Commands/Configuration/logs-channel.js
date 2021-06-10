const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'logschannel',
    aliases: ['logs', 'setlogs','setlog'],
    description: 'Setup the channel where welcome message will be posted',

    async execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        guild = message.guild;
        if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permission!\n REQUIRED - MANAGE_SERVER");

        if (!args[0]) return message.reply(`Mention a valid channel!!`)
        let content = message.mentions.channels.first().id;

        if (!content) return message.reply(`Mention a valid channel!!`)

        await db.set(`logch-${message.guild.id}`, content)
        const embed = new MessageEmbed()
            .setDescription(`You have been setted logs channel to <#${content}>`)
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}