const db = require('quick.db')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'prefix',
    aliases: [' prefix'],
    description: 'Get the prefix of the bot',

    async execute(message, args, client) {
        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);

        gprefix = db.get(`gprefix-${message.guild.id}`);
        if (!gprefix) {
            gprefix = 'Not Setted Use `Snowflake setprefix` to set one.'
        }
        p1 = '`sn!`';
        p2 = '`Snowflake`';
        const embed = new MessageEmbed()
            .setDescription(`Hello,\nMy Default prefix are ${p1} and ${p2}\nThe customised guild prefix is ${gprefix}`)
            .setColor(userinfoget.displayHexColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));
        message.channel.send(embed)


    }
}