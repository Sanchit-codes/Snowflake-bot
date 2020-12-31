const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const DIG = require("discord-image-generation");


module.exports.run =async (bot, message, args) => {

        let av = message.author.displayAvatarURL({ dynamic: false, format: 'gif' });
        let img = await new DIG.Triggered().getImage(av);
        let attach = new Discord.MessageAttachment(img, "triggered.gif");;
        let msg = "I am triggered Nowww";
        message.channel.send(attach)
        message.channel.send(msg)
    }
    
        module.exports.help = {
        name: "trigger"
}