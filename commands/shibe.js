const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.run =async (bot, message, args) => {
		
    
        const res = await fetch('http://shibe.online/api/shibes');
        const img = (await res.json())[0];
        const embed = new MessageEmbed()
          .setTitle('🐶  Hemlo Bois  🐶')
          .setImage(img)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
}

        module.exports.help = {
        name: "shibe"
}