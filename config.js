const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_03_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICA4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBOU0JoQkM4ai9jc0hXY3g0UFZaMnhpcEo5SUFNU0FRaXE1NmNwb2txYTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkE1VG9odGNaUlpTY3ZQLXFpN0ItSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiODg4ODA3NDItM2QyMy00ZGEwLWI4Y2EtZGU1YjcxNDFhM2IzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAyMTQsXG4gICAgICA0LFxuICAgICAgMTAsXG4gICAgICAxNjIsXG4gICAgICAyNSxcbiAgICAgIDIzNixcbiAgICAgIDc1LFxuICAgICAgNjgsXG4gICAgICA1OCxcbiAgICAgIDIwLFxuICAgICAgMjI2LFxuICAgICAgMTQwLFxuICAgICAgNzEsXG4gICAgICAyMjksXG4gICAgICAxOTgsXG4gICAgICA1NixcbiAgICAgIDI1MyxcbiAgICAgIDE3MCxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAyMzEsXG4gICAgICAyMjMsXG4gICAgICAxMjIsXG4gICAgICAyMixcbiAgICAgIDI0MixcbiAgICAgIDE1MixcbiAgICAgIDg3LFxuICAgICAgMTU5LFxuICAgICAgNDEsXG4gICAgICAxMzYsXG4gICAgICAyNTIsXG4gICAgICAxOTEsXG4gICAgICAyMjEsXG4gICAgICAxMzAsXG4gICAgICAxNjQsXG4gICAgICA1MSxcbiAgICAgIDE5OCxcbiAgICAgIDEzLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhQTTY1WUJGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDIyMjU2NTU6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJYdGVlblwiLFxuICAgIFwibGlkXCI6IFwiMjQ2NjIxNzUzMzcyOTAzOjU0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w2QjhMUURFSkxUNTdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVmxqdmQ0b3BNSi9ZelJuSXdBdXY1ZnlTT3VEbmlSU2ttTXJ5ZzliaVMwbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXaWExRUQ1NGl0d0haSUVFTVU1eFJyNnVzbVlOV1JDazBGaHhSTGUyOUdjenhpUUFiNU0xN1U4SFpNaGhnVWlqK2dGVmg3WWJZbjRmVTFOTzFXOGNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCbWVUVHdJNmxyOVlOaFRlZ2o3S0tWWnRsMjdlTWo0TWRsTmdURVJpdnFONy9kbzdZU2lhWk5WajlTSWdDd29LS1huaHdQU0wvN1F6bndFQ2ZoYkZnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDIyMjU2NTU6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTg0ODU5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURSd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFJ3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQXcvOVMvbzFNN0djQ29iV2ZWd0ZlcC8yQjdNcnA5STVhYkFBVjR3dzZLND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTYxOTM0NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE3ODExMTQ3MTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
