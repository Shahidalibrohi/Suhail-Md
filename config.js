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
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_01_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlaGhzWEVYN09abGNRb1ViOGdXd3N3bFpnMDhwSUpGRVA3dUUySkJBS0lBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMzIyNTk3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUNBRDZDRTZBQkVCNEEwODlGRjg2REI5REEwQzMyMUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODUwNDcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEzMjI1OTc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RDAzMDA0REFGMDI3RTlCMjkwQjdCQUExRENGQjUwRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTA0NzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkRGVHZxV0lSWVdEY0NYNGRNWUxGUVwiLFxuICBcInBob25lSWRcIjogXCIyNmIwZjNlZi0yMzc4LTQ0YWMtODA5MC01NWFhYjQ3N2ZhYjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMixcbiAgICAgIDI0MSxcbiAgICAgIDYsXG4gICAgICAxNjgsXG4gICAgICAyNDYsXG4gICAgICAzNyxcbiAgICAgIDE0OCxcbiAgICAgIDI0NyxcbiAgICAgIDE1NixcbiAgICAgIDE2NyxcbiAgICAgIDE1MyxcbiAgICAgIDY0LFxuICAgICAgMTkxLFxuICAgICAgMTA3LFxuICAgICAgMTIsXG4gICAgICAxMzgsXG4gICAgICAxMzUsXG4gICAgICA4NCxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDU3LFxuICAgICAgMzMsXG4gICAgICAyMDAsXG4gICAgICAxNjMsXG4gICAgICA3NCxcbiAgICAgIDEwOSxcbiAgICAgIDI5LFxuICAgICAgMTEwLFxuICAgICAgMTg4LFxuICAgICAgNjQsXG4gICAgICA1NyxcbiAgICAgIDQ4LFxuICAgICAgNjIsXG4gICAgICAxOTAsXG4gICAgICAxMDEsXG4gICAgICAzOSxcbiAgICAgIDg5LFxuICAgICAgNDUsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjhTNzVCVktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAxMzIyNTk3Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQyMzEzNDU0MDIwNzc6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTaGFoaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcVp5ckVDRUtDd3lMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktHUjNBYWcwUTdqZVBSNkVmZk83SnFXQVROZ1NEL01kSi9YSkJNWXBzVEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzB0MUhYTUZzS3d0SzNta282RUIzM0UrSDduRmhpT0EySWgxWjFTdmZEYzRVQ2Z5aEtCMnRXMWc0cGVlZXlJYU0yaWU0YmFTTHhjYm5kZGlkdmR6QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzBjMEtwSnYxSVJQbjlJUEVOcC9VZE5OTUs4OUJNMDY2c1BhT1Z6OEliNllCRFFhSWtYR1FpQmoybnlPZ3FhTnMrQmFMUWc1SUFTMzZJRmtsMEZYQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDEzMjI1OTc2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODUwNDY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHpTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMelMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKUGthd3RoWnhGSEErczRzUzhYYXdiSEhSTnFKaGY0VXdYdXNoMmRpYmdZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY0MDg0NzA5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODUwNDY3Mjk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
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
