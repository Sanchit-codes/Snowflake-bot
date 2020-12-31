const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const db = require('quick.db');

module.exports.run =async (bot, message, args) => {
     
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premission to do that!");

  const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (!member) 
     return message.channel.send('Please mention a user or provide a valid user ID');
    if (member === message.member) 
      return message.channel.send( 'You cannot warn yourself'); 

      let user = message.guild.member(message.mentions.users.first());
      let author = user.roles.highest.position;
      let target = message.member.roles.highest.position;

    if (author > target) 
      return message.channel.send( 'You cannot warn someone with an equal or higher role');

    //const autoKick = message.client.db.settings.selectAutoKick.pluck().get(message.guild.id); // Get warn # for auto kick

    let reason = args.slice(1).join(' ');
    if (!reason) reason = '`None`';
    if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

    let warns = message.bot.db.users.selectWarns.pluck().get(member.id, message.guild.id) || { warns: [] };
    if (typeof(warns) == 'string') warns = JSON.parse(warns);
    const warning = {
      mod: message.member.id,
      date:  moment().format('MMM DD YYYY'),
      reason: reason
    };

    warns.warns.push(warning);
    
    message.client.db.users.updateWarns.run(JSON.stringify(warns), member.id, message.guild.id);

    const embed = new MessageEmbed()
      .setTitle('Warn Member')
      .setDescription(`${member} has been warned.`)
      .addField('Moderator', message.member, true)
      .addField('Member', member, true)
      .addField('Warn Count', `\`${warns.warns.length}\``, true)
      .addField('Reason', reason)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
    //message.client.logger.info(`${message.guild.name}: ${message.author.tag} warned ${member.user.tag}`);
    
    // Update mod log
    //this.sendModLogMessage(message, reason, { Member: member, 'Warn Count': `\`${warns.warns.length}\`` });

    // Check for auto kick
    //if (autoKick && warns.warns.length === autoKick) {
     // message.client.commands.get('kick')
     //   .run(message, [member.id, `Warn limit reached. Automatically kicked by ${message.guild.me}.`]);
    //}
  }

module.exports.help = {
    name: "warn"
}