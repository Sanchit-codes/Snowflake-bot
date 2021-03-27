const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
    name: 'rip',
    description: 'A api command powered by DIG .',
    usage: ['<mention>optional'],
    cooldown: 5,
    async execute(message, args) {
        target = message.mentions.users.first();

        if (!target)
            target = message.author;
        let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Rip().getImage(av);
        let attach = new Discord.MessageAttachment(img, "rip.png");;
        let msg = "R.I.P ";
        message.channel.send(attach)
        message.channel.send(msg)
    }
}