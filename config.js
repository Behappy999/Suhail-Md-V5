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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348168768580";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168768580";




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

global.api_smd = https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID "SUHAIL_14_10_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhpL2lseW96OFY2bTRWaTdieHlYWmtrdU05dDREalo0U2ZJMWxZUWRRNkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkQxZUtvaFZRU3VpYnlXakR5WUVnVndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmRhY2ZlY2ItOWZkNS00MjhmLWJhODgtZTIzOWViZTAxMDNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDg2LFxuICAgICAgOTEsXG4gICAgICA1LFxuICAgICAgMjMwLFxuICAgICAgMTg2LFxuICAgICAgMTUxLFxuICAgICAgMjU1LFxuICAgICAgMTQzLFxuICAgICAgNyxcbiAgICAgIDksXG4gICAgICAxNDgsXG4gICAgICAxNzQsXG4gICAgICAxNzksXG4gICAgICAxNDMsXG4gICAgICAyMjAsXG4gICAgICAxMCxcbiAgICAgIDEwMCxcbiAgICAgIDQ0LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjAsXG4gICAgICA3MyxcbiAgICAgIDE3MSxcbiAgICAgIDEwNixcbiAgICAgIDEyNyxcbiAgICAgIDE4OCxcbiAgICAgIDc3LFxuICAgICAgMTk0LFxuICAgICAgMTE4LFxuICAgICAgMTAyLFxuICAgICAgOCxcbiAgICAgIDY0LFxuICAgICAgMjU1LFxuICAgICAgMTg0LFxuICAgICAgMTcsXG4gICAgICAxMzcsXG4gICAgICAxMzIsXG4gICAgICAxMjgsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYTNncUFPRUs3ZDY3b0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1TaHBqNklacVNKZWYwZWd6L3Z6a0dnN0dwaE5Pa3B2UDRQQy91UXdmRUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTkY0M2x5NjdiRndReWw2YVg1UVQ0QTMrVzc1d0NleCt4WDJPOHpJTysyWVBFNkxhVEd5ejRiSXNwQmVLSHJYc0ZiUWxRNFRNRGhNN29wd0t2MHRXaFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiem5BRVNhY3pFRzBkS2tGNFVienNNN29CUW1wR2lxSDJIQ25WSXBUc2Uyc1Q1cXFCUUVUd25vQ015Tk1Zc3Y2UklFcng2Y2p4UW92UWFZZnhwaDRwQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4NzY4NTgwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTA4NjY2MTkxMDc2OToxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODc2ODU4MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MDEyNTk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2Z2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCQVJUOWQ3VUtrd2RqSDk1SGxrcU5Hak43UUp4UXhQUmRHVllrRzREN1lzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4MjUyNDUxNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTEwNTU1MDUzNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9mdy5qc29uIjogIntcImtleURhdGFcIjpcIkNPcEtoS3pxNCtpNk9LQlBiT3ZjNXN0Y05XR1g0OUdvaU1nWGxpazRGVlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzgyNTI0NTE1OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2OTc5NDg0ODBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZnkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtMmFRSXhnajZZLzdkU2ZZK3dVMmk0cUhVQmJzMGhBUzhtanZPdHVXVnFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4MjUyNDUxNTgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MDEyNTc0MzY1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2Z6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiT01uc1V5MUtiZVQzZ2htVzVmOHhhOEM0dWp5RkpDTGhic2ZsWFdiZ1RwQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODI1MjQ1MTU4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQwMTI1NzY0MzhcIn0iCn0="  // PUT your SESSION_ID 


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
