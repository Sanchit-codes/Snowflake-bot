const Discord = require("discord.js")
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
    name: 'gstart',
    description: 'This Starts a giveaway in a mentioned channel',
    aliases: ['start', 'host'],
    usage: ['#channel time winners prize'],
    cooldown: 8,
    async execute(message, args, client) {


        if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return message.channel.send('Sorry! You need to have the `manage_messages` permissions to start giveaways.');
        }
        let giveawayChannel = message.mentions.channels.first();

        if (!giveawayChannel) {
            return message.channel.send('Sorry! You have to mention a valid channel!\nExample - *' + `${prefix}` + 'gstart #giveaways `1d`/`10s` `1`/`10` Nitro*');
        }

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
            return message.channel.send('Sorry! You have to specify a valid duration!\nExample - *' + `${prefix}` + 'gstart #giveaways `1d`/`10s` `1`/`10` Nitro*');
        }


        let giveawayNumberWinners = args[2];

        if (isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)) {
            return message.channel.send('Sorry! You have to specify a valid number of winners!\nExample - *' + `${prefix}` + 'gstart #giveaways `1d`/`10s` `1`/`10` Nitro*');
        }


        let giveawayPrize = args.slice(3).join(' ');

        if (!giveawayPrize) {
            return message.channel.send('Sorry! You have to specify a valid prize!\nExample - *' + `${prefix}` + 'gstart #giveaways `1d`/`10s` `1`/`10` Nitro*');
        }


        client.giveawaysManager.start(giveawayChannel, {

            time: ms(giveawayDuration),

            prize: giveawayPrize,

            winnerCount: giveawayNumberWinners,

            hostedBy: message.author.id,

            messages: {
                giveaway: "<:giveaway:795287569382244353> ** GiveAway!!** <:giveaway:795287569382244353>",
                giveawayEnded: "<:giveaway:795287569382244353> **GIVEAWAY ENDED** <:giveaway:795287569382244353>",
                timeRemaining: "Time remaining: **{duration}**!",
                inviteToParticipate: "React with <:Giveaway:795287777943486464> to participate!",
                winMessage: "Congratulations, {winners}! You won **{prize}**!",
                embedFooter: message.member.displayName + ` • GiveAway`,
                noWinner: "Giveaway cancelled, no valid participations.",
                hostedBy: "Hosted by: <@{user}>",
                winners: "winner(s)",
                endedAt: "Ended at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        });

        message.channel.send(`Giveaway started in ${giveawayChannel}!`);
    }
}