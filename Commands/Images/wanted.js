const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
    name: 'wanted',
    description: 'A api command powered by DIG .',
    usage: ['<mention>optional'],
    cooldown: 5,
    async execute(message, args) {
        target = message.mentions.users.first();

        if (!target)
            target = message.author;
        let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Wanted().getImage(av, `$`);
        let attach = new Discord.MessageAttachment(img, "wanted.png");;
        let msg = "I am finally Famous";
        message.channel.send(attach)
        message.channel.send(msg)
    }
}