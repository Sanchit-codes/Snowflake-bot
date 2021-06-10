const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nqnsetup',
    aliases: ['nqnstatus', 'npn', 'setnqn'],
    description: 'Setup whether NQN Module will work or not',

    async execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        guild = message.guild;
        if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permission!\n REQUIRED - MANAGE_SERVER");
        let reponse = args[0];
        content = 'disable';
        if (reponse.toLowerCase === 'enable') {
            var content = 'enable';
        } else if (reponse.toLowerCase === 'disable') {
            var content = 'disable';
        } else return message.inlineReply(`Command Denied\nReason - Only supported strings are enable or disable`);



        await db.set(`nqnstatus-${message.guild.id}`, content)
        const embed = new MessageEmbed()
            .setDescription(`You have been changed status of \`NQN\` Module to **${content}**\nYou can change it later on...`)
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}