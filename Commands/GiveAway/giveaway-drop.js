const Discord = require("discord.js")
const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
    name: 'drop',
    description: 'This Starts a drop in current channel',
    aliases: ['drops', 'gdrop'],
    usage: ['#channel time winners prize'],
    cooldown: 1,
    async execute(message, args, client) {

        if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return message.channel.send('Sorry! You need to have the `manage_messages` permissions to start giveaways.');
        }
        let prize = args.slice(0).join(' ');

        if (!prize) {
            return message.channel.send('Sorry! You have to specify a valid prize!\nExample - *' + `${prefix}` + 'drop Nitro*');
        }





        const guild = message.guild;
        const channel = message.channel;

        const DropEmbed = new Discord.MessageEmbed()
            .setTitle(`${prize}`)
            .setDescription(`First to React with <:Giveaway:795287777943486464> wins the prize.`)
            .setFooter('Hosted by ' + message.author.tag, message.author.displayAvatarURL({ size: 512, format: 'png' }))
            .setColor(guild.me.roles.highest.hexColor)
            .setTimestamp();

        const msg = await channel.send(DropEmbed);

        await msg.react('<:Giveaway:795287777943486464>');

        const filter = (reaction, user) => !user.bot;
        const reaction = new Discord.ReactionCollector(msg, filter, { max: 1 });

        reaction.on('collect', async (reaction, user) => {



            const { embeds } = msg;

            const embed = embeds[0];

            embed.setTitle(`<:Giveaway:795287777943486464> Drop Winner!`);
            embed.setDescription(`${user.toString()} won \`${prize}\`.
                Please contact ${message.author.tag} to claim your prize!`);

            await msg.edit(embed);
            message.channel.send(`GG! ${user.toString()} won \`${prize}\`.`)


        });

    }
}