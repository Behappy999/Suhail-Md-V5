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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348084653045";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084653045";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_12_03_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICA4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicHpOTHQxYUtLbEYyMmRDQXhXTnJFYXlRYnZENkhYRWRRMExFNlJLY3hkWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDg0NjUzMDQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQThGMjNERjkwMUQzODgzQThDN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDE1Mjk1NDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDg0NjUzMDQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUQ5MEQ3QTc1NTkwQ0Y0MDRBRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDE1Mjk1NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLVRHMmg3bENRa3lsNk9OWlVoc1hGd1wiLFxuICBcInBob25lSWRcIjogXCJhZmUxNzAwOC02NDVjLTQ4ODktODUwMy0wOGMzMGVlMTc3N2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxNTQsXG4gICAgICAxNDksXG4gICAgICAwLFxuICAgICAgNyxcbiAgICAgIDIsXG4gICAgICAxNTMsXG4gICAgICAxNTUsXG4gICAgICA4OCxcbiAgICAgIDYwLFxuICAgICAgNTksXG4gICAgICAxMSxcbiAgICAgIDE5OCxcbiAgICAgIDQwLFxuICAgICAgMjUsXG4gICAgICA0NCxcbiAgICAgIDYwLFxuICAgICAgMjE3LFxuICAgICAgNTEsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICA1OCxcbiAgICAgIDI0NSxcbiAgICAgIDg5LFxuICAgICAgNzcsXG4gICAgICAyMjEsXG4gICAgICAyMzUsXG4gICAgICAyNTUsXG4gICAgICAzMSxcbiAgICAgIDkxLFxuICAgICAgOCxcbiAgICAgIDE0OCxcbiAgICAgIDIxNCxcbiAgICAgIDE4NCxcbiAgICAgIDE4MCxcbiAgICAgIDkwLFxuICAgICAgODQsXG4gICAgICAxMDksXG4gICAgICAzMixcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09HeXBOd0dFTVhEdHI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUkNmOThwS2Y2U2ZRSllzUlV6dVZwaHVIcnFIenlkLzhSUzVscHR2OGVSTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2djNiYkY5S2YwNjNESi9pblg3eStXTXgrbS80cEZmN3M2WEJrWlJyMVg2ZDg1UnRuTmN3YjVSVGJ0dHNKT1VWMWVlMlFjSDNoQ0VHcGVaMlZTMHVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlSFdMWFlkc2swRTJXc29qcmtNWDhQWXVoc1VMdTFESlZpdWY1RWN0UGxwd283elZQYnVYU0gxVC9yb0NwcE94SVF6NkRjYzNsT0l4amlDQTJGUkppQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODQ2NTMwNDU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlN3ZWV0IEd1cmwgSGFubmFoXCIsXG4gICAgXCJsaWRcIjogXCIxNDc4ODQ2OTk4MjQyMjY6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODQ2NTMwNDU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDE1Mjk1NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcDdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpwNy5qc29uIjogIntcImtleURhdGFcIjpcIkZnTTVtY0NiM1BIKzkvcDltNXUzL04zTkEzeWJUVWh1VER1R1VLTWs5M0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwNDE0NzA0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzQxNTI5NTQ3ODI3XCJ9Igp9"  // PUT your SESSION_ID 


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
