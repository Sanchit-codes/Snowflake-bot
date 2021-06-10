const fs = require('fs');
const config = require('../../config.json')

module.exports = {
	name: 'reload',
	aliases: ['r'],
	description: 'Reloads a command',
	args: true,
	execute(message, args) {

		whitelist = config.whitelist;
		length = whitelist.length

		let var1 = 0;
		for (i = 0; i <= length; i++) {
			if (message.author.id === whitelist[i]) {
				var1++
			}
		}


		if (var1 < 1) return message.reply(`Only my devloper is allowed to use this command`);

		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
			console.log(`Command \`${command.name}\` was reloaded by ${message.author.tag}`)
		} catch (error) {
			console.error(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
		}
	},
};
