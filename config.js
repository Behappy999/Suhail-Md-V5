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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349031115224";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349031115224";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_22_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICA5MCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN2JxbVFNNjJXRm40dHd3NjNLeUtiVVI4V3lZZkhKYVVSZG1kMXQxeGNTcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ3JVckVXX2JTVy1Ea0dzRkhxUG5od1wiLFxuICBcInBob25lSWRcIjogXCIxOTM2M2Y2Zi05YTMxLTRhODgtODU0NC0wNWQyZTViOGFkZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAxMTAsXG4gICAgICAyNTQsXG4gICAgICAyNDQsXG4gICAgICA0MyxcbiAgICAgIDE0MSxcbiAgICAgIDg3LFxuICAgICAgMTM3LFxuICAgICAgMjUxLFxuICAgICAgNjQsXG4gICAgICA4OSxcbiAgICAgIDM3LFxuICAgICAgMSxcbiAgICAgIDEwNixcbiAgICAgIDE0NCxcbiAgICAgIDk5LFxuICAgICAgMjA5LFxuICAgICAgNTIsXG4gICAgICAxNzcsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE4NCxcbiAgICAgIDE4OCxcbiAgICAgIDIxNSxcbiAgICAgIDEwNixcbiAgICAgIDI0MSxcbiAgICAgIDg1LFxuICAgICAgMjI5LFxuICAgICAgNzksXG4gICAgICAxNTAsXG4gICAgICAzMSxcbiAgICAgIDE2MSxcbiAgICAgIDYzLFxuICAgICAgMTQ2LFxuICAgICAgMTUyLFxuICAgICAgMjI3LFxuICAgICAgMTMwLFxuICAgICAgNCxcbiAgICAgIDI0NixcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IbGhKSUhFUEdhc2JzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYjFzOTVkYXpRYTM2cTMvaGZqWld2L25UUjZqRk5nN2VWOTRxeCs3MXZGdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHbDRkUm1zdjNzYjZyK1pBOGJSRlFNMHlSSFBEVlZnS3AvVG9ObzRqSHdoczMvV29wS0NlWHRNdzh4ODNuK3RFeWEvc0k5ZzlOQVlnbmhiR3JGcUxCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCTjh5SjZDY0I1RHdQSGZCN3J0ZHJCdlRNbExuamhCdElZME9QK3BZUlViSE1UVTVPNzVFL241d3NGV2dDdUFOYndDd2hhbEt6TnRoUUJ6YXVhTmJqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzExMTUyMjQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NzI2MTEwMTA1ODQ3OjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMxMTE1MjI0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MTUwOTY3XG59Igp9"  // PUT your SESSION_ID 


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
