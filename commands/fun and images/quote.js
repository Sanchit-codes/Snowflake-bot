const { MessageEmbed } = require('discord.js');
const Quotes = require('randomquote-api')

module.exports = {
    name: 'quote',
    aliases: ['randomqoute'],
    description: 'Some words of wishdom to make your day',
    cooldown: 5,
    async execute(message, args) {
const randomquote = Quotes.randomQuote();
const author =  randomquote.author;
const quote = randomquote.quote;
const embed = new MessageEmbed();
embed
.setTitle(`Quote of the day`)
.addField(`Author`,author)
.addField(`Quote`,quote)
.setFooter(message.member.displayName + ` • Powered by randomqoute-api`, message.author.displayAvatarURL({ dynamic: true }))
.setColor(`00FF00`);
message.channel.send(embed)
console.log(randomquote)
    }
}