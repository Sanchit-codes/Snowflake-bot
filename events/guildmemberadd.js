const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member, client) {

        guild = member.guild;
        //console.log(guild)
        console.log(member)
        const wmsg = db.get(`wmsg-${guild.id}`);
        const wch = db.get(`wch-${guild.id}`);
        const wemd = new MessageEmbed;
        wemd
            .setTitle(`Welcome to ${guild.name}`)
            .setDescription(`<@${member.user.id}>, ${wmsg}`)
            .setFooter(`You are ${guild.memberCount}th Member!!`)
            .setTimestamp()
            .setColor(`00FFFF`)
            .setImage(`https://cdn.discordapp.com/attachments/747668791525113907/770168283348598794/20200330_095125-2.gif`);
        console.log(wemd)
        if (!wch) return;
        guild.channels.cache.get(wch).send(wemd);
    }

}