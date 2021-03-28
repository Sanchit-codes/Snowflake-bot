const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');
const api = 'AIzaSyDurAXSQnhtfO_IUxwov_jMEmG26ht8_2E';
const searcher = new YTSearcher(api);
module.exports = {
    name: 'ytchannel',
    aliases: ['channel', 'ytch'],
    description: 'Browse YT for channels.',
    cooldown: 10,
    args: true,
    async execute(message, args) {
        const searchemd = new MessageEmbed();
        searchemd
        .setTitle("🔎 Searching on Youtube...")
        .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/822872549507203072/6c7a2d80f661c4455e6ce8bc14565046.gif`)
        .setColor(`FF0000`)

        try {
            if (!args[0]) return message.channel.send(searchemd);

            let msg = await message.channel.send(searchemd);

            searcher.search(args.join(' '), { type: 'channel' }).then(info => {
                if (!info.first) {
                    let embed2 = new Discord.MessageEmbed()
                        .setDescription("I couldn't find anything on Youtube with your query!")
                        .setColor('FF5757');
                    return msg.edit(embed2);
                }
                let embed = new Discord.MessageEmbed()
                    .setTitle("🔎 Youtube Channel result:")
                    .setDescription("`Best result:`\n "+`[${info.first.title}](${info.first.url})\n`  + "**Description**\n " + info.first.description)
                    .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/822872516967530506/Casey_Youtube_GIF.0.gif`)
                    .setColor(`FF0000`);
                    
                msg.edit(embed);
            });

        } catch (err) {
            return message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Something went wrong..."
                }
            })
        }

    }
}