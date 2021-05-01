const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'messageContentEdited',
    once: false,
    execute(message, oldContent, newContent) {
        guild = message.guild;
        const logch = db.get(`logch-${guild.id}`);
        const emd = new MessageEmbed();
        emd
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Message Sent in <#${message.channel.id}> got updated. || **[Jump to message](https://discord.com/channels/${guild.id}/${message.channel.id}/${message.id})**`)
            .addField(`Previous`, oldContent)
            .addField(`Updated`, newContent)
            .setColor(guild.me.roles.highest.hexColor)
            .setFooter(`UserID - ${message.author.id}`)
            .setTimestamp()
        guild.channels.cache.get(logch).send(emd);
    }

}