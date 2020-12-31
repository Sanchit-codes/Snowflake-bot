const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {

      if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You do not have permission to change the bot's nickname");
      if (!message.guild.member(bot.user).hasPermission('MANAGE_NICKNAMES')) return message.reply('Sorry, i dont have the perms to do this cmd i need MANAGE_NICKNAMES. :x:')
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to change the users nickname. :x:')
      let user = message.guild.member(message.mentions.users.first());
      let author = user.roles.highest.position;
      let target = message.member.roles.highest.position;
      if (author > target ) return message.reply('I cant change that members nickname. They are the same level as you or higher. :x:');
      let newusername = args.slice(1).join(' ')
      if (newusername.length < 1) {
        message.guild.members.cache.get(user.user.id).setNickname(user.user.username);
        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setFooter("Ignore error bot is still under-devlopement")
        .addField("Nickname reseted successfully! :white_check_mark:");
        
        message.reply({embed})
        return;
      }
      message.guild.members.cache.get(user.user.id).setNickname(newusername);
        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .addField("Username set successfully!", newusername + " is now the nickname for " + user.user.username + " :white_check_mark:");
        message.reply({embed})
    }


module.exports.help = {
    name: "nick"
}