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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_44_03_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVlBlM2FkbW55aVM4K0hDbG52TkE1VU4xNFZpTFYwRUFmN1o1QTlXM0lBQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiME1zdzZmdXRUa0M1U0hkQzVENlI1d1wiLFxuICBcInBob25lSWRcIjogXCJhZThmMDZiZC0wNGUxLTQ3ODEtYTNmZS0zN2I1OTQyZThjMDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxMDgsXG4gICAgICAxMzksXG4gICAgICAyNTMsXG4gICAgICA5NCxcbiAgICAgIDI1MCxcbiAgICAgIDg3LFxuICAgICAgMjAyLFxuICAgICAgMjA4LFxuICAgICAgMjQ3LFxuICAgICAgNDUsXG4gICAgICAxOTcsXG4gICAgICA2MyxcbiAgICAgIDU2LFxuICAgICAgMjI1LFxuICAgICAgNCxcbiAgICAgIDM2LFxuICAgICAgMTIsXG4gICAgICAyNDksXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgNjYsXG4gICAgICAxMzQsXG4gICAgICAyMTEsXG4gICAgICAxNzIsXG4gICAgICAxNzAsXG4gICAgICAxOTYsXG4gICAgICAyMjMsXG4gICAgICAxNjIsXG4gICAgICAyMDUsXG4gICAgICAxNzEsXG4gICAgICAxMDYsXG4gICAgICAyMjMsXG4gICAgICAxMDcsXG4gICAgICAxMzUsXG4gICAgICA5NSxcbiAgICAgIDIwMixcbiAgICAgIDgsXG4gICAgICAzNCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3YjRiQUtFS1NBcXI4R0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaHVNZEZBcG10dFBFUDRxaXlPNmlmaUgvZytING9ENkp5dUlYQjAwZU5Fcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDcGZQaEM4T2JROWtHMERKOUFSeHRtM04zbHZJSXA5RWdKbXM1dXNmSGxuYnNqOUNuK2Y3azR0UWFOc2Joa3JrRDdtcnJTQUtNcW9tZlhFSDc2cDJBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCbkRwNW92ZVAxUkFhVEZGdzJjLzBNNnJ0NUdkalRHb0prMWNCcG02LzlOY3VMNm96MzlhZm5QOXNjTENWcHROYlhUS1RjZnk4TnRSdFdURWVkNGhoQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzI1NzA0MDg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwOTM2Nzg3MTkwMTM6OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzI1NzA0MDg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzNDIxNDc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTERPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMREouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzQlI2TjlDWWlRV2JLKzluUnZXbHFmaTRPWVJVYnFHd256RzVZZGMvVUdnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3ODY2MTg3OTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MjM0MTYxMjM5NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxETC5qc29uIjogIntcImtleURhdGFcIjpcIkRyNjA3VGt1RzRzdmpjQVFaYm1yR1hjcUtVb2d5ZTZsZ0MrTldyQ2RlbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc4NjYxODc5OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDM0MTk5Njg5ODBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMRE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPSkUrNUxBdW41N2Fwak9EQWJsbkRqYkxYZUN0WVdURXVMQ1NYNVd6L2ZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3ODY2MTg3OTgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MzQxOTk3MjM1M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxETi5qc29uIjogIntcImtleURhdGFcIjpcIkR3UjRQeG5Ob0tiWHJTRTRmQjg3WUJWeWFzMWRRdm5YbmpRbWRBV0dBS2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc4NjYxODc5OCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQzNDIwMTgwMjM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTERPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ2grMXZ4WWoxa3dwWWJIRFEydnVRVTRISEdwSHNESFA0cEJOeTJkNC9aWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzg2NjE4Nzk4LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDM0MjAyNTQ2NjhcIn0iCn0="  // PUT your SESSION_ID 


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
