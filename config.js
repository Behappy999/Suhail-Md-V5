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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349112947349";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349112947349";




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
global.readmessage = process.env.READ_MESSAGE || "null"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STTUS || "false"
global.save_status = process.env.AUTO_SAVE_STAUS || "false"
global.save_status_from =  process.env.SAVE_STTUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STTUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_43_01_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkF5K2V2bnZzU2RISkxENjRZZ09FUnVXRklwc2JJSjJFMUlhV3hqaUxON289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInA4UXpXQmNyUndtSXM0cXUzRXdwU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2E2NWU1M2YtMmI2MS00MmM0LWExNjItMWE3NjdiZjQ3ZGM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDIzNixcbiAgICAgIDg5LFxuICAgICAgNDQsXG4gICAgICAxNDcsXG4gICAgICAxMTgsXG4gICAgICAxMTMsXG4gICAgICAxMzIsXG4gICAgICA4MixcbiAgICAgIDE5OCxcbiAgICAgIDI1LFxuICAgICAgOTMsXG4gICAgICA5NyxcbiAgICAgIDkyLFxuICAgICAgNzgsXG4gICAgICA1MCxcbiAgICAgIDE3NixcbiAgICAgIDIzMixcbiAgICAgIDE2MSxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyNyxcbiAgICAgIDE0LFxuICAgICAgNzksXG4gICAgICAyMDUsXG4gICAgICAyMTEsXG4gICAgICAxNDYsXG4gICAgICA3NixcbiAgICAgIDYwLFxuICAgICAgMjIyLFxuICAgICAgMjUxLFxuICAgICAgMTgwLFxuICAgICAgNzUsXG4gICAgICAxMixcbiAgICAgIDU5LFxuICAgICAgMjQ3LFxuICAgICAgNjksXG4gICAgICAxODMsXG4gICAgICAyNDYsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNDQ4NEtOU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExMjk0NzM0OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDUxNjU5MDE2ODkwMjg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRCsxNzhQRU56dWtMd0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNiZlZDYXo0TXZjbkgrUysrMWlMTmQwMzgvY0x2ekFodVArc0JmdHc2RDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUldRbDZ4VENUb2JxeitRcVB1SGdlN2ZSNXpCQUZkY3FNd3BuUS92S2QzVXlzdnNHb1VScTN3QnFSUjJZYno0YnlWZjJUajAxYjM3YTBQSkt4Q085aEE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOHdGbXZKTGpPR2lNd0VrR0E0OE9IWFRCU05xN2FLenppclJZYWtkbTEyWEZyNjVpYnJMM2VCRjNiWGlqZkg4TVR3bGs0SlprMnBMMmFOUkpEV1ZkQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMjk0NzM0OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM2NzE4MTc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ25RXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDblEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDbmh1a21LVThqVmdlRHprTEtqY0UzakNQVlhKQVVDd3JDL0VycEpIaGZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNjAwOTQwNDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNjY4NjUwMDU1OVwifSIKfQ=="  // PUT your SESSION_ID 


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
