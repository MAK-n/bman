module.exports = function (message) {
    let ping = message.mentions.users.first();
    if (ping == undefined) {
        let img= message.author.displayAvatarURL()
        img= img.subString(0,(img.length()-4))+"1024"
        const avatar = new Discord.MessageEmbed()
            .setTitle(message.author.username + "'s avatar")
            .setColor("#FF0000")
            .setImage(img)

        message.channel.send(avatar)       
        
    }
    else {
        let img= ping.displayAvatarURL()
        img= img.subString(0,(img.length()-4))+"1024"
        const avatar = new Discord.MessageEmbed()
            .setTitle(ping.username + "'s avatar")
            .setColor("#FF0000")
            .setImage(img)

        message.channel.send(avatar)
    }
}