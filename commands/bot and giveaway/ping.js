const {MessageEmbed} = require('discord.js');
module.exports = {
	name: 'ping',
	aliases: ['latency'],
	description: 'Shows the Latency of the bot.',
	cooldown: 5,
	async execute(message) {
		guild = message.guild;
		const msg = await message.channel.send("Pinging...");
		const Embed = new MessageEmbed()
		Embed
		  .setTitle("Pong!")
		  .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
		  .setDescription(
			` Latency is **${Math.floor(
			  msg.createdTimestamp - message.createdTimestamp
			)}ms**\n API Ping is **${Math.round(message.client.ws.ping)}ms**`
		  )
		  .setFooter("Thanks for supporting us!")
		  .setColor(guild.me.roles.highest.hexColor);
		  
		msg.edit(Embed);
		msg.edit("\u200b");
	  }  
	  
	
};
