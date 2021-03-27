const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'links',
    aliases: ['invite', 'github', 'add'],
    description: 'Shows the links of the bot.',
    cooldown: 5,
    async execute(message) {
        const embed = new MessageEmbed()

            .setTitle(`All Available Links`)
            
            .setDescription(`[Github](https://github.com/PHANTOM-14/Snowflake-bot) | [Website](https://phantom-14.github.io/Snowflake-bot) | [Invite1](https://discord.com/oauth2/authorize?client_id=790572858434256916&scope=bot&permissions=956687457) | [Invite2](https://discord.com/oauth2/authorize?client_id=790572858434256916&scope=bot&permissions=8)
            \n Devloped by `+'`'+`! Phantom#1171 and _TheKaushikG_#5300`+'`'+` | Supported by Yuvii <3#9691 and SdZu#2732 along with KevinSidd#4136 and Layeeque#0001`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/790572858434256916/01276c3a3740814be3f0e7734d654753.webp?size=4096`)

            .setColor('BLUE')
            .setFooter("I am created with <3");

        message.channel.send(embed);

    }
}
