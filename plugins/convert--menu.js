const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

// Registering the 'convert' command
cmd({
  pattern: 'convert',               // The command pattern to trigger
  desc: 'get bot convert cmd.',      // Description of the command
  category: 'convert',               // Command category
  react: '📩',                       // React with this emoji when command is used
  filename: __filename               // Current script's filename
}, 
async (client, message, data) => {    // Async function triggered when the command is called
  try {
    const envConfig = await readEnv();  // Reading environment variables
    let commandList = { 'convert': '' };

    // Looping through all registered commands
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += envConfig.PREFIX + commands[i].pattern + '\n';
      }
    }

    // Creating the message to send
    let messageContent = `
      👋 Hello *${data.pushname}* 👨‍💻\n\n
      > 👨‍💻 𝓣𝓱𝓮𝓷𝓾𝓵𝓪 𝓟𝓪𝓷𝓪𝓹𝓲𝓽𝓲💫\n
      ─ *ʙᴏᴛ* : Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ\n
      ─ᴠᴇʀsɪᴏɴ : 1.0.0\n
      ─ᴠᴇʀsɪᴏɴ : 1.0.0\n
      ─ɴᴜᴍʙᴇʀ : 94772726437\n
      ╭───────────●●►\n│📜 CONVERT COMMANDS\n│───────\n
      ${commandList['convert']}\n
      ╰───────────●●►
    `;

    // Sending the audio message
    await client.sendMessage(data.from, {
      audio: { url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0208.mp3' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: message });

    // Sending the image with caption
    await client.sendMessage(data.from, {
      image: { url: 'https://i.ibb.co/10pBNvp/Speed-Maxx.jpg' },
      caption: messageContent
    }, { quoted: message });

  } catch (error) {
    console.log(error);
    message.reply(`${error}`);
  }
});
