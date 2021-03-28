const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { prefix } = require('../../config.json');
module.exports = {
    name: 'github',
    aliases: ['githubsearch'],
    description: 'Browse github for popular results',
    cooldown: 10,
    args: true,
    async execute(message, args) {
        const searchemd = new MessageEmbed();
        searchemd
            .setTitle("🔎 Searching on Github...")
            .setThumbnail(`https://cdn.discordapp.com/attachments/812644633707937813/824628648170487838/GitHub-Mark.png`)
            .setColor(`FF0000`)




        let msg = await message.channel.send(searchemd);


        
        const user = args.join(" ");

        if (!user || user.length < 0) {
            let errorembeduser = new MessageEmbed()
                .setTitle("Error  ")
                .addField("Usage", `${prefix}` + " github <username>")
                .setTimestamp()
            return  msg.edit(errorembeduser);
        }
        const data = await fetch(`https://api.github.com/users/${user}`).then((res) =>
            res.json()
        )
            .catch(error => {
                let errorembed = new MessageEmbed()
                    .setTitle("Error  ")
                    .setDescription("Could not fetch data. Please try again or make sure the name is correctly spelled!")
                    .setColor("FF5757")
                    .setTimestamp()
                return  msg.edit(errorembed);
            })

        if (data.message === "Not Found") {
            let errorembed = new MessageEmbed()
                .setTitle("Error  ")
                .setColor("FF5757")
                .setDescription("Could not fetch data. Please try again or make sure the name is correctly spelled!")
                .setTimestamp()
            return  msg.edit(errorembed);
        }


        const repos = `https://github.com/${data.login}/repositories`;
        const embed = new MessageEmbed()
            .setTitle(`${data.login === null ? "Not specified." : data.login}`)
            .setURL(`https://github.com/${data.login}`)
            .setThumbnail(data.avatar_url)
            .addField("Name", `${data.name === null ? "Not specified." : data.name}`, true)
            .addField("Bio", `${data.bio === null ? "Not specified." : data.bio}`)
            .addField(`Repositories (${data.public_repos})`, `[\`${repos}\`](${repos})`)
            .setFooter("Powered by Github API")
            .addField("Followers", data.followers, true)
            .addField("Following", data.following, true)
            .setTimestamp()
            .setColor("RANDOM");

        msg.edit(embed);
    }
}
