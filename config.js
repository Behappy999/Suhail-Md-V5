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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349019879923";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019879923";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_13_03_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUWWFVeDZxakcvRjJXczQ3VXVZVWhURng1UitvVG1pTTBXbUM2TkNXVjhvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTk4Nzk5MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRERERkJFMUZBQzBGQkRFMkJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTI5MTk4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2bU5KODUyVlN4aU5VNXE2VnlfRE13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3MzE5MTU2LThkZDMtNDMxNC04YmUxLTFkYzIwNTEzN2ZlNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAxNjYsXG4gICAgICAzMSxcbiAgICAgIDE3LFxuICAgICAgMTcsXG4gICAgICA2MixcbiAgICAgIDIxMyxcbiAgICAgIDI1MixcbiAgICAgIDI2LFxuICAgICAgNjYsXG4gICAgICA0LFxuICAgICAgOSxcbiAgICAgIDE5MyxcbiAgICAgIDE0MixcbiAgICAgIDEwMCxcbiAgICAgIDIxLFxuICAgICAgODIsXG4gICAgICAxNzEsXG4gICAgICAxMzMsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICAyMjMsXG4gICAgICAyMDUsXG4gICAgICAxNTAsXG4gICAgICAxMTgsXG4gICAgICA2MyxcbiAgICAgIDEyNixcbiAgICAgIDExMyxcbiAgICAgIDI1NSxcbiAgICAgIDYxLFxuICAgICAgMTQ2LFxuICAgICAgMjMwLFxuICAgICAgOTYsXG4gICAgICAzMixcbiAgICAgIDgwLFxuICAgICAgOTYsXG4gICAgICAxNDYsXG4gICAgICAyNTEsXG4gICAgICAxMTEsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01HVzdQMEhFTU9EcUw0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVFNcmdMVy9NWGY3WmtEQUkwSmhpa0kxRkh6aXp6V2lqK0g0b0lPTmdRYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHTFNyV25qVEwxN0VkSjhRSnZkbitQNklqSG1xdFdDQTZrNk1vMmJSdW56SDVmbjJ6ZFlJcU9hcXo2VUl3bndYZEpaaVg5T0xuMXVKb2U1THFxTVREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZNEpoUUlXM1VIV3lUWjBGUmV0VmJqTlAwMVhtVy9ScHVrTzcrakl5UWxDM0JhWjQzMnNFS3d3T3Zqb3ovMTdVZ3Rid3d1bXlVQjhvd0F6cWlYSERpdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTk4Nzk5MjM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NDE0MzEzNzc5MjAxODozN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTk4Nzk5MjM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTI5MTk3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9rZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tkLmpzb24iOiAie1wia2V5RGF0YVwiOlwicXdSSTluMStkeE45OU15YlBJZExZWUxCQ3RRc0Nvb2hXM3JJRWF0a3VGQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTQyOTY0NTQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDEyOTE5Nzk0NjZcIn0iCn0="  // PUT your SESSION_ID 


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
