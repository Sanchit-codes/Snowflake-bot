const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run =async (bot, message, args) => {

    const embed = new MessageEmbed()
    .setTitle("Available Fun Commands")
    .addField("1. 8ball","Usage- `s!8ball <question>`")
    .addField("2. Random Bird","Usage- `s!bird`")
    .addField("3. Random Cat","Usage- `s!cat`")
    .addField("4. Random Dog","Usage- `s!dog`")
    .addField("5. Random *Shibe*","Usage- `s!shibe`")
    .addField("6. Random Fox","Usage- `s!fox`")
    .addField("7. Coinflip","Usage- `s!coinflip`")
    .addField("8. Delete Some Trash","Usage- `s!delete`")
    .addField("9. Ban but in fun?","Usage- `s!forceban <mention>`")
    .addField("10. There is Hitler on News","Usage- `s!hitler`")
    .addField("11. Meme Generator why not?","Usage- `s!meme`")
    .addField("12. Rest In Peace","Usage- `s!rip`")
    .addField("13. Trash here?","Usage- `s!trash`")
    .addField("14. Triggered Guy","Usage- `s!trigger`")
    .addField("15. Trump Tweeted Something","Usage- `s!trump_tweet <message>`")
    .addField("16. Wanted Guy","Usage- `s!wanted`")
    .addField("17. Ask bot his opinion","Usage- `s!ask <question>`")
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor('#00FFFF');

message.channel.send(embed);
}
module.exports.help = {
name:"fun"
}
