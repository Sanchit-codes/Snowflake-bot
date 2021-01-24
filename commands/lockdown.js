const Discord = require("discord.js")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission('ADMINISTRATOR')) return;
  if (!bot.lockit) bot.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must specify a duration for the lockdown');
  if (validUnlocks.includes(time)) {
    message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    if (ms(time) >= 2147483647) return message.reply('specified duration is too long');
    message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false }).then(() => {
      message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}. To lift, run **s!lockdown ${validUnlocks[Math.floor(Math.random() * validUnlocks.length)]}**`).then(() => {

        bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};

module.exports.help = {
    name: "lockdown"
  }