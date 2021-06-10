const Discord = require("discord.js")
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
    name: 'gend',
    description: 'This ends a curent running giveaway in the server using message id',
    aliases: ['end', 'gdelete'],
    usage: ['message_id'],
    cooldown: 8,
    async execute(message, args, client) {


        if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return message.channel.send('Sorry! you don' + "'t" + ' have enough perms to execute it');
        }


        if (!args[0]) {
            return message.channel.send('Sorry! You have to use a valid message id!\nExample - *' + `${prefix}` + 'gend message_id*');
        }


        let giveaway =

            client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||

            client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);


        if (!giveaway) {
            return message.channel.send('Unable to find a giveaway for `' + args.join(' ') + '`.');
        }


        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })

            .then(() => {
                message.channel.send('Giveaway will end in less than ' + (client.giveawaysManager.options.updateCountdownEvery / 1000) + ' seconds...');
            })
            .catch((e) => {
                if (e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)) {
                    message.channel.send('This giveaway is already ended!');
                } else {
                    console.error(e);
                    message.channel.send('An error occured...');
                }
            });
    }
}