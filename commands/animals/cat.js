const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
  name: 'cat',
  aliases: ['meow'],
  description: 'A cute furry cat appears on your screen.',
  cooldown: 5,
  async execute(message) {
    const apiKey = 'super-secret-key';
    const res = await fetch('https://api.thecatapi.com/v1/images/search', { headers: { 'x-api-key': apiKey } });
    const img = (await res.json())[0].url;
    const embed = new MessageEmbed()
      .setTitle('🐱  Meow Meow!!  🐱')
      .setImage(img)
      .setFooter(message.member.displayName + ` • Powered by thecatapi.com`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}