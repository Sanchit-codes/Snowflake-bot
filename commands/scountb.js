const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
     let servers = bot.guilds.cache.size;
     message.channel.send("I am in "+ servers)
}  


module.exports.help = {
  name:"owner"
}
