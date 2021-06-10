const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reaction-message',
    aliases: ['rrmsg', 'rr-message', 'setmessage'],
    description: 'Setup the message on which reaction will be added',

    async execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        guild = message.guild;
        if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permission!\n REQUIRED - MANAGE_SERVER");


        let content = args[0];

        if (!content) return message.reply(`mention a valid channel!!`)

        await db.set(`rrmsg-${message.guild.id}`, content)
        const embed = new MessageEmbed()
            .setDescription(`You have been setted reaction message to [This Message](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${content})`)
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}