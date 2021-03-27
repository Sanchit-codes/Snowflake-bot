const { MessageEmbed } = require('discord.js');
const moment = require("moment");
module.exports = {
    name: 'uptime',
    aliases: ['online'],
    description: 'Shows the uptime of the bot.',
    cooldown: 5,
    async execute(message) {
        require("moment-duration-format");
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

        console.log(duration);

        let serverembed = new MessageEmbed()
            .setColor("#00ff62")
            .addField('I am online from', duration);

        message.channel.send(serverembed);


    }
}
