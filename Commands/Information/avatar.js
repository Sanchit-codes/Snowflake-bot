const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp', 'av'],
	async execute(message, args) {
		let userinfoget =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.guild.member(message.author);

		let msg = await message.channel.send('_Generating avatar_...');

        target = message.mentions.users.first();

        if (!target)
            target = message.author;
        let avatarURL = target.displayAvatarURL({
            size: 4096,
            dynamic: true
			
        });
		av2 = target.displayAvatarURL({
            size: 512,
            dynamic: true,
			format: 'png'
		});
		av3 = target.displayAvatarURL({
            size: 512,
            dynamic: true,
			format: 'gif'
		});

		const embed = new MessageEmbed()
			.setImage(avatarURL)
			.setColor(userinfoget.displayHexColor)
			.setTitle(`**Avatar of ${target.username} **`)
			.setFooter(`Thanks for using Snowflake <3`)
			.setTimestamp()
			.setDescription("[**PNG**](" + av2 + ")" + " | [**GIF**](" + av3 + ")" + " ||\ [**WEBP**](" + avatarURL + ")");

		message.channel.send(embed);

		msg.delete();

	}








}