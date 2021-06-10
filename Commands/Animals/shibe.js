const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'shibe',
    aliases: ['shiba'],
    description: 'A cute shiba appears on your screen.',
    cooldown: 5,
    async execute(message) {
        const res = await fetch('http://shibe.online/api/shibes');
        const img = (await res.json())[0];
        const embed = new MessageEmbed()
            .setTitle('🐶  Hemlo Bois  🐶')
            .setImage(img)
            .setFooter(message.member.displayName +` • Powered by shibe.online`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}