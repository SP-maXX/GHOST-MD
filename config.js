const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "9qFB1D7Z#OqL_XARayh9-VGFyF-1iq6-OXRrNhA1p3k3c1utpaVY",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "╭───────────────────────▢\n│─ Hellow Boss, I am Online Now! 🌚👋\n│─ ʙᴏᴛ : Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ\n│─ ᴠᴇʀsɪᴏɴ : 1.0.0\n│─ ᴏᴡɴᴇʀ : Ｓᴀɴᴛʜᴜsʜ.Ｓ\n│─ ɴᴜᴍʙᴇʀ : 94772726437\n│─ ʙᴀsᴇᴅ ᴏɴ : Ｇɪᴛʜᴜʙ\n│─ ᴡᴏʀᴋ ᴛʏᴘᴇ : Ｐᴜʙʟɪᴄ\n│─ ᴘʀᴇғɪx : [ . ]\n╰───────────────────────▢",
SUDO_NB: process.env.SUDO_NB || "94771599796",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE:"true"
};
