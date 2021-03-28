const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'echo',
    aliases: ['spam'],
    description: 'Nothing to see here :D',
    cooldown: 5,
    async execute(message, args) {

        let msg = args.join(" ")
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        var i = 0;
        while (i <= 5) {
            message.channel.send(msg)
            i++;
        }
    }
}