const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'dog',
    aliases: ['woof','doggo'],
    description: 'A majestic doggo appears on your screen.',
    cooldown: 5,
    async execute(message) {
        try {
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            const img = (await res.json()).message;
            const embed = new MessageEmbed()
                .setTitle('🐶  Woof!  🐶')
                .setImage(img)
                .setFooter(message.member.displayName + ` • Powered by dog.ceo`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(message.guild.me.displayHexColor);
            message.channel.send(embed);
        } catch (err) {
            message.client.logger.error(err.stack);
            this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
        }
    }
}