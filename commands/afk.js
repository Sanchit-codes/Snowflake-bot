const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports.run =async (bot, message, args) => {

        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`You have been set to afk\n**Reason :** ${content}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)                
    
}

module.exports.help = {
    name:"afk"
  }