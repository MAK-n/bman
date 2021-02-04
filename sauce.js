const rp = require('request-promise');
const url = 'https://nhentai.net/random/';
const cheerio = require('cheerio');



module.exports= function(message){
    if(message.channel.nsfw){
    rp(url)
  .then(function (html) {
    const source = cheerio.load(html);
    let ss=(source('#gallery_id')[0]['children'][1]['data'])
    message.reply(`https://nhentai.net/g/${ss}`)
})
  .catch(function (err) {
    //handle errors
   console.log(err);
  });}
  else message.channel.send("NSFW channel ni hai ye😠")
}