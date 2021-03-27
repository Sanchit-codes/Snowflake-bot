const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
    name: 'beautiful',
    description: 'A api command powered by DIG .',
    usage: ['<mention>optional'],
    cooldown: 5,
    async execute(message, args) {
        target = message.mentions.users.first();

        if (!target)
            target = message.author;
        let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Beautiful().getImage(av);
        let attach = new Discord.MessageAttachment(img, "beautiful.png");;
        let msg = "This is beautiful";
        message.channel.send(attach)
        message.channel.send(msg)
    }
}