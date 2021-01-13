const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {


    let msg = args.join(" ")
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    var i = 0;
    while (i <= 10) {
        message.channel.send(msg)
        i++;
    }
}


module.exports.help = {
    name: "spam"
}
