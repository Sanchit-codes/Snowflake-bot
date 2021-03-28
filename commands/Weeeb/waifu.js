const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'wwaifu',
    aliases: ['waifu'],
    description: 'An waifu but in anime way',

    async execute(message, args, client) {
        let user = message.author;
        const res = await fetch('https://nekos.life/api/v2/img/waifu');
        const img = (await res.json()).url;
        const embed = new MessageEmbed();
        embed
            .setTitle(`${user.username} here is your waifu!`)
            .setImage(img)
            .setFooter(message.member.displayName + ` • Powered by nekos.life`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}