const { MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'set-status',
    aliases: ['ss'],
    description: 'Main function to set the bot\'s status',
    cooldown: 5,
    async execute(message, args) {

        whitelist = config.whitelist;
        length = whitelist.length

        let var1 = 0;
        for (i = 0; i <= length; i++) {
            if (message.author.id === whitelist[i]) {
                var1++
            }
        }

        if (var1 < 1) return message.reply(`Only my devloper is allowed to use this command`);

        let type = args[0];
        if (!type) return message.channel.send("What am I doing in Status can you tell meh....");
        let status  = message.content.slice(message.content.indexOf(args[1]), message.content.length);
        if(!status) return message.lineReply(`Hey, I need something to put in my status..`);
        message.client.user.setActivity(status, { type: `${type}` });
        message.lineReplyNoMention(`Ok changed mah status to dis \`${status}\``)
        console.log(`My status to \`${type , status}\` was changed by ${message.author.tag}`)


    }

}
