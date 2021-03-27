const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
    name: 'affair',
    description: 'Watch yourself xD',
    usage: ['<mention>'],
    cooldown: 5,
    args: true,
    async execute(message, args) {
        target = message.mentions.users.first();
        let authorav = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        if (!target)
            return message.channel.send(`You have to mention someone :c`);
            let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
        try {
            const res = await fetch(`https://nekobot.xyz/api/imagegen?type=ship&user1=${authorav}&user2=${av}`);
            const img = (await res.json()).message;
            const embed = new MessageEmbed()
                .setTitle('Nothing To say xD ')
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