module.exports = {
    name: 'eval',
    aliases: ['evaluate'],
    description: 'This command is only for bot owner.',
    args: true,
    execute(message, client) {
        const args = message.content.split(" ").slice(1);

        if (message.author.id != 730615970074329142) return message.reply(`Only my devloper is allowed to use this command`);
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
            
            message.channel.send(`Code Evaluated \nInput:- ${code} \nResult:- `+(evaled), { code: "xl" });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
        }
    }
}
