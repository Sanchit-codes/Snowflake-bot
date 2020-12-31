const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to clear messages.");

            console.log("purging messages")
    
            const amount = parseInt(args[0]) + 1;
    
            if (isNaN(amount)) {
                return message.reply('that doesn\'t seem to be a valid number.');
            } else if (amount <= 1 || amount > 100) {
                return message.reply('you need to input a number between 1 and 99.');
            }
    
            message.channel.bulkDelete(amount, true).then(deletedMessages => {
              
                var botMessages = deletedMessages.filter(m => m.author.bot);
                var userPins = deletedMessages.filter(m => m.pinned);
                var userMessages = deletedMessages.filter(m => !m.author.bot);
    
                const embed = new Discord.MessageEmbed()
                    .setTitle("Success")
                    .setColor(0x00AE86)
                    .setFooter("Froze is made with <3")
                    .setThumbnail("https://images.app.goo.gl/Tg9gncoJhXaCCgwT6")
                    .setTimestamp()
                    .setURL("https://github.com/phantomdev-github/Resources/tree/master/Discord%20Bots/Guardian")
                    .addField("Bot Messages Purged", botMessages.size, false)
                    .addField("User Pins Purged", userPins.size, false)
                    .addField("User Messages Purged", userMessages.size, false)
                    .addField("Total Messages Purged", deletedMessages.size, false);
    
                message.channel.send(embed);
            }).catch(err => {
                console.error(err);
                message.channel.send('there was an error trying to prune messages in this channel!');
            });
        },

    


module.exports.help = {
  name:"clear"
}
