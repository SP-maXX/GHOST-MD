const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get bot cmd.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
 main: '',
 download: '',
 group: '',
 owner: '',
 ai: '',
 convert: '',
 tools: '',
 search: '',
 fun: '',
};

  for (let i = 0; i < commands.length; i++) { if (commands[i].pattern && !commands[i].dontAddCommandList) { menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`; } }

 let madeMenu = `==🪐  ●●《SPEED MAX-MD》●● ✨==

╭──────────────────────────────────────────────▢
|●《《 *Hello* 🌚👋 ${data.pushname} 》》

|● *This is Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ  Bot.*. ...👾
╰──────────────────────────────────────────────▢

╭───────────●●►
│🥊● Download Command
│───────
 ${menu.download}
╰───────────●●►

╭───────────●●►
│📜 MAIN COMMANDS
│───────
 ${menu.main}
╰───────────●●►

╭───────────●●►
│*💎●Group Commands*
│───────
 ${menu.group}
╰───────────●●►

╭───────────●●►
│*⚙️Owner Commands*
│───────
 ${menu.owner}
╰───────────●●►

╭───────────●●►
│*🤖AI COMMANDS*
│───────
 ${menu.ai}
╰───────────●●►

╭───────────●●►
│*🧰Tools Commands*
│───────
 ${menu.tools}
╰───────────●●►

╭───────────●●►
│*🛡️Convert  Commands*
│───────
 ${menu.convert}
╰───────────●●►

╭───────────●●►
│*💣Search Commands*
│───────
 ${menu.search}
╰───────────●●►

╭───────────●●►
│*💕FUN COMMANDS*
│───────
 ${menu.fun}
╰───────────●●►

> ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄
> ᴾᴼᵂᴱᴿᴱᴰ ᴮʸ S?????s?.S
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

  }catch(e){
console.log(e)
reply(`${e}`)
}
})
