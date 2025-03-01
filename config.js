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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349017333376";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349017333376";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_41_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICA5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvLzVheHhsYWd6ekFQeGpPTldUVlVScTdWMXJyNmRlYTc3blNsR01vakpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOZGpaQnk1RlJMZUx2ZGdzaUVTbk1nXCIsXG4gIFwicGhvbmVJZFwiOiBcImUzMzcyNmI5LWE5OTEtNDY5NS05Y2ZhLWY0YmZjOWNiN2I1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAxMjgsXG4gICAgICAxMTMsXG4gICAgICA1NyxcbiAgICAgIDExNyxcbiAgICAgIDQzLFxuICAgICAgODgsXG4gICAgICA2OCxcbiAgICAgIDIyNSxcbiAgICAgIDE2LFxuICAgICAgMjI4LFxuICAgICAgMTgyLFxuICAgICAgMTUsXG4gICAgICAxMTUsXG4gICAgICAyNDAsXG4gICAgICAzMSxcbiAgICAgIDc3LFxuICAgICAgOTMsXG4gICAgICA0MyxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDQyLFxuICAgICAgMjAzLFxuICAgICAgNjksXG4gICAgICAxMzUsXG4gICAgICAxMzIsXG4gICAgICAxMTgsXG4gICAgICA5MixcbiAgICAgIDUwLFxuICAgICAgMjE5LFxuICAgICAgMTIyLFxuICAgICAgOTcsXG4gICAgICAyNTQsXG4gICAgICAxMDgsXG4gICAgICAyOSxcbiAgICAgIDEzMyxcbiAgICAgIDI0MyxcbiAgICAgIDEyLFxuICAgICAgMzcsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTE1V0RaWlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTczMzMzNzY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzQzMzg4NTA3OTE0NTM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNzM2OU1DRU9lY2pMNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIld2eGpiL21oVzZWQlZkVWFaZGNWR3BXYkhaWUNyenI3bE9oMDN0MmRtVHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3JTOENhclArVjZ2LzhCZkNjbVgzRlcvbWtFR2tpcUwxMit5V2Z0Z05IU0lhamhHd0Yxd3A4b1M2L3Z3WVZhY0I4enpJOERsakhYa2RrRDh6dGZrZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0tHaldrbGR6U3EvWDdiTFhRSEdza2U0L3JzNU11eit0WTlSM1RlTWlhajJ6SW1jU252RVVMWGdqMDdveithREZQVnJTRnFtL2I2dElTQVRQUm5zQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNzMzMzM3NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDgzNjQ2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5zaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnNpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0ZQMFMrZisvK0JSN3NsVmwzcU9oaGt0eDZvNWRkcm1LZG9CelpkVEdyST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTI3MDI5NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDgzNjQ2MjcyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
