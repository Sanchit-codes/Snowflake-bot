const Discord = require('discord.js');
const moment = require("moment");

module.exports.run =async (bot, message, args) => {

    
require("moment-duration-format");
const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

console.log(duration);

    let serverembed = new Discord.MessageEmbed()
        .setColor("#00ff62")
        .addField('I am online from', duration);

    message.channel.send(serverembed);


}

    module.exports.help = {
        name: "uptime"
    }