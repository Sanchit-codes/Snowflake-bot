const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'echo',
    aliases: ['spam'],
    description: 'Nothing to see here :D',
    cooldown: 5,
    async execute(message, args) {

        let msg = args.join(" ")
        if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == 730615970074329142) {

            var i = 0;
            while (i <= 4) {
                message.channel.send(msg)
                i++;
            }
        }

    }
}