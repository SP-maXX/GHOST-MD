const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

// Define the command with pattern 'download' and related properties
cmd({
  'pattern': 'download',
  'desc': 'get bot download cmd.',
  'category': 'download',
  'react': '💻',
  'filename': __filename
}, async (
  message, 
  match, 
  data, 
  { 
    from, 
    quoted, 
    body, 
    isCmd, 
    command, 
    args, 
    q, 
    isGroup, 
    sender, 
    senderNumber, 
    botNumber2, 
    botNumber, 
    pushname, 
    isMe, 
    isOwner, 
    groupMetadata, 
    groupName, 
    participants, 
    groupAdmins, 
    isBotAdmins, 
    isAdmins, 
    reply 
  }
) => {
  try {
    // Read environment configuration
    const env = await readEnv();

    // Initialize a command list for download
    let commandList = { 'download': '' };

    // Loop through all commands and append to the command list
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `${env.PREFIX}${commands[i].pattern}\n`;
      }
    }

    // Prepare the message with the command information
    let messageText = `👋 Hello ${pushname}\n\n`;
    messageText += `💻 Download Commands\n\n${commandList['download']}\n`;
    messageText += `╰───────────●●►`;

    // Send audio and image with the message
    await message.sendMessage(from, {
      'audio': { 'url': 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0231.mp3' },
      'mimetype': 'audio/mp4',
      'ptt': true
    }, { 'quoted': quoted });

    await message.sendMessage(from, {
      'image': { 'url': 'https://i.ibb.co/10pBNvp/Speed-Maxx.jpg' },
      'caption': messageText
    }, { 'quoted': quoted });

  } catch (error) {
    console.log(error);
    reply(`${error}`);
  }
});
