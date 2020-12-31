const Discord = require("discord.js");
const mojang = require('mojang-api');


module.exports.run = async (bot, message, args) => {
//check if there're arguments
        if(!args.length) {
            message.reply('please specify the player\'s name');
            return;
        }
        //send request to find uuid
        mojang.nameToUuid(args[0], (err, resp) => {
            if(err) console.error(err);
            else message.channel.send(resp[0].name + '\'s uuid is ' + resp[0].id);
        });
    }
    
module.exports.help = {
    name:"uuid"
  }
  