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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348165820748";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165820748";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_04_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg2LFxuICAgICAgICA3NixcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgODksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidXpEYmxSR3gza0Z6eGsyZWdySEFTblUzS2x0MzM5NkNBaEhidXVFZW9FND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY1ODIwNzQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNEU0ODg0QzQ3MTE2NTY5RjdCNEEyRkM5REVBM0FEMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDMyODk0ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY1ODIwNzQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQTdGOUZCQjhGNkU1OTdENTM3NEVBMkE5OEU4Q0I4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDMyODk0ODdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1MyT1pNT3VSemk3bUdhU0Rra29Od1wiLFxuICBcInBob25lSWRcIjogXCI3NjAzMThkYi0yYjA1LTQ0ZjgtYTJlZS04ZjhkNGVmZGEwMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgNjMsXG4gICAgICAyMDksXG4gICAgICAxMzgsXG4gICAgICAxOTIsXG4gICAgICAxMzksXG4gICAgICAyMjYsXG4gICAgICAxNzIsXG4gICAgICAxMjIsXG4gICAgICA5OCxcbiAgICAgIDYxLFxuICAgICAgMTMxLFxuICAgICAgMTg3LFxuICAgICAgMTQyLFxuICAgICAgMzksXG4gICAgICAyMjEsXG4gICAgICAyNDYsXG4gICAgICAxMjYsXG4gICAgICAxNSxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDIzNyxcbiAgICAgIDU1LFxuICAgICAgMjQ4LFxuICAgICAgODAsXG4gICAgICAxNjIsXG4gICAgICA0OCxcbiAgICAgIDEwLFxuICAgICAgMzAsXG4gICAgICAyMSxcbiAgICAgIDE1MCxcbiAgICAgIDE5NCxcbiAgICAgIDE2OCxcbiAgICAgIDEyNCxcbiAgICAgIDIzMixcbiAgICAgIDQxLFxuICAgICAgNjMsXG4gICAgICAxNzksXG4gICAgICAxNjksXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVJYS0syWDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjU4MjA3NDg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1MDI4ODM0ODMyNTU4OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiZ2hzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9TeTRZREVJVDVvYjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBTXZDSDBjQlk5aU80a2Y1QkVTYThxUlBmTjQ1eHdYMmM2WGJTN2M5NVhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInluVDgwbkZiYllzSEgwUVhoTVU3V2FVT080c0Z0c1ByYzRWek5ac2Q4VEdUK1pBeFQxcjFnRmtXTTkzUWdtYjVUWUFVU1E5RDhHQTdEQ0ZFckNOMkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjcxTGhwc20zQ2pjQUJJNHd4S3Y4Zy8vaXY3bVRBb0hlWGFGVS9nczczN2Y0VkRoN3NLbjBxSWlHalIrY1FPaWVHdDl6bUZRbEJzTy80MjRHazFBQURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjU4MjA3NDg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDMyODk0ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZUJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFlQi5qc29uIjogIntcImtleURhdGFcIjpcImk2MnZJRCtoN2lZcm12NFVlNm9VK3FyeGlteC9UU3orTjI1M1RVdHpWNEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODE5MTI4NjU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDMyODk0ODM5MjJcIn0iCn0="  // PUT your SESSION_ID 


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
