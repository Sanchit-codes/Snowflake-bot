const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const DIG = require("discord-image-generation");


module.exports.run =async (bot, message, args) => {

        let av = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Wanted().getImage(av, `$`);
        let attach = new Discord.MessageAttachment(img, "wanted.png");;
        let msg = "I am finally Famous";
        message.channel.send(attach)
        message.channel.send(msg)
    }
    
        module.exports.help = {
        name: "wanted"
}