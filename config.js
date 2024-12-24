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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349032889467";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349032889467";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_37_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1DcnpCL1ZyVFY4dFJvTG1kVEdLNFVzSWpGQ21mS21Gc1pQSW1zSlNkVEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzMjg4OTQ2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FENjZBMDU2RDFBRjFBRDk1ODVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1MDcyNjQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRhMTREOWIyUTIyRGp4VGVkY2tDMVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTA3NjkzNTQtYzAxMy00OGM2LTliYTgtZTk3NmNjNzVlM2UyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMjIzLFxuICAgICAgMTQ0LFxuICAgICAgMTg2LFxuICAgICAgOTYsXG4gICAgICAxMTIsXG4gICAgICAxNDksXG4gICAgICAyMjEsXG4gICAgICA3MyxcbiAgICAgIDYsXG4gICAgICAyMDMsXG4gICAgICAyMjMsXG4gICAgICA1MSxcbiAgICAgIDE3MSxcbiAgICAgIDkzLFxuICAgICAgMTk3LFxuICAgICAgMTU3LFxuICAgICAgMzAsXG4gICAgICAyMzUsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE1OSxcbiAgICAgIDE5NixcbiAgICAgIDIxOSxcbiAgICAgIDIwMyxcbiAgICAgIDIzMyxcbiAgICAgIDExMSxcbiAgICAgIDg5LFxuICAgICAgMTA4LFxuICAgICAgMjA3LFxuICAgICAgMTY1LFxuICAgICAgMjQ3LFxuICAgICAgMTgxLFxuICAgICAgMTkzLFxuICAgICAgMTQ4LFxuICAgICAgNzgsXG4gICAgICA4OSxcbiAgICAgIDEzNSxcbiAgICAgIDEzMSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnlOeStNR0VQUzJyTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYTVZBcXg0YnBBbW1tY0Irb2tCY0RsSXF1dGZqc01KV2RkbHVxaVgzamhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkYrakowSzh4eGlDRm92dW1SK0lzblh4U1piaFZlNjlKNDU1eHhLRWRIcWJwU2xPbmFEQkZPVmZid0JyejNkRXhJUWNId3VOMHhpRmpvTDY0QUludWpBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllOazU0a2NDSUtUa0VJQXhmcWJjaU5TRGEvQXVPT083WGRPNUdXZUx1QXZ3UGxoMlIzNmVoUldyejh6ajc3eFBMOWZUd0tlbzNGTmRhMTZzNGdPSGdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjg4OTQ2NzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTQ1MDM2Mzg4MzcxMzoxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDdXJ2ZXlv8J+RveKYoO+4j/CfkoBcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzI4ODk0Njc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUwNzI2MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKaG1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpobS5qc29uIjogIntcImtleURhdGFcIjpcIkM5SXJFR0pZZ1BLUjNDdUJvbkxjRHRkT3ByY250Z3MwTkxqZEJJY2JISFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxOTQ2MTM0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzM1MDcyNjM0ODE1XCJ9Igp9"  // PUT your SESSION_ID 


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
