const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");


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
module.exports.run = async (bot, message, args) => {
    const question = args.join(' ');
    if (!question) return message.channel.send("**Please provide a Question!**");
    
    const embed = new MessageEmbed()
    embed
    .setTitle(`Asked by ${ message.author.tag }`)
    .setColor("#00ff9e")
    .setDescription(`What I think is: **${answers[Math.floor(Math.random() * answers.length)]}**`)
    .setTimestamp()
    .setFooter(`Thanks for using Snowflake`)
    message.channel.send(embed);

}  


module.exports.help = {
  name:"8ball"
}
