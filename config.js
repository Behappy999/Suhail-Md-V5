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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347025382979";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347025382979";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_58_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUzBIYjdNZVhOck9tVGgvZGJvaFRDVUFCNzFHV2d6S3Z0MEZmdnhoVlQ4cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI1MzgyOTc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTY0M0Y1RkM5MDdENkUzMTNCOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUxNTMxMTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI1MzgyOTc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTc5MkEzNjQzQkFDNzg0ODYzNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUxNTMxMTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMHlsYl9KaE1TcXVSdWo5cVlPSWJUZ1wiLFxuICBcInBob25lSWRcIjogXCJhZmUxMGUxMy1jMjFmLTRiODMtYTIyNS0xOGE5MTA5ODBhZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMjMzLFxuICAgICAgMTUsXG4gICAgICAzNCxcbiAgICAgIDIzLFxuICAgICAgMjE1LFxuICAgICAgMTIyLFxuICAgICAgMTYzLFxuICAgICAgMTM1LFxuICAgICAgMTgxLFxuICAgICAgODEsXG4gICAgICAxNjQsXG4gICAgICA1NCxcbiAgICAgIDE4LFxuICAgICAgMTQ1LFxuICAgICAgMTI2LFxuICAgICAgMjQyLFxuICAgICAgMTYsXG4gICAgICAyNDMsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMjI0LFxuICAgICAgNTksXG4gICAgICAxMzYsXG4gICAgICAxODYsXG4gICAgICA2OCxcbiAgICAgIDMsXG4gICAgICAxMCxcbiAgICAgIDI1LFxuICAgICAgODcsXG4gICAgICAxMDEsXG4gICAgICAyNixcbiAgICAgIDEyNSxcbiAgICAgIDEyNCxcbiAgICAgIDEwNyxcbiAgICAgIDIzNixcbiAgICAgIDIzNSxcbiAgICAgIDMwLFxuICAgICAgNzUsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTDF0MllRMTZ1eHV3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpHT3NGeUphOCtlNHNTNzViUTRmR1RkRjlTdFlFUGo4SmcrSEIwQ0ZPQjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOTM5THBSUSsvSUo3ZHQ5bk5VYUdFQ0ZCV203MUFERlR5U2xtZ3M4bm9pbFhuU0VFTFJFejlZUkxta3Nha0FKUHhnd2lySmYrQVAxWW9EZlN2TDZuQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2hTK3FBQ3JHN21IQzlKTWhqU1lxazBXbDcrSERDdDVjWTNqTC9GMlk0TFk1UjAyNFpWM1g0dFN2K2tFakM5aU1pQkc1aCtBeWFjQWJBS2JUTEsxalE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1MzgyOTc5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzY3Nzc3ODAxOTU0Nzg6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU3Vz8J+kq1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTM4Mjk3OToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTE1MzExNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1zUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXNSLmpzb24iOiAie1wia2V5RGF0YVwiOlwicnFkNTd5V25hcWlKTG4yNGpDNDVxcWdlUUl1NVYwb0hkKzRhSGZRQnJFUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTQ4MjU2ODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTE1MzExNTQ1NVwifSIKfQ=="  // PUT your SESSION_ID 


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
