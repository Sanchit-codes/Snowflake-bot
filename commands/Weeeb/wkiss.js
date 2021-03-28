const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'wkiss',
    aliases: ['kiss'],
    description: 'A kiss but in anime way',
    usage: ['user/mention'],
    args: true,

    async execute(message, args, client) {
        let target = message.mentions.users.first();
        let user = message.author;
        const res = await fetch('https://nekos.life/api/v2/img/kiss');
        const img = (await res.json()).url;
        const embed = new MessageEmbed();
        embed
            .setTitle(`${user.username} kissed ${target.username}`)
            .setImage(img)
            .setFooter(message.member.displayName + ` • Powered by nekos.life`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}