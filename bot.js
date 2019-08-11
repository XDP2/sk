const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598876253595893790")
setInterval(function() {
channel.send(`كسمك يا يحيا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);