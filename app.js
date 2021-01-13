const config = require("./config.json");
const token = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});
const { GiveawaysManager } = require('discord-giveaways');
// Starts updating currents giveaways
const manager = new GiveawaysManager(bot, {
    storage: './giveaways.json',
    updateCountdownEvery: 10000,
    hasGuildMembersIntent: true,
    default: {
        botsCanWin: false,
        exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
        embedColor: '#FF0000',
        reaction: '<:Giveaway:795287777943486464>'
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
bot.giveawaysManager = manager;

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("Prefix is s! use s!invite", {type: "PLAYING"});
});

bot.on("message", async (message) => {
if(message.author.bot) return;
let substringArray = get_substrings_between(message.content, ":", ":");
let msg = message.content;
if(!substringArray.length) return;

substringArray.forEach(m => {
    let emoji = bot.emojis.cache.find(x => x.name === m);
    var replace = `:${m}:`;
    var rexreplace = new RegExp(replace, 'g');

    if(emoji && !msg.split(" ").find(x => x === emoji.toString()) && !msg.includes(`<a${replace}${emoji.id}>`)) msg = msg.replace(rexreplace, emoji.toString());
})


if(msg === message.content) return;

let webhook = await message.channel.fetchWebhooks();
webhook = webhook.find(x => x.name === "NQN2");

if(!webhook) {
    webhook = await message.channel.createWebhook(`NQN2`, {
        avatar: bot.user.displayAvatarURL({dynamic: true})
    });
}

await webhook.edit({
    name: message.member.nickname ? message.member.nickname : message.author.username,
    avatar: message.author.displayAvatarURL({dynamic: true})
})

message.delete().catch(m => {})

webhook.send(msg).catch( m => {});

await webhook.edit({
    name: `NQN2`,
    avatar: bot.user.displayAvatarURL({dynamic:true})
})


})
//--------------------------------------------------- F U N C T I O N S --------------------------------------

function get_substrings_between(str, startDelimiter, endDelimiter) {
var contents = [];
var startDelimiterLength = startDelimiter.length;
var endDelimiterLength = endDelimiter.length;
var startFrom = contentStart = contentEnd = 0;

while (false !== (contentStart = strpos(str, startDelimiter, startFrom))) {
  contentStart += startDelimiterLength;
  contentEnd = strpos(str, endDelimiter, contentStart);
  if (false === contentEnd) {
    break;
  }
  contents.push(str.substr(contentStart, contentEnd - contentStart));
  startFrom = contentEnd + endDelimiterLength;
}

return contents;
}


function strpos(haystack, needle, offset) {
var i = (haystack + '').indexOf(needle, (offset || 0));
return i === -1 ? false : i;
}

bot.on("message", async message => {

  if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
    const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
    await db.delete(`afk-${message.author.id}+${message.guild.id}`)
    message.reply(`Your afk status have been removed Reason was (${info})`)
  }
  //checking for mentions
  if(message.mentions.members.first()) {
    if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
        message.channel.send('`'+message.mentions.members.first().user.tag + "` is currently afk \n **REASON-> **" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
    }else return;
  }else;

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(!cmd.startsWith(config.prefix)) return;
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(token.token);
