const { cmd } = require('../command');

cmd({
    pattern: 'downloadpreview',
    desc: 'Download preview for images and videos',
    category: 'download',
    filename: __filename
}, async (conn, mek, m, { from, quoted, args, isCmd }) => {
    try {
        // Assuming the media link is passed as the first argument
        const mediaUrl = args[0];

        // Send the preview image with a download button
        await conn.sendMessage(from, {
            image: { url: mediaUrl }, // Show the image
            caption: 'Click the button below to download the media',
            buttons: [
                {
                    buttonId: `download ${mediaUrl}`, // This will be the command for the download
                    buttonText: { displayText: 'Download File 📥' },
                    type: 1
                }
            ],
            footer: 'Preview before download',
            headerType: 1
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        conn.sendMessage(from, { text: `Error: ${e.message}` }, { quoted: mek });
    }
});
