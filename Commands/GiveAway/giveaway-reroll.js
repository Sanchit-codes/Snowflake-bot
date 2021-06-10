const Discord = require("discord.js")
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
    name: 'greroll',
    description: 'This Starts a giveaway in a mentioned channel',
    aliases: ['reroll', 'rr'],
    usage: ['#channel time winners prize'],
    cooldown: 1,
    async execute(message, args, client) {


        if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return message.channel.send('Sorry! you don' + "'t" + ' have enough perms to execute it');
        }


        if (!args[0]) {
            return message.channel.send('Sorry! You have to use a valid message id!\nExample - *'+`${prefix}`+'greroll message_id*');
        }


        let giveaway =

            client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||

            client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);


        if (!giveaway) {
            return message.channel.send('Unable to find a giveaway for `' + args.join(' ') + '`.');
        }


        client.giveawaysManager.reroll(giveaway.messageID)
            .then(() => {

                message.channel.send('Giveaway rerolled!');
            })
            .catch((e) => {
                if (e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)) {
                    message.channel.send('This giveaway is not ended!');
                } else {
                    console.error(e);
                    message.channel.send('An error occured...');
                }
            });

    }
}