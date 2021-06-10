const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'pikachu',
    aliases: ['pika'],
    description: 'Pika Pikachu',
    cooldown: 5,
    async execute(message) {
        try {
            const res = await fetch('https://some-random-api.ml/img/pikachu');
            const img = (await res.json()).link;
            const embed = new MessageEmbed()
                .setTitle('*Pika Pika*')
                .setImage(img)
                .setFooter(message.member.displayName +` • Powered by some-random-api`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(message.guild.me.displayHexColor);
            message.channel.send(embed);
        } catch (err) {
            message.client.logger.error(err.stack);
            this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
        }
    }
}
