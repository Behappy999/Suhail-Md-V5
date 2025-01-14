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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349072324644";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349072324644";




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
global.read_status = process.env.AUTO_READ_STTUS || "false"
global.save_status = process.env.AUTO_SAVE_STAUS || "false"
global.save_status_from =  process.env.SAVE_STTUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STTUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_26_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgODcsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBZ095ak1ZdUtuOGwxZGRtSFpkRGY0SEtuVHdOd1h2NEFHeTJqR2VCMnVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzIzMjQ2NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM3M0VERTc3RkFCQ0UwRDVBQTA2QTczNEZDRkExQUM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDM3MzU4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzIzMjQ2NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdDRTc3QTNBNTg3OURBN0E0MDc3RkY5RUU1RTBGOTZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDM3MzU4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpSVVDY0haaVRLMkxpbVE4RFREUmJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjljY2RiYmEwLTQ2ODctNGY3MC05NjUxLTQxY2NlZjM1MDQwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxMjAsXG4gICAgICA2NixcbiAgICAgIDIyMCxcbiAgICAgIDE2MyxcbiAgICAgIDkyLFxuICAgICAgMjEwLFxuICAgICAgMTUzLFxuICAgICAgMjA1LFxuICAgICAgNjIsXG4gICAgICA2LFxuICAgICAgMTY2LFxuICAgICAgMTAxLFxuICAgICAgMTg1LFxuICAgICAgMjI0LFxuICAgICAgMjA0LFxuICAgICAgMTY4LFxuICAgICAgMTk2LFxuICAgICAgNDUsXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAxNDIsXG4gICAgICAyNDEsXG4gICAgICAyMzQsXG4gICAgICAxOTgsXG4gICAgICAxMzUsXG4gICAgICAyNTUsXG4gICAgICAyMTksXG4gICAgICAxMTgsXG4gICAgICAxODEsXG4gICAgICAzNixcbiAgICAgIDU3LFxuICAgICAgNDQsXG4gICAgICA5MixcbiAgICAgIDY3LFxuICAgICAgMjMsXG4gICAgICAxNjYsXG4gICAgICAxOTMsXG4gICAgICA1MSxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUCtqbVhzUXgrR0J1d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBdUp3eml0amlud3dkb1Jsbyswd085ME96L1loWUt1dUxNM2dLY2Nsc0NjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjg1TzdGdEIvUjFQT25hZnlneWEyd0dmSnZYSER1TTl1K1FJYllOaEdkbnNoQW9tc3ZTeU52N1RBYkZVaitJdy95aGFNbjkzU0FiSCtJVFY4NkU0b0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpObjFqTXhmVkRZV0dzajBtNzQyWUV0SnB1Mng4bzZwY09iTm9EcVkwWUNnZDJ1Q2pRRmRMVmpCeG1yZEdPZDFVVzl4TDdPN3hIclFDS2Y5ZjZ6V0RBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MjMyNDY0NDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkV4Y2x1c2l2ZSBNZWRpYVwiLFxuICAgIFwibGlkXCI6IFwiNDMyNTAzMjA3OTQ2MTozMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzIzMjQ2NDQ6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MzczNTc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3UyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDdTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHZGx2cmlnUGRhQkFIbXQ3RjFvczFsTDRxeE9IM080QWtxQS81ZURiMGNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1ODM2MzkwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MzczNTg2MjQwXCJ9Igp9"  // PUT your SESSION_ID 


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
