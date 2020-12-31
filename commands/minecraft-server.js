const Discord = require("discord.js");
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

module.exports.run = async (bot, message, args) => {
    
     if(!args.length) {
        message.reply('please specify the server\'s ip address');
        return;
    }
    
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
        
        if(xmlHttp.readyState === 4) {
            
            const resp = JSON.parse(xmlHttp.responseText);
            
            if(!resp.hostname) {
                message.channel.send('Couldn\'t find any server with ip ' + args[0]);
                return;
            }
            
            let response = resp.hostname;
            if(resp.online) {
                response += ' is online. Online players: ';
                if(resp.players.online) {
                    response += resp.players.online;
                }
                else {
                    response += 'none';
                }
            }
            else {
                response += ' is offline'
            }
            
            message.channel.send(response);
        }
    }
   
    xmlHttp.open('GET', 'https://api.mcsrvstat.us/2/' + args[0]);
    xmlHttp.send();
}

module.exports.help = {
    name: "server",
  }