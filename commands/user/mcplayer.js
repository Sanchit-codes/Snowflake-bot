const { Discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const mojang = require('mojang-api');
module.exports = {
    name: 'mcplayer',
    aliases: ['profile', 'mcinfo'],
    description: 'Display info about MineCraft Player.',
    async execute(message, args, client) {
        if (!args.length) {
            message.reply('please specify the player\'s name');
            return;
        }
        const lemd = new MessageEmbed();
        lemd.setTitle(`Getting Information ...`)
        lemd.setThumbnail(`https://cdn.discordapp.com/emojis/814898125780156466.gif`)
        lemd.setColor(`00FF56`);
        const msg = await message.channel.send(lemd);
        mojang.nameToUuid(args[0], (err, res) => {
           
            uuid = res[0].id;
            mojang.profile(uuid, (err, resp) => {
                if (err) {
                    message.reply('that player\'s uuid does not exist');
                    return;
                }

                mojang.nameHistory(uuid, (err, resp1) => {
                    if (err) {
                        message.reply('there was an error trying to retrieve the data');
                        console.error(err);
                        return;
                    }

                    let nameHistory = '';
                    resp1.forEach(element => {
                        nameHistory += element.name + ', ';
                    });
                    nameHistory = nameHistory.slice(0, nameHistory.length - 2);

                    let embedMessage = {
                        color: '00FFFF',
                        title: resp.name,
                        author: {
                            name: 'Minecraft info',
                            icon_url: '',
                            url: 'https://phantom-14.github.io/Snowflake-bot'
                        },
                        description: resp.name + "'s profile",
                        thumbnail: {
                            url: 'https://crafatar.com/avatars/' + resp.id + '.png'
                        },
                        fields: [{
                            name: 'Name',
                            value: resp.name
                        },
                        {
                            name: 'Uuid',
                            value: resp.id
                        },
                        {
                            name: 'Skin',
                            value: '[Skin Link](https://crafatar.com/skins/' + resp.id + '.png)'
                        },
                        {
                            name: 'Cape',
                            value: '[Cape Link](https://crafatar.com/capes/' + resp.id + '.png)'
                        },
                        {
                            name: 'Name history',
                            value: nameHistory
                        },
                        {
                            name: 'NameMC Link',
                            value: `[Name MC](https://namemc.com/search?q=${args[0]})`
                        }],
                        image: {
                            url: 'https://crafatar.com/renders/body/' + resp.id + '.png'
                        },
                        timestamp: new Date(),
                        footer: {
                            text: 'Powered By Snowflake.'
                        }
                    };

                    msg.edit({ embed: embedMessage });
                });
            });
        });

    }
}