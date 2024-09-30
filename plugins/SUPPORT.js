const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "👨‍🚀",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*⚒️ Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ Support Channel⚒️*

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029ValiESUEVccTtxqLST2x

> ❯❯ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- 2024> `



}catch(e){

console.log(e)

reply(`${e}`)

}

})
