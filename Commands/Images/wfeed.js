const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'wfeed',
    aliases: ['feed'],
    description: 'A feed but in anime way',
    usage: ['user/mention'],
    args: true,

    async execute(message, args, client) {
        let target = message.mentions.users.first();
        let user = message.author;
        const res = await fetch('https://nekos.life/api/v2/img/feed');
        const img = (await res.json()).url;
        const embed = new MessageEmbed();
        embed
            .setTitle(`${user.username} feeded ${target.username}`)
            .setImage(img)
            .setFooter(message.member.displayName + ` • Powered by nekos.life`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}