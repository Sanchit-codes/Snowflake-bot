const { Discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'userinfo',
	aliases: ['ui', 'whois'],
	description: 'Display info about yourself.',
	execute(message, args, client) {

		guild = message.guild;
		let inline = true
		let resence = true
		const status = {
			online: "<:Online:792348900858003476> Online",
			idle: "<a:aa_Idle_Status:792349681836359691> Idle",
			dnd: "<a:aa_DND_Status:792349907259490314> Do Not Disturb",
			offline: "<:OfflineStatus792350125095256095> Offline/Invisible"
		}

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
		let target = message.mentions.users.first() || message.author
		if (!args[0]) {
			url = message.author.displayAvatarURL({ dynamic: true, size: 4096 });
		}
		else {
			target = message.mentions.users.first();
			url = target.displayAvatarURL({ dynamic: true, size: 4096 })
		}

		if (member.user.bot === true) {
			bot = "<:BotCheck:758956052573716520> Yes";
		} else {
			bot = "<:mdUsers:792348547135569940> No";
		}
		var permissions = [];

		if (member.hasPermission("ADMINISTRATOR")) {
			permissions.push("Administrator");
		}

		if (member.hasPermission("CREATE_INSTANT_INVITE")) {
			permissions.push("Create Invite");
		}

		if (member.hasPermission("KICK_MEMBERS")) {
			permissions.push("Kick Members");
		}

		if (member.hasPermission("BAN_MEMBERS")) {
			permissions.push("Ban Members");
		}

		if (member.hasPermission("MANAGE_CHANNELS")) {
			permissions.push("Manage Channels");
		}

		if (member.hasPermission("MANAGE_GUILD")) {
			permissions.push("Manage Server");
		}

		if (member.hasPermission("ADD_REACTIONS")) {
			permissions.push("Add Reaction");
		}

		if (member.hasPermission("VIEW_AUDIT_LOG")) {
			permissions.push("View Audit Log");
		}

		if (member.hasPermission("PRIORITY_SPEAKER")) {
			permissions.push("Priority Speaker");
		}

		if (member.hasPermission("STREAM")) {
			permissions.push("Stream");
		}

		if (member.hasPermission("VIEW_CHANNEL")) {
			permissions.push("View Channel");
		}

		if (member.hasPermission("SEND_MESSAGES")) {
			permissions.push("Send Messages");
		}

		if (member.hasPermission("SEND_TTS_MESSAGES")) {
			permissions.push("Send TTS Messages");
		}

		if (member.hasPermission("MANAGE_MESSAGES")) {
			permissions.push("Manage Messages");
		}

		if (member.hasPermission("EMBED_LINKS")) {
			permissions.push("Embed Link");
		}

		if (member.hasPermission("ATTACH_FILES")) {
			permissions.push("Attach Files");
		}

		if (member.hasPermission("READ_MESSAGE_HISTORY")) {
			permissions.push("Read Message History");
		}

		if (member.hasPermission("MENTION_EVERYONE")) {
			permissions.push("Mention Everyone");
		}

		if (member.hasPermission("USE_EXTERNAL_EMOJIS")) {
			permissions.push("Use External Emojis");
		}

		if (member.hasPermission("VIEW_GUILD_INSIGHTS")) {
			permissions.push("View Server Insights");
		}

		if (member.hasPermission("CONNECT")) {
			permissions.push("Connect");
		}

		if (member.hasPermission("SPEAK")) {
			permissions.push("Speak");
		}

		if (member.hasPermission("MUTE_MEMBERS")) {
			permissions.push("Mute Members");
		}

		if (member.hasPermission("DEAFEN_MEMBERS")) {
			permissions.push("Deafen Members");
		}

		if (member.hasPermission("MOVE_MEMBERS")) {
			permissions.push("Move Members");
		}

		if (member.hasPermission("USE_VAD")) {
			permissions.push("Use Voice Activity");
		}

		if (member.hasPermission("CHANGE_NICKNAME")) {
			permissions.push("Change Nickname");
		}

		if (member.hasPermission("MANAGE_NICKNAMES")) {
			permissions.push("Manage Nickname");
		}

		if (member.hasPermission("MANAGE_ROLES")) {
			permissions.push("Manage Roles");
		}

		if (member.hasPermission("MANAGE_WEBHOOKS")) {
			permissions.push("Manage Webhooks");
		}

		if (member.hasPermission("MANAGE_EMOJIS")) {
			permissions.push("Manage Emojis");
		}
		let userinfoget =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.guild.member(message.author);

		let embed = new MessageEmbed()
			.setAuthor(member.user.username)

			.setColor(userinfoget.displayHexColor)
			.addField("Full Username", `${member.user.tag}`, inline)
			.addField("ID", member.user.id, inline)
			.addField("Nickname", `${member.nickname !== null ? `<:tick:792353974438461440> Nickname: ${member.nickname}` : "<a:RedTick:792354166663282728> None"}`, true)
			.addField("Bot", `${bot}`, inline, true)
			.addField("Status", `${status[member.user.presence.status]}`, inline, true)
			.addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<a:RedTick:792354166663282728> Not playing"}`, inline, true)
			.addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<a:RedTick:792354166663282728> No Roles"}`, true)
			.addField("Joined Discord At", member.user.createdAt)
			.addField('Member Permissions', [
                `${permissions.join(", ")}`,
                `\u200b`
            ]) 
			.setThumbnail(url)
			.setFooter(`Information about ${member.user.username}`)
			.setTimestamp()

		message.channel.send(embed);

		message.delete();
	}
}
