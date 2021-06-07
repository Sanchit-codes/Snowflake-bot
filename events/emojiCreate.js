const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'emojiCreate',
    once: false,
    execute(emoji) {
        guild = emoji.guild;
        const logch = db.get(`logch-${guild.id}`);
        const emd = new MessageEmbed();
        emd
            .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
            .setDescription(`An Emoji is Created with name ${emoji.name}.\n• ID - ${emoji.id}    • Is Animated - ${emoji.animated}\n[Emoji URL](${emoji.url})`)
            .setColor(guild.me.roles.highest.hexColor)
            .setTimestamp();
            if(!logch) return;
        guild.channels.cache.get(logch).send(emd);
    }

}