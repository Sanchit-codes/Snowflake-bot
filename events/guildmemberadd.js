const db = require('quick.db')
module.exports = {
    name: 'guildMemberAdd',
    once: true,
    execute(client) {

        client.on("guildMemberAdd", (member) => {
            guild = member.guild;
            const wmsg = db.get(`wmsg-${guild.id}`);
            const wch = db.get(`wch-${guild.id}`);
            guild.channels.cache.get(wch).send(`<@${member.user.id}> ${wmsg}`);
        });
    }
}