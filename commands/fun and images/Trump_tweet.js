const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'trump_tweet',
    aliases: ['tweet'],
    description: 'What did trump tweeted ',
    usage: ['text'],
    cooldown: 5,
    async execute(message, args) {
        if (!args[0]) return message.channel.send("**'Please provide a message to tweet'**");
        let tweet = message.content.slice(message.content.indexOf(args[0]), message.content.length);
        if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

        try {
            const res = await fetch('https://nekobot.xyz/api/imagegen?type=trumptweet&text=' + tweet);
            const img = (await res.json()).message;
            const embed = new MessageEmbed()
                .setTitle(':flag_us:  Trump Tweet  :flag_us: ')
                .setImage(img)
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(message.guild.me.displayHexColor);
            message.channel.send(embed);
        } catch (err) {
            message.client.logger.error(err.stack);
            this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
        }
    }
}