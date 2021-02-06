const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = function (message) {
    let kisko = message.mentions.users.first()
    let ran = Math.floor(Math.random() * 99) + 1;
    let authid = message.author.id
    authid.toString()


    if (kisko == undefined) {
        if (authid==581060730522959872 || authid == "454953209170100224" || authid == "335996880096067584" || authid == "602412289605500957") {
            const h = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} is 100% Homie`)
                .setColor('#FF0000')
                .setThumbnail(`https://preview.redd.it/kj68zia7a0f51.jpg?auto=webp&s=39bd18945bfa08cc0f2df44aafc93551f3af4aac`)
            message.reply(h)            
        }        
        else {
            const h = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} is ${ran}% Homie`)
                .setColor('#FF0000')
                .setThumbnail(`https://preview.redd.it/kj68zia7a0f51.jpg?auto=webp&s=39bd18945bfa08cc0f2df44aafc93551f3af4aac`)
            message.reply(h)
        }

    }
    else {
        if (kisko.id == "581060730522959872" || kisko.id == "454953209170100224" || kisko.id == "335996880096067584" || kisko.id == "602412289605500957") {
            const h = new Discord.MessageEmbed()
                .setTitle(`${kisko.username} is 100% Homie`)
                .setColor('#FF0000')
                .setThumbnail(`https://preview.redd.it/kj68zia7a0f51.jpg?auto=webp&s=39bd18945bfa08cc0f2df44aafc93551f3af4aac`)
            message.reply(h)
        }
        else {
            const h = new Discord.MessageEmbed()
                .setTitle(`${kisko.username} is ${ran}% Homie`)
                .setColor('#FF0000')
                .setThumbnail(`https://preview.redd.it/kj68zia7a0f51.jpg?auto=webp&s=39bd18945bfa08cc0f2df44aafc93551f3af4aac`)
            message.reply(h)
        }
    }
}