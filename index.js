const Discord = require('discord.js')
const client = new Discord.Client()
const {
    prefix,
    token,
} = require("./config.json")

let h= require('./hgs')
let av = require('./avatar')
let kick= require('./kick')
let ban= require('./ban')
let cf = require("./coinflip")
let clear = require('./clear')
let ks = require("./ks")
let hr = require("./homierate")
let ss = require("./sauce")

//      start
client.on("ready", () => {
    console.log("ready")
    client.user.setActivity({ name: 'B' }, { type: 1 })
})

client.on('message',message =>{      
    message.content= message.content.toLowerCase()    
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(`${prefix}hug`)|| message.content.startsWith(`${prefix}cuddle`)|| message.content.startsWith(`${prefix}homiehug`)) h(message)
    else if (message.content.startsWith(`${prefix}avatar`) || message.content.startsWith(`${prefix}av`)) av(message)
    else if (message.content.startsWith(`${prefix}kick`)) kick(message)
    else if (message.content.startsWith(`${prefix}ban`)) ban(message)
    else if (message.content == `${prefix}coinflip` || message.content == `${prefix}cf`) cf(message)
    else if (message.content.startsWith(`${prefix}clear`)) clear(message,prefix)
    else if (message.content.startsWith(`${prefix}kiss`)) ks(message)
    else if (message.content.startsWith(`${prefix}homierate`)||message.content.startsWith(`${prefix}howhomie`)) hr(message)
    else if (message.content.startsWith(`${prefix}sauce`)) ss(message)
})

//    svr join greeting    
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`halo ${member} kasa ha?`);
});

client.login(token);
//sdas