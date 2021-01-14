const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run =async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setTitle('Currently Available Categories')
        .addField("Don't Have Nitro?", '**Good News! Now  the bot have `NQN` Features just like NQN you can use animated emotes. Make sure that bot have `Manage Webhooks` Perm**' )
        .setImage("https://cdn.discordapp.com/attachments/793458074341343243/799195274420682812/SnowFlake_Discord.png")
        .addField('**Moderation**', 'Some moderation commands like `nick` , `addrole` etc')
        .addField('**Minecraft**', 'Use this module to get some info about mc player and servers')
        .addField('**Misc**', 'Commands like serverinfo , userinfo')
        .addField('**Fun and Images**', 'This module is the MAIN module of the bot. It includes various fun commands')
        .addField('**GiveAway**', 'Feeling to give-away something Go ahead then')
        .addField("To get further information", '***Use s!<category> eg `s!fun`***' )

        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('#00FFFF');
      message.channel.send(embed);
}

module.exports.help = {
    name:"help"
  }
  