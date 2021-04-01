module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        console.log(`Guilds: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}\n`);
        client.user.setActivity(`${client.users.cache.size} Users | Snowflake prefix`, { type: "WATCHING" });
	},
};