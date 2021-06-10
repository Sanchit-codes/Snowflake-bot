const {MessageEmbed} = require('discord.js');
const moment = require('moment');
module.exports = {
	name: 'serverinfo',
	aliases: ['si', 'guild'],
	description: 'Display info about this server.',
	async execute(message) {
		guild = message.guild;
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const emojis = message.guild.emojis.cache;
		const embed = new MessageEmbed()

			.setColor(guild.me.roles.highest.hexColor)
			.setTitle(`Guild Information`)

			.addField('__General Information__', [
				`**• Name:** ${message.guild.name}`,
				`**• ID:** ${message.guild.id}`,
				`**• Owner:** ${message.guild.owner.user.tag} (\`${message.guild.ownerID}\`)`,
				`**• Voice Region:** ${message.guild.region}`,
				`**• Maximum Member Limit:** ${message.guild.maximumMembers}`,
				`**• Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} (${moment(message.guild.createdTimestamp).fromNow()})`,
				'\u200b'
			])
			.addField('__Server Statistics__', [
				`**• Members:** ${message.guild.memberCount}`,
				`**• Channels:** ${message.guild.channels.cache.size}`,
				`**• Emojis:** ${emojis.size}`,
				`**• Roles:** ${roles.length}`,
				`**• AFK Channel ID:** ${message.guild.afkChannelID === null ? "None Set" : message.guild.afkChannelID}`,
				`**• AFK Timeout:** ${message.guild.afkTimeout + " seconds"}`,
				'\u200b'
			])
			.addField('__Highlights__', [
				`**• Boosts:** ${message.guild.premiumTier ? `Level ${message.guild.premiumTier}` : 'Level 0'} with ${message.guild.premiumSubscriptionCount || '0'} boosts`,
				`**• Explicit Filter:** ${message.guild.explicitContentFilter}`,
				`**• Verification Level:** ${message.guild.verificationLevel}`,
				`**• Features Unlocked:** ${message.guild.features || 'Nothing has unlocked yet'}`,
				'\u200b'
			])
			.setFooter(`Thanks for using Snowflake <3`)
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.setImage(message.guild.bannerURL({ size: 4096, dynamic: true }))


		message.channel.send({ embed: embed })
	},
};
