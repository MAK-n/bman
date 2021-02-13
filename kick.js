module.exports = function (message) {
    if (message.mentions.members.first() != undefined) {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            if (message.mentions.members.first().hasPermission('ADMINISTRATOR')) { message.channel.send("admin hai to kar skta kick hai to karle ¯\_(ツ)_/¯") }
            else {
                let kickh = message.mentions.users.first().username
                message.mentions.members.first().kick();
                message.channel.send(kickh + ' was kicked')
            }
        }
        else {
            message.channel.send('no')
        }
    }
    else { message.channel.send('kisko? :smiling_imp:') }
}
