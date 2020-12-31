const Discord = require("discord.js");
const youtube_api_key = "AIzaSyDurAXSQnhtfO_IUxwov_jMEmG26ht8_2E";

module.exports.run = async (bot, message, args) => {

    let search_query = args[0];
       // console.log(search_query);
        if (!search_query) {
           return message.channel.send("Make sure to add some search terms so I know what YouTube video to get you :eyes:\nEg: `-yt Swedish House Mafia greyhound`");
        }

        else {
          //  console.log("SEARCH QUERY", search_query);

            const { google } = require('googleapis');
    
            const youtube = google.youtube({
                version: 'v3',
                auth: youtube_api_key
            });
    
            // Function is placed here, because I may require calling this function in the future.
            async function searchYouTube(msg, search_term) {
                const res = await youtube.search.list({
                    part: 'id,snippet',
                    q: search_term,
                    type: 'video'
                });

                if (res.data.pageInfo.totalResults === 0) {
                    message.channel.send("No results found :( Try another search maybe?")
                }
                else {
                    var video_id = res.data.items[0].id.videoId;
                    var video_url = `https://www.youtube.com/watch?v=${video_id}`
                   // console.log(video_url)
                    message.channel.send(video_url)
                }
            }
            searchYouTube(msg, search_query);
    
        }
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }


module.exports.help = {
    name:"searchyt"
  }
  