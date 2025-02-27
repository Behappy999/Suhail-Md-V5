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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349064140887";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349064140887";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_50_02_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic21DZXJRSHlYSkdXZFJ6RnlhMnorMHplbmRGYWcybXA4aDZNOCs1dmEraz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibkZ2eHBQTndSYkNWNy10YWlFcXhwUVwiLFxuICBcInBob25lSWRcIjogXCJkMjUyODA5ZC0yMDA2LTQwNjgtYmRkNi0yM2I0ZmIyMmEwMjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgNDAsXG4gICAgICAxNTAsXG4gICAgICAxMjMsXG4gICAgICAxNTEsXG4gICAgICAzLFxuICAgICAgMTg0LFxuICAgICAgNjgsXG4gICAgICAxNjIsXG4gICAgICAyMTgsXG4gICAgICA3NCxcbiAgICAgIDIwMyxcbiAgICAgIDE3MSxcbiAgICAgIDIxMSxcbiAgICAgIDM2LFxuICAgICAgMTkxLFxuICAgICAgMjQ5LFxuICAgICAgMTgyLFxuICAgICAgMTE3LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMjI0LFxuICAgICAgMTU1LFxuICAgICAgNSxcbiAgICAgIDY5LFxuICAgICAgNTUsXG4gICAgICAxOTUsXG4gICAgICAxODIsXG4gICAgICAyMDUsXG4gICAgICA2LFxuICAgICAgMjE3LFxuICAgICAgMTUwLFxuICAgICAgMjM0LFxuICAgICAgMTE2LFxuICAgICAgNzMsXG4gICAgICAyMzcsXG4gICAgICAyNDQsXG4gICAgICA5OSxcbiAgICAgIDIxMSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHVub3FRR0VMWDBnNzRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnTXZXUEtTZ3R5QzhCVUlCVmtUSTQzNm0xdCs0TzJiUUFIMmNJUy94anc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZBY085QTNlblBaWmhtaXVLZEdVaVNHVWt2ZjYrRVU3RitSS3ZIUlpxVTZMeUNZWUEvcU9EakkxbkxIeE9RWGlHZWVwK25rUy9RbTFMLzNkYi8yVGpnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInU3eUQxMndpeDBVbEREMkJSU0hrSVI2UGF3SWZkSUZtaERNSHdGQzVrTlFMZU0yR1gyZzFzY0tjUEozWXA4L2NRNHdvSmJFL0tVemxET1d3amFseENBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NDE0MDg4NzozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJpZGRpY2tcIixcbiAgICBcImxpZFwiOiBcIjU2ODczOTU2OTUwMTY0OjMxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NDE0MDg4NzozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDcwMDIxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVrdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWt2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0pUSTBaYlhuVmtvTDFLc0xVK09STWVLKzdwd3I4ZFF6V1gvTncraFp5WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjg2NjcyMzc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDA3MDAyMjA2MjNcIn0iCn0="  // PUT your SESSION_ID 


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
