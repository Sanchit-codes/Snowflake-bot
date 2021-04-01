const { prefix } = require('../../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'commands',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['command'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			const embed = new MessageEmbed()
			embed
				.setTitle('Here\'s a list of all my commands')
				.setDescription("`" + commands.map(command => command.name).join(', ') + "`")
				.setFooter(`\nYou can send ${prefix}command [command name]\ to get info on a specific command!`)
				.setColor('#00FF00');


			return message.author.send(embed)
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}
		const cemd = new MessageEmbed();
		cemd
			.setTitle(`Informatiom about ${command.name}`)
			.setDescription(`**Aliases:** ${command.aliases.join(', ')}\n**Description:** ${command.description}\n**Usage:** ${prefix}${command.name} ${command.usage}\n**Cooldown:** ${command.cooldown || 3} second(s)`)
			.setFooter(`Used by - ` + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
			.setColor(`#2ffff9`)
		message.channel.send(cemd);
	},
};
