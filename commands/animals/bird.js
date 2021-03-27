const {MessageEmbed} = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'bird',
	aliases: ['brd'],
	description: 'A cute bird appears on your screen.',
	cooldown: 5,
	async execute(message) {
        const res = await fetch('http://shibe.online/api/birds');
      const img = (await res.json())[0];
      const embed = new MessageEmbed()
        .setTitle('Peskyyy Bird')
        .setImage(img)
        .setFooter(message.member.displayName +` • Powered by shibe.online`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);
    }
}