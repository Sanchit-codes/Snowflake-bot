const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
    name: 'change_my_mind',
    aliases: ['changemind'],
    description: 'Change my mind!!',
    usage: ['text'],
    cooldown: 5,
    args: true,
    async execute(message, args) {
        if (!args[0]) return message.channel.send("**'Please provide a message'**");
        let tweet = message.content.slice(message.content.indexOf(args[0]), message.content.length);
        if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

        try {
            const res = await fetch('https://nekobot.xyz/api/imagegen?type=changemymind&text=' + tweet);
            const img = (await res.json()).message;
            const embed = new MessageEmbed()
                .setTitle('Change My Mind')
                .setImage(img)
                .setFooter(message.member.displayName + ` • Powered by nekobot.xyz`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(message.guild.me.displayHexColor);
            message.channel.send(embed);
        } catch (err) {
            message.client.logger.error(err.stack);
            this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
        }
    }
}