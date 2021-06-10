const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
	name: 'enlarge',
	description: 'Get the enlarged version of provide emoji',
	aliases: ['magnify'],
    usage: ['emoji'],
    args: true,
	async execute(message, args) {
        emoji = args[0];
        let custom = Discord.Util.parseEmoji(emoji);
        let attach = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
        message.channel.send(attach);
        
    }
}