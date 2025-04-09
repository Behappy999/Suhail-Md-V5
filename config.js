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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348130693968";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348130693968";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_23_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICA0LFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUlBVcmdWTEFjSWpXdUxzbnpDVXVBbklJZ2VYdCtQbDRuTHQrZ3dpWVA3UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidUxhOGRPZXlSS2U1SkFES05HWEdoQVwiLFxuICBcInBob25lSWRcIjogXCI4NWRiNWM1Yy1jY2M4LTQyMTQtOTk3NC03NTM0MmQ3OWRhOTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyMzIsXG4gICAgICAxMCxcbiAgICAgIDIzLFxuICAgICAgMjA1LFxuICAgICAgMzUsXG4gICAgICAxMjIsXG4gICAgICAxNCxcbiAgICAgIDQ0LFxuICAgICAgMTE3LFxuICAgICAgMTY5LFxuICAgICAgOTksXG4gICAgICAxMTMsXG4gICAgICAzMyxcbiAgICAgIDE1MCxcbiAgICAgIDY1LFxuICAgICAgMTExLFxuICAgICAgMTE5LFxuICAgICAgOTEsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICA3NCxcbiAgICAgIDE1MSxcbiAgICAgIDk3LFxuICAgICAgMTk2LFxuICAgICAgNjMsXG4gICAgICA0LFxuICAgICAgMjA1LFxuICAgICAgMTkwLFxuICAgICAgMjAsXG4gICAgICAxOTQsXG4gICAgICAxNCxcbiAgICAgIDEyNixcbiAgICAgIDc3LFxuICAgICAgMjE0LFxuICAgICAgOTQsXG4gICAgICAxODYsXG4gICAgICAxNDMsXG4gICAgICAxMTEsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS04xNkE1NkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzA2OTM5Njg6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDaGFvc0NcIixcbiAgICBcImxpZFwiOiBcIjI1MjgwNjU5MDEzMjI0NTozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdVBoY2tDRUt6TjJiOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImgwQWk3VG96V252WWNHNXFLbVZzL3YyaWxjcWd4Q2JneVhUSSt1a0lwQmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzMxZ21ZV2grenR1dlAyakNrc2ljOHdZaWlxeVZWOHhkMFEwNjVJbXUwWUNHbXJycHlDQjNZYy92WFBVMDIrM3dRbU40dy9NeFNVTWNXWXdpOG1WQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRG94RXBMMHE5OXlkWm5SbDRyWlRpQk1JRFUvOVlrSjYzNnpEWjgyL3FPdHllR0VKRlZ0VjNOWDhienJVRFRVTUtPS25JVFVHcHZqNjdyVUkvN3JFaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzMDY5Mzk2ODozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0MjAxMzkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlBkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKUGQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmbTl2UzRVc0pPNHRVUFl4TTU2cDUxU3JCRU1zWG1XTGVsNUtVL05tL1JrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5MDA0Njg5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ0MjAxMzkzNTEzXCJ9Igp9"  // PUT your SESSION_ID 


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
