const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'welcomemsg',
    aliases: ['wmsg', 'setwmsg'],
    description: 'Setup the Welcome message to be posted..',

    async execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        guild = message.guild;
        if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permission!\n REQUIRED - MANAGE_SERVER");

        if (!args[0]) {
            content = 'Welcome to the Guild';
        } else {
            content = args.join(" ");
        }

        await db.set(`wmsg-${message.guild.id}`, content)
        const embed = new MessageEmbed()
            .setDescription(`You have been setted welcome message to\n`+'`'+content+'`')
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}