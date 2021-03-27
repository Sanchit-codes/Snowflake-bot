const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
    name: 'triggered',
    aliases:['trigger'],
    description: 'A api command powered by DIG .',
    usage: ['<mention>optional'],
    cooldown: 5,
    async execute(message, args) {
        target = message.mentions.users.first();

        if (!target)
            target = message.author;
        let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Triggered().getImage(av);
        let attach = new Discord.MessageAttachment(img, "triggered.gif");;
        let msg = "I am triggered Nowww";
        message.channel.send(attach)
        message.channel.send(msg)
    }
}
