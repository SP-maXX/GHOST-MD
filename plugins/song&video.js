const config = require('../config')
const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("> 🔗Please give me a URL or TITLE🔗*")
const search = await yts (q) 
const data = search.videos[0];
const url = data.url

let desc = `▢───────────────────────────▢
Ӂ ─── Ｓᴘᴇᴇᴅ ＭᴀＸＸ sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🔊
▢───────────────────────────▢
» ᴛɪᴛʟᴇ : ${data.title}
» ᴀʙᴏᴜᴛ : ${data.description.}
» ᴅᴜʀᴀᴛɪᴏɴ : ${data.timestamp}
» ᴀɢᴏ : ${data.ago}
» ᴠɪᴇᴡꜱ : ${data.views}

ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄
  `
 await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})
 
 //download audio

 let down = await fg.yta(url)
 let downloadUrl = down.dl_url
    
 //send audio+ document message 

 await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
 await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄"},{quoted:mek})

 


}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

//--------------------------------------VIDEO-DOWNLOAD------------------------------------------------
//
cmd({
    pattern: "video",
    desc: "download videos.",
    react: "📽️",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(">🔗Please give me a URL or TITLE🔗*")
const search = await yts (q) 
const data = search.videos[0];
const url = data.url

let desc = `▢───────────────────────────▢
Ӂ ─── Ｓᴘᴇᴇᴅ ＭᴀＸＸ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 📽️
▢───────────────────────────▢
» ᴛɪᴛʟᴇ : ${data.title}
» ᴀʙᴏᴜᴛ : ${data.description.}
» ᴅᴜʀᴀᴛɪᴏɴ : ${data.timestamp}
» ᴀɢᴏ : ${data.ago}
» ᴠɪᴇᴡꜱ : ${data.views}

ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄
  `
 await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})
 
 //download video

 let down = await fg.ytv(url)
 let downloadUrl = down.dl_url
    
 //send video+ document message 

 await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4",caption:"> ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄"},{quoted:mek})
 await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄"},{quoted:mek})

 


}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

