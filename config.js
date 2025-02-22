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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349137599522";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137599522";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_33_02_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicUZ0SU5kM0dYRzRtSE43Vmp0aG8vWkJVMHhaQUlXbEJBTGtMQWw5aHIxTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZU1jRVQwMGtTbi1VZ29iTmFNb2RkUVwiLFxuICBcInBob25lSWRcIjogXCJhZGQ5YTBmZi0xYmJhLTRjYTEtYTM5MC0wMjJiODc3OGViNjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMjEzLFxuICAgICAgOTUsXG4gICAgICA2NSxcbiAgICAgIDE1NyxcbiAgICAgIDIwOSxcbiAgICAgIDExMCxcbiAgICAgIDE4OCxcbiAgICAgIDI3LFxuICAgICAgMTY0LFxuICAgICAgMTk4LFxuICAgICAgMTgxLFxuICAgICAgMzMsXG4gICAgICAxNDAsXG4gICAgICA2OSxcbiAgICAgIDgyLFxuICAgICAgMjA5LFxuICAgICAgMTkwLFxuICAgICAgNTAsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDUsXG4gICAgICAxNTQsXG4gICAgICAxNTEsXG4gICAgICA4MyxcbiAgICAgIDE1LFxuICAgICAgMjAwLFxuICAgICAgOCxcbiAgICAgIDE4MyxcbiAgICAgIDE3MixcbiAgICAgIDIyNyxcbiAgICAgIDEzNixcbiAgICAgIDU4LFxuICAgICAgMjE5LFxuICAgICAgMTgxLFxuICAgICAgMjcsXG4gICAgICAxOTIsXG4gICAgICA2MSxcbiAgICAgIDkwLFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhZVkU1QTFDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3NTk5NTIyOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTE3MjM1NDg0NzEzOTQ6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG5ycVdvUXB2dmx2UVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQU0lGQW5hUnJBV3kxNUVLa1RoQ3B1ZjNldk9kV0xkLzNtRU9EcjVYL0hRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhzYmZPcUVMSWpaTWtxZFVRdFpaRnNLMU0zZGVzV1lPb25UemdMYjhVODVIS2NpWmw2Vlc2UWNEVUd1ZHAyQVpLbThsL0NRMVpnTGsrcjhsNDJyQ0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNSdlZvOGRwelhSTjlYY0g4Nk5sbGdtNWlndXlTZWlMV05WS0JzL2tyOXBEdDhaTHpndld4S1FHRFF0clRZK2V3ak13YWYxaUxIdXdHMlFVMHVKY0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzc1OTk1MjI6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDIwOTU3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNSUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1JRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSjVQWTQvQUdsTjEyZnIyRWFNYjZGMDZwOEgra2JWbE1EUmhrOTI5dFFtUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjI5ODM2MDksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDIwOTQwNjg4NVwifSIKfQ=="  // PUT your SESSION_ID 


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
