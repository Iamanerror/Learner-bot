const Discord = require("discord.js");

const TOKEN =

var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user) return;
    
    if (message.content == "hello") {
        message.channel.sendMessage("Hii, there!);
    }
});

bot.login(TOKEN);
