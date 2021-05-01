const db = require('quick.db')
const moment = require("moment");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'guildBanAdd',
    once: false,
    execute(guild , user) {
        const logch = db.get(`logch-${guild.id}`);
        const emd = new MessageEmbed();
        emd
            .setAuthor(user.name, user.displayAvatarURL({ dynamic: true }))
            .setDescription(`The user with user-id ${user.id} got banned from the Guild.`)
            .addField(`Joined At`, moment.utc(user.joinedAt).format('DD/MM/YY'))
            .setColor(guild.me.roles.highest.hexColor)
            .setFooter(`UserID - ${user.id}`)
            .setTimestamp()
        guild.channels.cache.get(logch).send(emd);
    }

}