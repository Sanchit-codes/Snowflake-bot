const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'wpat',
    aliases: ['pat'],
    description: 'A pat but in anime way',
    usage: ['user/mention'],
    args: true,

    async execute(message, args, client) {
        let target = message.mentions.users.first();
        let user = message.author;
        const res = await fetch('https://nekos.life/api/v2/img/pat');
        const img = (await res.json()).url;
        const embed = new MessageEmbed();
        embed
            .setTitle(`${user.username} patted ${target.username}`)
            .setImage(img)
            .setFooter(message.member.displayName + ` • Powered by nekos.life`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}