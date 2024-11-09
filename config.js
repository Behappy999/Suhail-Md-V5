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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_14_07_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGJrN0JjNU55bzI0NzdYRVFLWEV4ME9UZFZLZzM3MWduRmN5NW9BVHMyaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiejVYVWYwQXNSWlcwLUtQRVZuUjBQd1wiLFxuICBcInBob25lSWRcIjogXCI2NWVlMGUxYy03YjJiLTRjNWItOGIzNi1iMzFkMmUzYjdkYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDI0MSxcbiAgICAgIDIzNCxcbiAgICAgIDEzMSxcbiAgICAgIDE1NyxcbiAgICAgIDEwNyxcbiAgICAgIDE1MCxcbiAgICAgIDE3MyxcbiAgICAgIDIwNCxcbiAgICAgIDYzLFxuICAgICAgMTkyLFxuICAgICAgMjQzLFxuICAgICAgMSxcbiAgICAgIDkxLFxuICAgICAgMjI2LFxuICAgICAgMTU3LFxuICAgICAgMjM5LFxuICAgICAgMTQxLFxuICAgICAgMTU0LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAyMTksXG4gICAgICAyMjIsXG4gICAgICAxODUsXG4gICAgICAxNyxcbiAgICAgIDU4LFxuICAgICAgOTgsXG4gICAgICAxODcsXG4gICAgICAxMDUsXG4gICAgICAxNDYsXG4gICAgICA3NCxcbiAgICAgIDE3MixcbiAgICAgIDgwLFxuICAgICAgMTkzLFxuICAgICAgMyxcbiAgICAgIDEzMSxcbiAgICAgIDUsXG4gICAgICAxNzUsXG4gICAgICAxNzUsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYTNncUFPRUluWnZia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1TaHBqNklacVNKZWYwZWd6L3Z6a0dnN0dwaE5Pa3B2UDRQQy91UXdmRUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYkRQb0ZmaGZML0VoRm9aUXI5OUtYOUxKcnhxMnJpOGVRUk11WEVzRUFpQWd4bVVqYk9aTXo5cTBRTWF4THd1SFp5N1hncWFlVUxrcUh1V2gzeFhTaFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVHRqb3NpT3BxNE5NMmc2TUo3SERGRStzbVBpdHA3enhlc2xaWUNzcWZianJrOEdtbllCZktOQkZKMFdhMkM3aW0xYnZ4UXpPSktldDQ4dXZkZHY4aFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4NzY4NTgwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDkwODY2NjE5MTA3Njk6OThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY4NzY4NTgwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTYxMjI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2Z2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCQVJUOWQ3VUtrd2RqSDk1SGxrcU5Hak43UUp4UXhQUmRHVllrRzREN1lzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4MjUyNDUxNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTEwNTU1MDUzNFwifSIKfQ=="  // PUT your SESSION_ID 


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
