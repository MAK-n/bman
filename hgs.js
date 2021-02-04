const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = function (message) {
    let kisko = message.mentions.users.first().username
    if (kisko == undefined) {
        message.channel.send('Kisko karna hai?')
    }
    else if (kisko == message.author.username) {
        message.channel.send("somebody give this guy a hug ")
    }
    else {
        let ran = Math.floor(Math.random() * 100)+1;        
        const h = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugs ${kisko}`)
            .setColor('#FF0000')
            .setImage(`https://acegif.com/wp-content/gif/anime-hug-${ran}.gif`)
        message.reply(h)
    }
}