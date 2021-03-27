const {MessageEmbed} = require('discord.js');
const answers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
];
module.exports = {
	name: '8ball',
	aliases: ['predict'],
	description: 'Ask a question and have some great replies',
	cooldown: 5,
	async execute(message, args) {
        let userinfoget =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.member(message.author);

        const question = args.join(' ');
    if (!question) return message.channel.send("**Please provide a Question!**");
    
    const embed = new MessageEmbed()
    embed
    .setTitle(`Asked by ${ message.author.tag }`)
    .setColor(userinfoget.displayHexColor)
    .setDescription(`Question Asked: ${question}`)
    .addField(`What I think is:`,` **${answers[Math.floor(Math.random() * answers.length)]}**`)
    .setTimestamp()
    .setFooter(`Thanks for using Snowflake`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/822743770093191168/giphy.gif`)
    message.channel.send(embed);
    }
}