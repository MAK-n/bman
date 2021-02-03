const Discord = require('discord.js')
const client = new Discord.Client()

let actionhgs = [
    "https://i.imgur.com/r9aU2xv.gif",
    "https://i.imgur.com/wOmoeF8.gif",
    "https://i.imgur.com/nrdYNtL.gif",
    "https://i.imgur.com/BPLqSJC.gif",
    "https://i.imgur.com/v47M1S4.gif",
    "https://i.imgur.com/4oLIrwj.gif",
    "https://i.imgur.com/UMm95sV.gif",
    "https://media1.tenor.com/images/1506349f38bf33760d45bde9b9b263a4/tenor.gif",
    "https://media0.giphy.com/media/ddGxYkb7Fp2QRuTTGO/source.gif",
    "https://c.tenor.com/ncblDAj_2FwAAAAM/abrazo-hug.gif",
    "https://c.tenor.com/DVOTqLcB2jUAAAAM/anime-hug-love.gif",
    "https://c.tenor.com/SXk-WqF6PpQAAAAM/anime-hug.gif",
    "https://c.tenor.com/z6wApX13fSEAAAAM/abra%C3%A7o-hug.gif",
    "https://c.tenor.com/EnfEuWDXthkAAAAM/hug-couple.gif",
    "https://c.tenor.com/6o00RFQhxzsAAAAM/manga-anime.gif",
    "https://c.tenor.com/X5nBTYuoKpoAAAAM/anime-cheeks.gif",
    "https://c.tenor.com/1T1B8HcWalQAAAAM/anime-hug.gif",
    "https://c.tenor.com/5u1n4SYgd3AAAAAM/cuddle-nuzzle.gif"
]

module.exports = function (message) {
    let kisko = message.mentions.users.first().username
    if (kisko == undefined) {
        message.channel.send('Kisko karna hai?')
    }
    else if (kisko == message.author.username) {
        message.reply("somebody give this guy a hug")
    }
    else {
        const h = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugs ${kisko}`)
            .setColor('#FF0000')
            .setImage(actionhgs[Math.floor(Math.random() * actionhgs.length)])
        message.reply(h)
    }
}