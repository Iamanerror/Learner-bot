const Discord = require("discord.js");

const TOKEN = NDk2NzQwMjg4NjUyNTA5MTk0.DpVClA.Flq4-wraCaBPieR0Cz2PEUupRJ4

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
