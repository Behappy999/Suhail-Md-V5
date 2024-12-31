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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348103283453";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103283453";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_24_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICA4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgNyxcbiAgICAgICAgNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielQ5QkpReWNod3NDT3VYV2VIWG1uejBweFpjdVN0SnZDcHBneXArN016RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTVLcFpJZVpRQk9CZ0thUlVPMkxFQVwiLFxuICBcInBob25lSWRcIjogXCJiY2JmYjZiMS03NDEyLTQxYjQtODczYS1kODA2MmI4ODZmNWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICA2NixcbiAgICAgIDIwOSxcbiAgICAgIDgzLFxuICAgICAgNTksXG4gICAgICAyNDAsXG4gICAgICAxMTMsXG4gICAgICA3MCxcbiAgICAgIDMzLFxuICAgICAgMTA1LFxuICAgICAgMjM5LFxuICAgICAgMTYxLFxuICAgICAgODksXG4gICAgICAxNzEsXG4gICAgICAxOTYsXG4gICAgICA1NCxcbiAgICAgIDc1LFxuICAgICAgMjEsXG4gICAgICAyMzIsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMTAwLFxuICAgICAgMjQ2LFxuICAgICAgMTkzLFxuICAgICAgMjMyLFxuICAgICAgMTgxLFxuICAgICAgMTA4LFxuICAgICAgMTQ2LFxuICAgICAgMjI2LFxuICAgICAgMTExLFxuICAgICAgNzgsXG4gICAgICAyMjMsXG4gICAgICA4OSxcbiAgICAgIDEzNixcbiAgICAgIDEwNixcbiAgICAgIDI1MSxcbiAgICAgIDIxNSxcbiAgICAgIDI0NCxcbiAgICAgIDM1LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZEdHVnSEVQWFl3YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpVVpCdUxrd3VhOG9vOUtFRE9CM0pkQWpibUd4RTViem9XVzVQdEZhV253PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjN0M0Z0ZG9JY2pmK1hvSjNiSjNPeVBMalF0Q0J3NjFMbnhLOFplQnh1WkNxdkVnOTRlOTFhbVFYQjJUeFdnVXVGemJlUU9zQ3MrbUhWU1JTU3FYbUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhGOGExNXlWa0g3ZEF3VHFHK29iMTlKWXR4THFlakJFV2ZKaWtXbXU0OXVualo3aWxVYkdiQmhYcm1OM0lDNDhmSXVrOGZpc1RxamJNZEVZVXJpaWhBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMzI4MzQ1MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGlrYWNoaVwiLFxuICAgIFwibGlkXCI6IFwiMTkyMTE4MTgyMTE3NTYwOjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAzMjgzNDUzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0MjEwNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDTktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNOSi5qc29uIjogIntcImtleURhdGFcIjpcIllrcDRrT3oyYmdINDVWVHc2Q1NJb2o0WVgxUjlXRmtZOXJBVXRLZG9HZnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5ODA0NTM4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ05LLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZnFwVjY3b3d4YkNwOWtqSjE3bTc0WTJud2h2dUVydzVlS2lNUWRlM2VEcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDk4MDQ1MzgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM1NDIwNzY3MDIyXCJ9Igp9"  // PUT your SESSION_ID 


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
