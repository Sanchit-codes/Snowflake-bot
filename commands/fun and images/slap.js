const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
    name: 'slap',
    description: 'A api command powered by DIG .',
    usage: ['<mention>'],
    cooldown: 5,
    async execute(message, args) {
        target = message.mentions.users.first();
        let authorav = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        if (!target)
            return message.channel.send(`You have to mention someone :c`);

        let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Batslap().getImage(authorav, av);
        let attach = new Discord.MessageAttachment(img, "beautiful.png");;
        message.channel.send(attach)

    }
}