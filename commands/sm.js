const Discord = require("discord.js");

module.exports.run =async (bot, message, args ) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have permission to use Slowmode");
    if (!args[0])
          return message.channel.send(
            `You did not specify the time in seconds you wish to set this channel's slow mode too!`
          );
        if (isNaN(args[0])) return message.channel.send(`**That is not a number!**`);
      
        message.channel.setRateLimitPerUser(args[0]);
        message.channel.send(
          `Set the slowmode of this channel to **${args[0]}** seconds`);
        
      
    }
    
    module.exports.help = {
        name: "sm"
    }