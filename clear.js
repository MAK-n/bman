module.exports = function (message, prefix) {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        var no = parseInt(message.toString().replace(`${prefix}clear `, '')) + 1
        message.channel.bulkDelete(no)
        message.channel.send(no - 1 + ' messages have been deleted!')
    }
    else {
        message.channel.send("You are not an admin")
    }
}