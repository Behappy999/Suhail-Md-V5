const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348060943532";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348060943532";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_16_02_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODQsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdNU2t4TDNPejYyRTJCalNPWGo3TGc1N0dkeFFTK1ZJNVFMdE1XL3RGSEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5mRjgyR3k3Um1lMDByMGlZbFpudXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTcwYjgyOTctZjg2Zi00ZTZmLWE5NjEtMmE1Y2FlZjI4MDg3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDIxNixcbiAgICAgIDE5NSxcbiAgICAgIDEwNCxcbiAgICAgIDEyMixcbiAgICAgIDExMSxcbiAgICAgIDIzNyxcbiAgICAgIDc2LFxuICAgICAgMjUzLFxuICAgICAgMTM5LFxuICAgICAgMzksXG4gICAgICA4MSxcbiAgICAgIDE2MyxcbiAgICAgIDIxMCxcbiAgICAgIDU4LFxuICAgICAgMjI3LFxuICAgICAgNjAsXG4gICAgICAzNSxcbiAgICAgIDUxLFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMTM1LFxuICAgICAgMTAzLFxuICAgICAgODQsXG4gICAgICAxMSxcbiAgICAgIDIxMSxcbiAgICAgIDIxNixcbiAgICAgIDE3NCxcbiAgICAgIDkxLFxuICAgICAgMTQwLFxuICAgICAgMzMsXG4gICAgICA5NCxcbiAgICAgIDgwLFxuICAgICAgMTI1LFxuICAgICAgMzMsXG4gICAgICAyMTksXG4gICAgICA2LFxuICAgICAgMTIwLFxuICAgICAgNjcsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1dRQTZFREdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjA5NDM1MzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJpY2hpZXMgUGhhcm1hY2V1dGljYWxcIixcbiAgICBcImxpZFwiOiBcIjE5NTIxMjMwMzQ4NDI1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJTdjkwREVKVCs4YjBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPUllRNldSNG45TGdPNHJsZUcwRTVhbW9POGpjYTVMZGl6YXJyVnNoYVJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5ZYVJrSTVDbzl0cFl1TEFPWkdjQlB0MnppWUk0bklybDRpODhCbi81YUNzVnlGT0d2dVB0K3dtOWJ0ZStIRUgxSisvdWZjdTNFa3gvcEJtS1NBZkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndWZ0d5ZWN6ODN3eUpCRjI4dzNFdGRSc29FaS9sK04za24vcC8xdmF4YUJmVnA1L0JQMnZQeWYvZXlRK09jamRlRTNqdzhDOTFXTFR4OUJEcjJjMmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjA5NDM1MzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDA0MDY1NTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
