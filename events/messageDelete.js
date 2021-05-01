const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'messageDelete',
    once: false,
    execute(message) {
        guild = message.guild;
        const logch = db.get(`logch-${guild.id}`);
        if(!message) return;
        const emd = new MessageEmbed();
        emd
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Message Sent in <#${message.channel.id}> got Deleted.`)
            .addField(`Message`, message)
            .setColor(guild.me.roles.highest.hexColor)
            .setFooter(`UserID - ${message.author.id}`)
            .setTimestamp()
        guild.channels.cache.get(logch).send(emd);
    }

}