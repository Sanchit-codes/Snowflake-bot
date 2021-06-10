const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
    name: 'question',
    aliases: ['ask'],
    description: 'A similar command as 8ball but in GIF form.',
    usage: ['<mention>optional'],
    cooldown: 5,
    async execute(message, args) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        const question = args.join(' ');
        if (!question) return message.channel.send("**Please provide a Question!**");
        const res = await (await fetch('http://yesno.wtf/api/')).json();

        const img = res.image;
        const embed = new MessageEmbed()
        .setTitle(`Asked by ${ message.author.tag }`)
        .setColor(userinfoget.displayHexColor)
        .setDescription(`Question Asked: ${question}\n ***My apinion is***`)
        .setImage(img)
        .setTimestamp()
        .setFooter(`Thanks for using Snowflake`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/823602095374073856/107716787-yes-no-word-text-on-talk-shape-green-and-red-color-vector-illustration-speech-bubble-on-wh.png`)
        message.channel.send(embed);
    }
}