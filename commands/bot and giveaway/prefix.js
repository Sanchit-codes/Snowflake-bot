
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'prefix',
    aliases: [' prefix'],
    description: 'Get the prefix of the bot',

    async execute(message, args, client) {
        message.channel.send(`Hello there! I hope you are having a great day :D \n> The Default Prefix is **sn!** and **Snowflake** also try sn!commands and sn!help\n`+'`Tip: You can change prefix in guild using **sn!setprefix** but still default will work`')
    }
}