const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run =async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setTitle('Currently Available Categories')
        .setImage("https://cdn.discordapp.com/attachments/756712077736935577/792353584292298802/mathmodelssn.jpg")
        .addField('**Moderation**', 'Some moderation commands like `nick` , `addrole` etc')
        .addField('**Minecraft**', 'Use this module to get some info about mc player and servers')
        .addField('**Misc**', 'Commands like serverinfo , userinfo')
        .addField('**Fun and Images**', 'This module is the MAIN module of the bot. It includes various fun commands')
        .addField("To get further information", '***Use s!__module__***')

        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('#00FFFF');
      message.channel.send(embed);
}

module.exports.help = {
    name:"help"
  }
  