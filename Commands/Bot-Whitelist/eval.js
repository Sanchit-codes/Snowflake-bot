const { timeStamp } = require('console');
const config = require('../../config.json')

module.exports = {
    name: 'eval',
    aliases: ['evaluate'],
    description: 'This command is only for bot owner.',
    args: true,
    execute(message, client) {
        const args = message.content.split(" ").slice(1);

        whitelist = config.whitelist;
        length = whitelist.length

        let var1 = 0;
        for (i = 0; i <= length; i++) {
            if (message.author.id === whitelist[i]) {
                var1++
            }
        }


        if (var1 < 1) return message.reply(`Only my devloper is allowed to use this command`);
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(`Code Evaluated \nInput:- ${code} \nResult:- ` + (evaled), { code: "xl" });
            console.log(`Some code was evaluated by ${message.author.tag} in ${message.channel.name}`)

        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
        }
    }
}
