


// ███████╗██████╗ ███████╗███████╗██████╗     ███╗   ███╗ █████╗ ██╗  ██╗██╗  ██╗
// ██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗╚██╗██╔╝╚██╗██╔╝
// ███████╗██████╔╝█████╗  █████╗  ██║  ██║    ██╔████╔██║███████║ ╚███╔╝  ╚███╔╝ 
// ╚════██║██╔═══╝ ██╔══╝  ██╔══╝  ██║  ██║    ██║╚██╔╝██║██╔══██║ ██╔██╗  ██╔██╗ 
// ███████║██║     ███████╗███████╗██████╔╝    ██║ ╚═╝ ██║██║  ██║██╔╝ ██╗██╔╝ ██╗
// ╚══════╝╚═╝     ╚══════╝╚══════╝╚═════╝     ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝






const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd({
    'pattern': 'groupmenu',
    'desc': 'get bot group cmd.',
    'category': 'group',
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
        // Read environment variables
        const env = await readEnv();

        // Create a command list for group category
        let commandList = { 'group': '' };

        // Loop through all commands and add them to the group category
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                commandList[commands[i].category] += `${env.PREFIX}${commands[i].pattern}\n`;
            }
        }

        // Create the message text
        let messageText = `👋 Hello ${pushname}\n\n`;
        messageText += `📜 GROUP COMMANDS\n\n${commandList['group']}\n`;
        messageText += `╰───────────●●►    `;

        // Send the audio message
        await message.sendMessage(from, {
            'audio': { 'url': 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0232.mp3' },
            'mimetype': 'audio/mp4',
            'ptt': true
        }, { 'quoted': quoted });

        // Send the image with the command list
        await message.sendMessage(from, {
            'image': { 'url': 'https://i.ibb.co/10pBNvp/Speed-Maxx.jpg' },
            'caption': messageText
        }, { 'quoted': quoted });

    } catch (error) {
        console.log(error);
        reply(`${error}`);
    }
});
