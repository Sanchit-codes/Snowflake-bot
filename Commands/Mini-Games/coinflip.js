const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'coinflip',
    aliases: ['cf'],
    description: 'Heads or tails? Lets see.',
    cooldown: 5,
    async execute(message) {
        const img = await message.channel.send('*_Tossed a coin in air_*');
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
        embed
            .setTitle(':coin:  Coinflip  :coin:')
            .setDescription(`I flipped a coin for you, ${message.member}. It was **${result}**!`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/822858187384422430/8f0604aedc34d33d2f41113c312a588d.gif`)
            .setColor(message.guild.me.displayHexColor);


        img.edit(embed);
    }

}