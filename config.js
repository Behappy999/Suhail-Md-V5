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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348132570408";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348132570408";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_28_03_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3Yy9LTmdYNmliZ3hiMFNjVHhsSk1VTVVMRG5ISzFOUjV0dFhlUXNTeVhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMMUJFVmsxWlFZQ0xDdWhhbHdwYVF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjYWRiODcxLWNlMDUtNDNiNS05YzIzLTgwMjVlYTZkYWRiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDI0MCxcbiAgICAgIDIsXG4gICAgICAxMTQsXG4gICAgICA5NixcbiAgICAgIDE3MyxcbiAgICAgIDEzMixcbiAgICAgIDc3LFxuICAgICAgMjU0LFxuICAgICAgMTkzLFxuICAgICAgMTEzLFxuICAgICAgMjI5LFxuICAgICAgMTM3LFxuICAgICAgNTUsXG4gICAgICA0MCxcbiAgICAgIDE2MCxcbiAgICAgIDI0NSxcbiAgICAgIDE5MixcbiAgICAgIDE2LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxMTYsXG4gICAgICAyNDUsXG4gICAgICA0NCxcbiAgICAgIDk2LFxuICAgICAgNjQsXG4gICAgICAyMzUsXG4gICAgICAxNTIsXG4gICAgICAyMzUsXG4gICAgICAyMSxcbiAgICAgIDE4LFxuICAgICAgMTQsXG4gICAgICA1NyxcbiAgICAgIDQ0LFxuICAgICAgMTI4LFxuICAgICAgMTc1LFxuICAgICAgMjQzLFxuICAgICAgMTcwLFxuICAgICAgNTcsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3YjRiQUtFTVN0ajc4R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaHVNZEZBcG10dFBFUDRxaXlPNmlmaUgvZytING9ENkp5dUlYQjAwZU5Fcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZWUh3Zk5WaXFtUGRkeHZuMHg3U0l6Vjd0dHF6VHgwblRrNHR2Ukk3cGN1blBRTGdyWk9IUjhwWlRqSVFuSVpJbUVKL29XOEJwMHd1TVNkSnJ6SjVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkQUFrcjFEaENNc1FnSWlkYlBxN1R5dFB6aE5ydnY0UVBHZThiMXR4UmREcmFXVFZvQXQ3bXYwY3RVWlB4ZTM3ajBVUjVDUlJpL2ZCdjFmaCtlYjRoZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzI1NzA0MDg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwOTM2Nzg3MTkwMTM6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzI1NzA0MDg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyOTg0OTA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTERKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMREouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzQlI2TjlDWWlRV2JLKzluUnZXbHFmaTRPWVJVYnFHd256RzVZZGMvVUdnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3ODY2MTg3OTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MjM0MTYxMjM5NVwifSIKfQ=="  // PUT your SESSION_ID 


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
