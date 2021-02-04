module.exports = function (message) {
    let ping = message.mentions.users.first();
    if (ping !== undefined) {
        const avatar = new Discord.MessageEmbed()
            .setTitle(ping.username + "'s avatar")
            .setColor("#FF0000")
            .setImage(ping.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))

        message.reply(avatar)
    }
    else {
        const avatar = new Discord.MessageEmbed()
            .setTitle(message.author.username + "'s avatar")
            .setColor("#FF0000")
            .setImage(message.author.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))

        message.reply(avatar)
    }
}