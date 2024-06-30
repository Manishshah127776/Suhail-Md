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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_27_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNNZnVOd1hrRzdBUksrbVpUWkZ0UmpCc0FrR0ZidSs1N0w1V0VsNW5ZWVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTc3OTgwNzA0NDQyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTkwODNBNTM1NUE3Mjg0QTM1RDA5QTQ3Qjk5MkRFMzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzEwODI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTc3OTgwNzA0NDQyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzRCMDcyOTlBOEIyMjg4Nzk1QTIzQjI2NTRDODU2NzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzEwODI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNaQXl0ZEctUW42ZDdoOElYemZKelFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjY5NDA2YmYtY2MxNi00ODUyLThkYjYtMzYyN2YyNThiNmUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDE2NyxcbiAgICAgIDEwMyxcbiAgICAgIDE1OSxcbiAgICAgIDExOSxcbiAgICAgIDE1LFxuICAgICAgMTc2LFxuICAgICAgNTMsXG4gICAgICAxODcsXG4gICAgICAxMzQsXG4gICAgICAxMDksXG4gICAgICAxODEsXG4gICAgICA2LFxuICAgICAgMjAyLFxuICAgICAgNTksXG4gICAgICAxNDYsXG4gICAgICA2MCxcbiAgICAgIDE5MSxcbiAgICAgIDg0LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDExMCxcbiAgICAgIDQsXG4gICAgICAxNjgsXG4gICAgICAxNDAsXG4gICAgICAyNDQsXG4gICAgICA5LFxuICAgICAgNzYsXG4gICAgICAxNTYsXG4gICAgICAxOTIsXG4gICAgICA5MyxcbiAgICAgIDE1MyxcbiAgICAgIDUxLFxuICAgICAgMTgwLFxuICAgICAgMjA5LFxuICAgICAgMTg1LFxuICAgICAgNTUsXG4gICAgICAxNzMsXG4gICAgICA0MCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJORVlURjUyWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTc3OTgwNzA0NDQyMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTHVjaWZlclwiLFxuICAgIFwibGlkXCI6IFwiMTA3NTQ2NDM0MTE3ODI2OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW0xdGQ4R0VPTG9nclFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrcWRlTUtDd09JQTBnMzU3ZC94MnRZeTdOODBVcndwMkNLN3BtYnpNU2tjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJuL0M2TmJwNE94aVlydGFwTk5lZ0MxVWlqMTVrc3VlemUrbU5NLzg5czBaUG1zUURhRFBVZVV3eGZRTytBY3ZUb0JpV1g5eVB0WFJKVmNYT2RjY0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZLa2Y0V3MzcTh0RWp6L1d2UmtoZStrWktKUkt4K0Y1VERpakJucWhTbzdyYmF5cTVSYm9FdGkzaXdkU2dDUjFaSWljVDBRUXhLYXRNWm5ZRllBampRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk3Nzk4MDcwNDQ0MjE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3MTA4MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBL2VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEvZS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
