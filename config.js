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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348129748787";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129748787";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_42_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkczd3THM2enRCczhxNVljQVkxYzQ0Yklub3YwUGliQ0w2anJEc1hBRUNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZTlhnX3RKcFJqaXJIQlZwRFZyS2RnXCIsXG4gIFwicGhvbmVJZFwiOiBcImMzYjQwNmMyLTJiODQtNDFlMC1hMjU5LWE4OGVhYTM3YzVjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE0NyxcbiAgICAgIDE4OSxcbiAgICAgIDIyMyxcbiAgICAgIDcyLFxuICAgICAgMTEwLFxuICAgICAgMixcbiAgICAgIDE1MCxcbiAgICAgIDI2LFxuICAgICAgMTAsXG4gICAgICA2MSxcbiAgICAgIDE4MCxcbiAgICAgIDE0LFxuICAgICAgMTQ5LFxuICAgICAgMTE1LFxuICAgICAgNCxcbiAgICAgIDI0MixcbiAgICAgIDE3OCxcbiAgICAgIDE3NyxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTM4LFxuICAgICAgNjksXG4gICAgICA4LFxuICAgICAgMjcsXG4gICAgICA2NyxcbiAgICAgIDU0LFxuICAgICAgNjUsXG4gICAgICA3OSxcbiAgICAgIDM2LFxuICAgICAgMTIxLFxuICAgICAgNDUsXG4gICAgICAyMTIsXG4gICAgICAyMTYsXG4gICAgICAxOTEsXG4gICAgICAxMDUsXG4gICAgICAyNTIsXG4gICAgICAwLFxuICAgICAgMjE5LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJRTUhSMkhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI5NzQ4Nzg3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NDM2NzQzMTYwMjMwMzoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdlBuTHNKRUs3K2piNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJ1L2x1RkxjVld5cmoyUDJWaW5vTjU5M3JSYVMyZjJyblB3V2RjQVFWMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUdHRzdsaElWTFpFak44eFFLRzJlaGJiblM1RFhHRytma1l1Nkd0V2xFN2F6RE9zemQ3SmpmN2FTSUFscW5ORyszcmMvTWVXUUJvckhVSE9wdlE5alE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicWl4OGs4MTduS1lkVnFTRHJjS1JXSHdFQUQ0WGRkV0lIUEFRam5PUGVKQk5PNUZSZXl6TEVjZU5PQ2pTNDRUTU1EOGZvNEd6RE1MRGRlZ2dWNHAxalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyOTc0ODc4NzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDg2NTMyOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
