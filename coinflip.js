module.exports = function (message){
    let c = Math.floor((Math.random() * 10)) + 1;
    if (c > 4) { message.channel.send("Heads") }
    else { message.channel.send("Tails") }
}