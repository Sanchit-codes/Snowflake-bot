module.exports = {
	name: 'say',
	aliases: ['msg'],
	description: 'To say a message through bot.',
	usage: ['text'],
	guildOnly: true,
	execute(message, args) {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to execute command.");
		let msg = message.content.slice(message.content.indexOf(args[0]), message.content.length);
		message.channel.send(msg);
		message.delete();
		
	},
};