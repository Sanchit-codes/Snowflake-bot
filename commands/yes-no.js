
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if (!args[0])return message.channel.send("**'Please provide a question to reply!'**");

        const res = await (await fetch('http://yesno.wtf/api/')).json();
        
        const img = res.image;
        const embed = new MessageEmbed()
          .setTitle("My opinion about it is")
          .setImage(img)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM');
        message.channel.send(embed);
    

}  


module.exports.help = {
  name:"ask"
}
