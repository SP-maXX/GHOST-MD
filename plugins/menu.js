// Command module එකෙන් cmd සහ commands ආයාත කිරීම
const { cmd, commands } = require('../command');

// 'menu' නමැති නියෝගයක් සාදන්න
cmd({
    pattern: "menu", // නියෝගය
    desc: "menu the bot", // විස්තරය
    category: "menu", // කාණ්ඩය
    react: "🪰", // ප්‍රතික්‍රියාව
    filename: __filename // නියෝගය ලියා ඇති ගොනුව
},

async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // පණිවිඩය නිර්මාණය කරනු
        let dec = `
╭──────────────────────────────────────────────▢
|●《《 Hello 🌚👋 ${data.pushname} 》》

|● This is Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ  Bot.. ...👾
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
│💎●Group Commands
│───────
 ${menu.group}
╰───────────●●►

╭───────────●●►
│⚙️Owner Commands
│───────
 ${menu.owner}
╰───────────●●►

╭───────────●●►
│🤖AI COMMANDS
│───────
 ${menu.ai}
╰───────────●●►

╭───────────●●►
│🧰Tools Commands
│───────
 ${menu.tools}
╰───────────●●►

╭───────────●●►
│🛡️Convert  Commands
│───────
 ${menu.convert}
╰───────────●●►

╭───────────●●►
│💣Search Commands
│───────
 ${menu.search}
╰───────────●●►

╭───────────●●►
│💕FUN COMMANDS
│───────
 ${menu.fun}
╰───────────●●►

> ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ Ｓᴀɴᴛʜᴜsʜ.Ｓ
> ᴾᴼᵂᴱᴿᴱᴴ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄
`;

        // පණිවිඩය යවනවා
        await conn.sendMessage(from, { image: { url: `https://i.ibb.co/10pBNvp/Speed-Maxx.jpg` }, caption: dec }, { quoted: mek });

    } catch (e) {
        console.log(e); // දෝෂය ලියාපදිංචි කරනවා
        reply(`${e}`); // දෝෂය යවනවා
    }
});

// ප්‍රමාණවත් කිරීම
const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

// 'menu' නියෝගය නැවත නිර්මාණය කිරීම
cmd({
    pattern: "menu", // නියෝගය
    desc: "get bot cmd.", // විස්තරය
    category: "main", // කාණ්ඩය
    filename: __filename // නියෝගය ලියා ඇති ගොනුව
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv(); // පරිසරය කියවන්න

        // menu නමැති වස්තුවක් සාදන්න
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

        // නියෝග ගණනය කරන්න
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`; // නියෝගය කාණ්ඩය අනුව එකතු කරන්න
            }
        }

        // නියෝගය නිර්මාණය කරන්න
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
> ᴾᴼᵂᴱᴿᴱᴴ ᴮʸ S?????s?.S
`;

        // පණිවිඩය යවනවා
await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e); // දෝෂය ලියාපදිංචි කරනවා
        reply(`${e}`); // දෝෂය යවනවා
    }
});
