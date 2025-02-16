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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349112947349";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349112947349";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_02_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib1k4S2U3UnRvYmhXNlFRS25ENVhvNXRGaHRWQ29neUc3ano3MEIxcnJHbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMzRjczdpeUxSRmVma0RGU3hULVN2QVwiLFxuICBcInBob25lSWRcIjogXCI2YmMwOGVjYi04YzFmLTRhZWUtOGY4Ni1jMWZkZjE1MmVkYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMzksXG4gICAgICAxODcsXG4gICAgICAxNDcsXG4gICAgICAxNjIsXG4gICAgICAxNyxcbiAgICAgIDE1LFxuICAgICAgNzEsXG4gICAgICAxOTIsXG4gICAgICA4NixcbiAgICAgIDE2MSxcbiAgICAgIDE3LFxuICAgICAgMTIsXG4gICAgICA5LFxuICAgICAgMTE4LFxuICAgICAgMzksXG4gICAgICAyNTUsXG4gICAgICAwLFxuICAgICAgMTAzLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDg1LFxuICAgICAgODgsXG4gICAgICAyMDIsXG4gICAgICA2MCxcbiAgICAgIDE1MCxcbiAgICAgIDE3MixcbiAgICAgIDE1MixcbiAgICAgIDIzLFxuICAgICAgMTUsXG4gICAgICAyNixcbiAgICAgIDQ3LFxuICAgICAgODksXG4gICAgICA3MCxcbiAgICAgIDYsXG4gICAgICAxMDksXG4gICAgICA1MyxcbiAgICAgIDIwMSxcbiAgICAgIDM4LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc2RjEzNzY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTEyOTQ3MzQ5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NTE2NTkwMTY4OTAyODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IKzE3OFBFT20xeUwwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic2JmVkNhejRNdmNuSCtTKysxaUxOZDAzOC9jTHZ6QWh1UCtzQmZ0dzZEOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwWVlGOWhIcTFZOEZlMlpBeHVOYkgwQllPRlhEVFUyL0JxWXExUXBmWUJsS2hyRDlJYURldUpCc0NyUGt6U1hMUVduMnkwUVhJdjJvTEZuMGtPWnloQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDL1k5bzFuUzZxNmNMUDBaY05LbUZJK3NFT0VPc3JIOUZyTEcwSWU3Rk5TL0Z5RUp5SGlhMFNaQWs2VGV4OG01V285V2F6SXNPZkRuOWhsRWRYNTJpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTEyOTQ3MzQ5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzk3MjU1NDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
