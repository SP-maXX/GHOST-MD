// ලැබෙන කේතය obfuscate කිරීමෙන් පසුව පහත මාර්ගයේ ක්‍රියාවලියක් අඩංගු වේ

// අවශ්‍ය module ආයාත කිරීම
const { cmd, commands } = require('./command'); // Command module එකෙන් cmd සහ commands ප්‍රදානය

// 'list' නමැති නියෝගයක් සාදන්න
cmd({
  pattern: 'list',
  react: '🗃️', // ප්‍රතික්‍රියාව
  alias: ['commands'], // අමතර නම
  desc: 'Get bot\'s command list.', // විස්තරය
  category: 'main', // කාණ්ඩය
  use: '.list', // භාවිතය
  filename: __filename // නියෝගය ලියා ඇති ගොනුව
}, async (message, chat, user) => {
  try {
    // පණිවුඩය හැදෑරීමේදී පණිවිඩය සාදන්න
    let replyMessage = `
👋 Hello ${user.pushname}!

> 👨‍💻 Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ Menu 👨‍💻

╭───────────────────────▢
│─ʙᴏᴛ : Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ
│─ᴠᴇʀsɪᴏɴ : 1.0.0
│─ᴏᴡɴᴇʀ : Ｓᴀɴᴛʜᴜsʜ.Ｓ
│─ɴᴜᴍʙᴇʀ : 94772726437
│─ʙᴀsᴇᴅ ᴏɴ : Ｇɪᴛʜᴜʙ
│─ᴡᴏʀᴋ ᴛʏᴘᴇ : Ｐᴜʙʟɪᴄ
│─ᴘʀᴇғɪx : [ . ]
╰───────────────────────▢

*┌✦📥 DOWNLOADER 📥✦*
│➣ .fb <url>
│➣ .ig <url>
│➣ .gdrive <url>
│➣ .twitter <url>
│➣ .tiktok <url>
│➣ .mediafire <url>
│➣ .song <query>
│➣ .video <query>
│➣ .apkdl <link>

*┌✦🔎 SEARCH 🔍✦*
│➣ .yts <text>
│➣ .wiki <text>
│➣ .dog
└➣ .animegirl
│➣ .define
│➣ .githublstalk
│➣ .img.*
│➣ .usanews*
│➣ .business.*
│➣ .movie2*
│➣ .weather1*
│➣ .horo*
│➣ .google*
│➣ .couplepp*
│➣ .snumber*
│➣ .tech*
│➣ .weather*
│➣ .yts*

*┌✦🧠 AI 🧠✦*
│➣ .ai <text>
│➣ .gpt <text>
│➣ .lamda <text>
│➣ .remini <text>
└➣ .lalaland <text>
│➣ .copilot <text>
│➣ .gpt4 <text>
│➣ .lalaland <text>
│➣ .obfus <text>

*┌✦👨🏻‍💻 OWNER 👨‍💻✦*
│➣ .restart*
│➣ .block*
│➣ .unblock*
│➣ .jid*
│➣ .gjid*
│➣ .shutdown*
│➣ .clearChats*
│➣ .broadcast*
│➣ .setpp <reply with photo>*
└➣ .setbio*
└➣ .update*

*┌✦👥 GROUP 👥✦*
│➣ .del <reply to the msg u want to delete>
│➣ .add*
│➣ .setdesc <text>*
│➣ .promote*
│➣ .demote*
│➣ .hidetag*
│➣ .tagall*
│➣ .tagadmin*
│➣ .invite*
│➣ .kick*
│➣ .leave*
└➣ .link*

*┌✦📃 INFO 📃✦*
│➣ .menu*
│➣ .allmenu*
│➣ .script*
│➣ .ping*
│➣ .system*
│➣ .runtime*
└➣ .alive*
└➣ .repo*

*┌✦🤹🏻‍♂️ CONVERTER 🤹🏻‍♂️✦*
│➣ .tomp3*
│➣ .tourl*
│➣ .convert*
└➣ .sticker*
└➣ .ccconvert*

*┌✦🗃️ OTHERS 🗃️✦*
│➣ .joke*
│➣ .support*
│➣ .fact*
│➣ .quote*
│➣ .hack*
│➣ .define*
│➣ .about*
│➣ .owner*
│➣ .news*
│➣ .weather*
│➣ .gpass*
│➣ .fact*
└➣ .githublstalk*
│➣ .dare.*
│➣ .truth.*
│➣ .fact.*
│➣ .question*
│➣ .rvideo*
`;

    // පණිවිඩය සහ ඡායාරූපය යවනවා
    await message.sendMessage(chat.id, {
      audio: { url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/main/plugins/bgm/alan-faded.mp3' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: user });

    await message.sendMessage(chat.id, {
      image: { url: 'https://i.ibb.co/10pBNvp/Speed-Maxx.jpg' },
      caption: replyMessage
    }, { quoted: user });

  } catch (error) {
    console.log(error); // දෝෂය ලියාපදිංචි කරනවා
    message.reply('' + error); // දෝෂය යවනවා
  }
});
