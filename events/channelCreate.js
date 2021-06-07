const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'channelCreate',
    once: false,
    execute(channel) {
        guild = channel.guild;
        const logch = db.get(`logch-${guild.id}`);
        const emd = new MessageEmbed();
        emd
        .setAuthor(guild.name, guild.iconURL({dynamic: true}))
            .setDescription(`A new updates in the channels have been noticed.\n**Channel Created <#${channel.id}> with channel Id ${channel.id}.**`)
            .setColor(guild.me.roles.highest.hexColor)
            .setTimestamp();
            if(!logch) return;
        guild.channels.cache.get(logch).send(emd);
    }

}