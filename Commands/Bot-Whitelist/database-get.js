const { Discord } = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'database-get',
    aliases: ['db-', 'dbget'],
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
        
        if(!datavar)return message.reply('umm, are you sure that you gave me a variable');

        let dataval = db.get(datavar)
        console.log(`A var \`${datavar}\` was fetched by ${message.author.tag}`)
        const embed = new MessageEmbed()
            .setDescription(`Successfully fetched data stored with\n**Varible** - \`${datavar}\`\n**Literal** - \`${dataval}\``)
            .setColor(`#00FFFF`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}