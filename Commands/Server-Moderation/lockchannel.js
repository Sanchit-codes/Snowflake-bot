const ms = require("ms");
const MessageEmbed = require('discord.js')
module.exports = {
    name: 'lockchannel',
    aliases: ['lock','lockdown'],
    description: 'Add role to the user.',
    usage: ['mention role(name/id/mention)'],
    guildOnly: true,
    execute(message, args, client) {
         
        if (!message.member.hasPermission('MANAGE_CHANNEL')) return;
        if (!client.lockit) client.lockit = [];
        var time = args.join(' ');
        const validUnlocks = ['unlockdown', 'unlock'];
        if (!time) {
            time = `1d`;
        }
        if (validUnlocks.includes(time)) {
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then(() => {
                message.channel.send('Lockdown lifted.');
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            }).catch(error => {
                console.log(error);
            });
        } else {
            if (ms(time) >= 2147483647) return message.reply('specified duration is too long');
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false }).then(() => {
                message.channel.send(`Channel locked down for ${ms(ms(time), { long: true })}. To lift, run `+'`'+`sn!lockdown ${validUnlocks[Math.floor(Math.random() * validUnlocks.length)]} or sn!unlock`+'`').then(() => {

                    client.lockit[message.channel.id] = setTimeout(() => {
                        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
                        delete client.lockit[message.channel.id];
                    }, ms(time));

                }).catch(error => {
                    console.log(error);
                });
            });
        }
    }
}