module.exports = function (message) {
    if (message.mentions.members.first() != undefined) {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            if (message.mentions.members.first().hasPermission('ADMINISTRATOR')) { message.channel.send("admin hai wo kar ban skta hai to karle ¯\_(ツ)_/¯") }
            else {
                let banh = message.mentions.members.first().username
                message.mentions.members.first().ban();
                message.channel.send(banh + ' was banned')
            }
        }
        else {
            message.channel.send('no')
        }
    }
    else { message.channel.send('kisko? :smiling_imp:') }
}