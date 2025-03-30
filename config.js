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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348066727741";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066727741";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_03_03_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSW8vWEIrYmtleU1vVXY4Z0daWDZYNDFURzVYYlp0Si9yZXg2Zkd3TjlyZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVd3Mng0bFlSeUtjMFh1TXpuOGhrUVwiLFxuICBcInBob25lSWRcIjogXCJjMjQ2MjM5NS04ZTFkLTRiNmMtODAzMi1hNzA5MThhMDNlNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMTEyLFxuICAgICAgMTQ0LFxuICAgICAgMTkxLFxuICAgICAgMTgxLFxuICAgICAgMTYwLFxuICAgICAgMTIzLFxuICAgICAgMjIsXG4gICAgICA5NixcbiAgICAgIDE1LFxuICAgICAgMjE2LFxuICAgICAgMjMzLFxuICAgICAgMTE5LFxuICAgICAgMTg2LFxuICAgICAgMTk4LFxuICAgICAgMTM4LFxuICAgICAgMCxcbiAgICAgIDU5LFxuICAgICAgMjUxLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDE4OCxcbiAgICAgIDIxMSxcbiAgICAgIDI0NSxcbiAgICAgIDEyNCxcbiAgICAgIDYsXG4gICAgICA4MCxcbiAgICAgIDEsXG4gICAgICAxODEsXG4gICAgICAxNTAsXG4gICAgICAyNDgsXG4gICAgICA4OSxcbiAgICAgIDE0OCxcbiAgICAgIDgsXG4gICAgICAxNTUsXG4gICAgICAyNTAsXG4gICAgICA3NyxcbiAgICAgIDIyMyxcbiAgICAgIDEyLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYmV5WkFKRUlpQ3BiOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9rTGVCSmhNVDRaeDlwYnlpQU52N1pvZ21yM1Z3K1FjQ2dEcUROMzFOQXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZFRXN1Ivd29KMVBaN0ltdTE4WWEzcU5HZm9JUnZScWlUYmNYaTV1dHFrZzlyUEYxY3BmRFdDaFA1VVVMVEM3QksrWGVUMWxHQUkxRlVQbWRwVVptaWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic3BJWTI5UVp6WU9VbXJ6cXAyZDhFK0ZESzNZTysxQmRxR0htMWNEM2ZkempRUERlZjgrQ080d3dzZ2RJbGpqWmhGM1RXNnFDVm9rUENwKzRiTEtGQ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2NzI3NzQxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTEzMjgwNTkxOTEzNDg6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2NzI3NzQxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzMzM5Nzg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGpBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMakEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUNi9rNGphRTZta2p0ZXlHWXBiejFpbkdvNGxSbENNQU5XSjc5Wk9QSjY0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0NTA2ODE2MjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MzMzOTc5MDc5MFwifSIKfQ=="  // PUT your SESSION_ID 


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
