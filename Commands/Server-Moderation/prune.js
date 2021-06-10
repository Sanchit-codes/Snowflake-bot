const Discord = require("discord.js")
const MessageEmbed = require('discord.js')
module.exports = {
	name: 'prune',
	aliases: ['purge','clear'],
	description: 'Deletes messages in current channel.',
	usage: ['args'],
	guildOnly: true,
	execute(message, args) {
		let userinfoget =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.guild.member(message.author);

		if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to clear messages.");


		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('That doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('You need to input a number less than 100');
		}

		message.channel.bulkDelete(amount, true).then(deletedMessages => {

			var botMessages = deletedMessages.filter(m => m.author.bot);
			var userPins = deletedMessages.filter(m => m.pinned);

			const embed = new Discord.MessageEmbed()
				.setTitle(`Purged Messages`)
				.setColor(userinfoget.displayHexColor)
				.setFooter(message.author.tag + ` • Thanks for using!`, message.author.displayAvatarURL({ dynamic: true }))
				.setTimestamp()
				.setDescription(`Bot Messages Purged ${botMessages.size} \nUser Pins Purged ${userPins.size} \nTotal Messages Purged ${deletedMessages.size}.`)

			message.channel.send(embed);
		}).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
}