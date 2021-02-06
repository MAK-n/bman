const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = function (message) {
    let kisko = message.mentions.users.first().username
    if (kisko == undefined) {
        message.channel.send('Kisko karna hai?')
    }
    else if (kisko == message.author.username) {
        message.channel.send("naah :/")
    }
    else if (message.mentions.users.first().id == "806450964156252201") message.channel.send("no")
    else {
        let ran = Math.floor(Math.random() * 17)+1;        
        const h = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} kisses ${kisko}`)
            .setColor('#FF0000')
            .setImage(`https://acegif.com/wp-content/uploads/anime-kissin-${ran}.gif`)
        message.channel.send(h)
    }
} 