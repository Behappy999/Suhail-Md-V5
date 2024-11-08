const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/NIGERIA";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ☯︎ᴇᴍᴍ ʏʏ✌︎💨" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348168768580";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168768580";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_35_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFCcXVhaXBrQVpBNkk0cXc0M09zVjBkSzVqMnJiZ1p2RUo2ZFF2b2FZeWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdSdXJrOEkwUmdDQWRxdFFCdm9NcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGJlNzllZDQtNzFiOC00MDczLThlZjQtZjQ1NjA4OGQ1Y2E1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDEwNyxcbiAgICAgIDE1MSxcbiAgICAgIDk2LFxuICAgICAgMTI0LFxuICAgICAgNDMsXG4gICAgICAxMjksXG4gICAgICAxNTAsXG4gICAgICA1MyxcbiAgICAgIDE4MyxcbiAgICAgIDE2MyxcbiAgICAgIDE2NyxcbiAgICAgIDIxNixcbiAgICAgIDksXG4gICAgICA3OSxcbiAgICAgIDEwOSxcbiAgICAgIDIwOCxcbiAgICAgIDEyMSxcbiAgICAgIDE5MixcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTA2LFxuICAgICAgMjM1LFxuICAgICAgMTU5LFxuICAgICAgMTQsXG4gICAgICA4NSxcbiAgICAgIDEzOSxcbiAgICAgIDcyLFxuICAgICAgMjA4LFxuICAgICAgMTIzLFxuICAgICAgNTUsXG4gICAgICA4NyxcbiAgICAgIDI0MyxcbiAgICAgIDkzLFxuICAgICAgMjUxLFxuICAgICAgMjI0LFxuICAgICAgMTQsXG4gICAgICAxNjIsXG4gICAgICAxMzAsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEaG5La0tFSTdiZ2JnR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYXljSVI3YlRWdVlwMXJOeHNoVUtSZUZmandNYktXMWhrR1BUTGpTVkZXQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5VlJrcUxUUkpBWGVTYXB4QldkYitvNHMzZUJ6Qm9aWWZyRGhqU2htNWRPYzZaejM3b1RiUVJJdEg0NEpzNVJNWmVyRmo4eTdRalk3aWhTVWZOaDdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUSDZBNVR1dW9wOUR1bnBJcFpoQyt2Rjk3a0xnQWM3andvNlRmVUdrZ0tKVk02NytyMUFjVlNjMTR4a3JkNjRmN1poeHM0WEQ3QlllVTBqbXZKT1JnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg3Njg1ODA6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTA4NjY2MTkxMDc2OTo5NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjg3Njg1ODA6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgwODEyOTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFERGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREVy5qc29uIjogIntcImtleURhdGFcIjpcImF5NjVtZHUxbUpSL0FGRHBWaVhtNDlZVzVMd3EyVXFCMHVxaGNlNEpmL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTUwMTc1OTIzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRERZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaUhqT3Z1RUh2d2ZrandNSUtGVnhQb3c3OHRlTm82NG1hZHlhWFJvZkxPaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzcwODA4OTYwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMSwyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDU0NTkzNTA1MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREWi5qc29uIjogIntcImtleURhdGFcIjpcIlByOG40V0N0VzNaQUM0djlQOVFTbHJQL1UxaGgvM0xpd0Jkd2YyQUYwWmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI0NTQ1OTM2MzYyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRERiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaXpla1VTS1RQU3ZtVTg0ZThRSUVuU1R1dWhVbkR1TUQxb0xRSVVZODdmST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzcwODA4OTYwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMywwLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDY3ODIzNTg3M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREYy5qc29uIjogIntcImtleURhdGFcIjpcIk45RWR1RjB1aUttZGtlWnRCamNBN3ZXS2EvTG0rbm1HT0lKcEMzSEltVjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI0Njc4MjM3MzQzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRERkLmpzb24iOiAie1wia2V5RGF0YVwiOlwieHFjdlk0NXpyWXVFSnJKa1pHYVpsdkdaSWxHWHBpbFdkRC9qM3hnQWRsND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzcwODA4OTYwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzI3Mjg3NDA1MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREZi5qc29uIjogIntcImtleURhdGFcIjpcIjJub3pNbk1LK3lEYTdXUlVMZjJoRlEvTm9JRmtkY2pvaHBpTlNJanhaTUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzEsNCwwLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzQzMDc0NDkxN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREZy5qc29uIjogIntcImtleURhdGFcIjpcIkNiQ2t6V3V5SUFiUU5iNlhVemhPMXUwdk53a29MWkswMmk5T2cyQmNnTUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzUsMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc0MzA3NDY2NjRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFERGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDWGVZTU4yQnpTRCtzcXhJaVRUUUdLeTMrSjFJeEcrdDl6ZjQ0UWdOVXpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3NzA4MDg5NjAsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsNiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgwODEyODU4MjdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFERGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5Q0ljM29xUTA4TnR4dEFmNWpJaXFndTExYjlhVnJRMU8ralNJOXM5eHJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3NzA4MDg5NjAsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOls2LDAsNV19LFwidGltZXN0YW1wXCI6XCIxNzI4MDgxMjg3MTI3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ☯︎ᴇᴍᴍ ʏʏ✌︎💨 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Behappy💨",
  ownername:process.env.OWNER_NAME|| "Behappy💨",


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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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


