const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", message => {

  // Your commands here

if(message.content === "ping"){

   // the robot answers pong!
   message.channel.send("Pong!");

};
// We declare the prefix
var prefix = '?';

// The robot will answer this if a user does ?Help
if(message.content.startsWith(prefix + "help")){
   message.channel.send("You did `?help` to get help.");
};

if(message.content == "mp") {
   message.author.send("Here is a private message !")
};

if (message.content.includes("o.p.p")) {
    message.channel.send("Yah, you know ME!");

 }

}); // END

// THIS  MUST  BE  THIS  WAY ... process.env.BOT_TOKEN
client.login(process.env.BOT_TOKEN);
