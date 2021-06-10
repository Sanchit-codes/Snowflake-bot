const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'database-push',
    aliases: ['db+', 'dbpush'],
    description: 'Only for devlopers to handle database',

    async execute(message, args, client) {
        whitelist = config.whitelist;
		length = whitelist.length
		
		let var1 = 0;
		for (i = 0; i <= length; i++) {
			if (message.author.id === whitelist[i]) {
				var1++
			}
		}


		if (var1 < 1) return message.reply(`Only my devloper is allowed to use this command`);
        let datavar = args[0];
        let dataval = message.content.slice(message.content.indexOf(args[1]), message.content.length);
        if(!datavar)return message.reply('umm, are you sure that you gave me a variable');

        if(!dataval)return message.reply('umm, are you sure that you gave me some literals');

        await db.set(datavar , dataval)
        console.log(`A var \`${datavar}\` was pushed by ${message.author.tag}`)
        const embed = new MessageEmbed()
            .setDescription(`Successfully pushed data stored with\n**Varible** - ${datavar}\n**Literal** - ${dataval}`)
            .setColor(`#00FFFF`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}