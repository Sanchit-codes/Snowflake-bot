const ms = require("ms");
const MessageEmbed = require('discord.js')
module.exports = {
    name: 'unlockchannel',
    aliases: ['unlock','unlockdown'],
    description: 'Add role to the user.',
    usage: ['mention role(name/id/mention)'],
    guildOnly: true,
    execute(message, args, client) {
         
        if (!message.member.hasPermission('MANAGE_CHANNEL')) return;

            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then(() => {
                message.channel.send('Lockdown lifted.');
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            }).catch(error => {
                console.log(error);
            });
    }
}