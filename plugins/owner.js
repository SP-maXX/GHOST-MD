const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭───────────────────────▢
👋𝐇𝐄𝐋𝐋𝐎 ........................🕵️‍♂️
> *ᴛʜᴇ ʜᴇʟғᴜʟ ᴀɴᴅ ᴜsᴇʀ ʙᴏᴛ*
𝗟𝗢𝗢𝗞𝗜𝗡𝗚 𝗡𝗢𝗪
----------------------------------------------
> Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ ʙᴏᴛ ᴏᴡɴᴇʀ ᴀʙᴏᴜᴛ ||
----------------------------------------------
> ɪ'ᴍ sᴀɴᴛʜᴜsʜ
> ɪ'ᴍ ғʀᴏᴍ ᴍᴀᴛᴀʀᴀ
> ɢᴇᴛ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴠɪsɪᴛ ɪɴ ᴍʏ ᴘᴇʀsᴏɴᴀʟ ᴡᴇʙsɪᴛᴇ ᴛᴏ ғᴏʟʟᴏᴡɪɴɢ ʟɪɴᴋ
  https://sp-maxx.github.io/Mr.Santhush-Website/
> 𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗡𝗨𝗠𝗕𝗘𝗥
 https://wa.me/+94772726437?text=_Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ_ɴɪᴄᴇ_ᴛᴏ_ᴍᴇᴇᴛ_ʏᴏᴜ👻👋_
> ᴏᴡɴᴇʀ : 𝐌𝐫.Ｓᴀɴᴛʜᴜsʜ.Ｓ
╰───────────────────────▢
`
    await conn.sendMessage(from, {
        audio: { url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0235.mp3 '},
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: mek });
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/hZp66L6/THENU-MD-LOGO.png`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
