const { MessageEmbed } = require('discord.js');
var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient('key')

module.exports = {
    name: 'giphy',
    aliases: ['randomqoute'],
    description: 'Some words of wishdom to make your day',
    cooldown: 5,
    args: true,
    async execute(message, args) {
        let userinfoget =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.guild.member(message.author);

        const query = args.join(' ');
        const searchemd = new MessageEmbed();
        searchemd
            .setTitle("🔎 Searching on giphy...")
            .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/823223437769834506/giphy_1.gif`)
            .setColor(userinfoget.displayHexColor)
        let msg = await message.channel.send(searchemd);

        giphy.search('gifs', { "q": query }).then((response) => {
            var totalResponses = response.data.length;
            var responseIndex = Math.floor((Math.random() * 100) + 1) % totalResponses;
            var finalResponse = response.data[responseIndex]

            let embed = new MessageEmbed()
                .setTitle("🔎 Giphy Search result:")
                .setImage(finalResponse.images.fixed_height.url)
                .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/823223464982216724/source.gif`)
                .setColor(userinfoget.displayHexColor);

            msg.edit(embed);

        }).catch(() => {
            message.channel.send("Error finding gif...");
        })

    }
}