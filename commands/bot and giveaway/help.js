const Discord = require('discord.js');
const Pagination = require('discord-paginationembed');
module.exports = {
    name: 'help',
    description: 'Get the all available commands of bot.',
    async execute(message, args) {


        let userinfoget =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.member(message.author);
        const embeds = [];

        //'•`` - \n'+
        const FieldsEmbed = new Pagination.FieldsEmbed()
            .setArray([{
                command: `All Categories are as follows you can do sn!commands to get them in your dm also do sn!help [command] to get more info about specific command\n` +
                    `1. **Server Administration** - ` + 'Contains all commands necessary for server administration' + '\n2. **Animals** - Contains many commands which generate images of animals.' +
                    `\n3. **About Bot** - ` + 'Contains all bot related commands like help stats etc' + '\n4. **User related and Search** - Contains user commands like userinfo and search commands like yt' +
                    '\n5. **GiveAway and Welcome** - Contains commands for giveaway module like gstart and gdrop and welcome' + '\n6. **Fun and Images** - Contains Various commands that will try to bring a smile on your face' +
                    '\n7. **Weeb** - A module specially made for animelovers example wkiss and stuff'
            },
            {
                command: '**__Server Administration__**\n' +
                    '•`addrole` - adds role to a user with role id or name\n' +
                    '•`removerole` - removes role from a user with role id or name\n' +
                    '•`nick` - changes/resets nickname of the user within the server\n' +
                    '•`kick` - kicks the user from the guild\n' +
                    '•`lockchannel` - locks the channel / removes users perm to chat in current channel\n' +
                    '•`unlockchannel` - unlocks the currently locked channel\n' +
                    '•`purge` - deletes messages from 1-99 in current channel\n' +
                    '•`slowmode` - adds slowmode in the channel\n' +
                    '•`say` - say a message through bot (Do not break any T.O.S using this)\n' +
                    '•`roleinfo` - Gives the information about the given role\n' +
                    '•`embed` - say a embed message through bot with color of your choice\n'
            },
            {
                command: '**__Animals__**\n' +
                    '•`bird` - Generates a cute bird image\n' +
                    '•`cute` - Meow! Generates a cute cat image\n' +
                    '•`dog` - Woof! Generates a cute doggo image\n' +
                    '•`fox` - *Fox sounds*! Generates a cute fox image\n' +
                    '•`shibe` - Hemlos! Generates a cutest doggo image\n' +
                    '•`panda` - *Panda Sounds*! Generates a best bear image\n' +
                    '•`pikachu` - Pika pika! Generates a pikachu image'
            },
            {
                command: '**__About bot__**\n' +
                    '•`commands` - Shows all available commands in dm\n' +
                    '•`links` - Shows all available links of bot\n' +
                    '•`ping` - Ping pong ? \n' +
                    '•`stats` - Know about me how am made\n' +
                    '•`uptime` - I am online since\n' +
                    '•`help` - Shows the command you are currently viewing\n' +
                    '•`setprefix` - Adds a new prefix within the guild on which bot acts on\n'
            },
            {
                command: '**__User and search__**\n' +
                    '•`afk` - Leave a message behind while you are afk\n' +
                    '•`avatar` - Get the avatar of the user in the discord\n' +
                    '•`calculator` - Calculates the given expression[idk why I have this here]\n' +
                    '•`enlarge` - Enlarges the emoji given by user to png or gif format\n' +
                    '•`userinfo` - Shows the profile of the discord user\n' +
                    '•`serverinfo` - Displays all the guild or server\n' +
                    '•`ytsearch` - Searches YouTube video for the given query\n' +
                    '•`ytch` - Searcher YouTube Channe; for the given query\n' +
                    '•`githubsearch` - Checks github for the given profile\n' +
                    '•`mcuser` - Gets the profile of the MineCraft Player\n'
            },
            {
                command: '**__GiveAway and Welcome__**\n' +
                    '•`giveawaystart` - Starts the GiveAway in the Given channel\n' +
                    '•`giveawayend` - Ends the currently running giveaway by message id\n' +
                    '•`giveawayreroll` - Randomize the winner of the giveaway\n' +
                    '•`giveawaydrop` - First to react the message wins\n' +
                    '•`welcomechannel` - Sets the Channel in which Welcome Message will appear\n' +
                    '•`welcomemsg` - Sets the message which will appear when user joins the Guild\n'
            },
            {
                command: '**__Fun and Images__**\nNote:- all commands require args\n' +
                    '•`8ball` - What does the magic 8 ball says\n' +
                    '•`affair` - Generates the boyfriend and girlfriend meme with given users\n' +
                    '•`beautiful` - Ah this is beautifull\n' +
                    '•`change_my_mind` - Generates a fully completed meme\n' +
                    '•`coinflip` - Heads or tails?\n' +
                    '•`delete` - Is there trash in your computer\n' +
                    '•`hitler` - Its in news that the user is worse than hitler(No Controversy Just for fun)\n' +
                    '•`meme` - Ah give me lastest meme from reddit\n' +
                    '•`question/ask` - Ask bot a question he will reply yes or no!\n' +
                    '•`quote` - Generates a random quote\n' +
                    '•`rip` - Rest in peace poor guy\n' +
                    '•`slap` - Slapped the user\n' +
                    '•`trash` - Is that trash here?\n' +
                    '•`triggered` - Your words have triggered me!!!\n' +
                    '•`trump_tweet` - Trump Tweeted someting\n' +
                    '•`wanted` - Oh gosh whats the bounty on you!\n' +
                    '•`giphy` - Gets the gif of the query on giphy\n'
            },
            {
                command: '**__Weeb__**\n' +
                    '•`waifu` - Gets a cute waifu\n' +
                    '•`wcuddle` - Cuddles you\n' +
                    '•`wfeed` - Get a anime gif for feed\n' +
                    '•`whug` - Here is a hug for you\n' +
                    '•`wkiss` - *Kisses*\n' +
                    '•`wpat` - Patting for your good work\n' +
                    '•`wslap` - Slapped you but in anime way\n' +
                    '•`wtickle` - Hehe hehe hehe\n'
            }])
            .setChannel(message.channel)
            .setElementsPerPage(1)
            .setPage(1)
            .setPageIndicator(true)
            .formatField('__Commands Available__\n', i => i.command)
            .setDisabledNavigationEmojis(['delete'])
            .setTimeout(600000)
            .setFunctionEmojis({
                '⏪': (user, instance) => {
                    FieldsEmbed.setPage(1)
                }
            })
            // Similar to setFunctionEmojis() but this one takes only one emoji
            .addFunctionEmoji('⏩', (_, instance) => {
                const field = instance.embed.fields[0];
                FieldsEmbed.setPage(8)

            })
            .addFunctionEmoji('⏹', (_, instance) => {
                Fi.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));

            })

            .setEmojisFunctionAfterNavigation(false);

        FieldsEmbed.embed
            .setColor(userinfoget.displayHexColor)
            .setTitle('Snowflake bot')
            .setDescription('`Use emojis below to navigate between pages.`')

        await FieldsEmbed.build();
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        //More info

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }
        const cemd = new MessageEmbed();
        cemd
            .setTitle(`Informatiom about ${command.name}`)
            .setDescription(`**Aliases:** ${command.aliases.join(', ')}\n**Description:** ${command.description}\n**Usage:** ${prefix}${command.name} ${command.usage}\n**Cooldown:** ${command.cooldown || 3} second(s)`)
            .setFooter(`Used by - ` + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(`#2ffff9`)
        message.channel.send(cemd);

    }
}
