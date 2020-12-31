const Discord = require("discord.js");

module.exports.run =async (bot, message, args ) => {

		const embed = new Discord.MessageEmbed()
			.setAuthor("My invite Link")
            .setTitle('Click Me')
            .setURL("https://discordapp.com/oauth2/authorize?client_id=790572858434256916&scope=bot&permissions=8")
            .setDescription("Hello my current prefix is `s!`")
			
			
			.setColor('RANDOM')
			.setFooter("I am created with <3 || Devloper Phantom");
        
		message.channel.send(embed);
           
	}
    module.exports.help = {
        name: "invite"
    }