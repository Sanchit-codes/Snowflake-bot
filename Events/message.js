const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'message',
    once: false,
    async execute(message) {
        guild = message.guild;
        if (message.channel.type === 'dm') return;
        if (db.has(`afk-${message.author.id}+${message.guild.id}`)) {
            const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
            await db.delete(`afk-${message.author.id}+${message.guild.id}`)
            message.reply(`Welcome back!`)
        }
        if (message.mentions.members.first()) {
            if (db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
                message.channel.send(message.mentions.members.first().user.tag + " is afk for " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
            }
        }

        const chatchannel = db.get(`cbch-${message.guild.id}`)
        if (!chatchannel) return;
        if (!message) throw new Error("Error. No message provided")
        if (message.author.bot) return;
        if (!message.guild) return;
        const gprefix = db.get(`gprefix-${message.guild.id}`);
        const prefixes = ['snowflake', 'sn!', gprefix];
        const prefix = prefixes.find(p => message.content.toLowerCase().startsWith(p));
        if (message.content.toLowerCase().startsWith(prefix)) return;
        if (message.channel.id != chatchannel) return;
        errrep = 'none'
        const res = await fetch(`https://api.udit.gq/api/chatbot?message=${message}[&name=Snowflake&user=${message.author.id}&gender=FEMALE]`).catch(err => {
        errrep = `No words :zipper_mouth:`; 
        });
        if(errrep === 'No words :zipper_mouth:')return message.lineReplyNoMention(errrep);
        
        const response = await res.json().catch(e => {
            throw new Error(`Ran into an Error. ${e}`);
        });
        const final_response = response.message.replace('CleverChat', 'Snowflake').replace('male', 'Female');
        message.lineReplyNoMention(final_response)
    }

}