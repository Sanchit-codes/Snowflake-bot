const config = require('../../config.json')

module.exports = {
    name: 'whitelist',
    aliases: ['whitelisted'],
    description: 'Fetches the total whitelisted user',
    args: true,
    execute(message, args) {

        const whuser = [[], []];

        config.whitelist.forEach((user) => {
            const array = whuser[0].length > whuser[1].length ? whuser[1] : whuser[0];
            usr = client.users.cache.find(usr => usr.id === user)
            details = usr.username + '(`' + user + '`)'

            array.push(details);

        });


        message.channel.send({
            embed: {
                color: '00FFFF',
                footer: { text: 'Cold as the Snow , Calm as the Sea' },
                fields: [
                    { name: 'Users-', value: whuser[0].join('\n'), inline: true },
                    { name: '** **', value: whuser[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Showing all Whitelisted Masters`,
            },
        });
    }
}