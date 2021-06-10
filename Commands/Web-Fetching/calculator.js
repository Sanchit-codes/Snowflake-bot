const { MessageEmbed } = require('discord.js');
const math = require('math-expression-evaluator');
module.exports = {
    name: 'calculator',
    description: 'Get the result of the given question',
    aliases: ['calc', 'maths', 'math'],
    usage: ['question'],
    args: true,
    async execute(message, args) {

        let userinfoget =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.guild.member(message.author);
        if (args.length < 1) {
            return message.channel.send({
                embed: {
                    color: 16734039,
                    description: "You must provide a equation to be solved on the calculator! (eg. 9 + 10)"
                }
            })
        }

        const question = args.join(' ');

        let answer;
        if (question.indexOf('12 + 2') > -1) {
            answer = '14 (🤣 XD, You found easter-egg)';
        } else {
            try {
                answer = math.eval(question);
            } catch (err) {
                message.channel.send({
                    embed: {
                        color: 16734039,
                        description: "Invalid math equation: " + `${err}`
                    }
                });
                return;
            }
        }

        const calc = new MessageEmbed()
            .setTitle("Calculator")
            .setColor(userinfoget.displayHexColor)
            .addField("Question: ", `${question}`)
            .addField("Answer: ", `${answer}`)
            .setFooter(message.member.displayName + ` • Powered by math-expression-evaluator`, message.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/824626861270761522/calculater.gif`);
        message.channel.send(calc);

    }
}