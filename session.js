//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhiRmpSMG1JdmpVUm94OWZXbDQ4QVF3Y0NhdzQ1MmtQdlJzeHRJQ2hYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWgvRVFaRFRSZWlXNXZLWklaUGt0aVphT29HMXlhcEpqbUVrQ1ZZMTVYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRFpJbkhxOTNYU293a1h0c014N0poODBRTVJPNnI0aldnYStGYXVVT1c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Y0RJWlZ2b3Q3b2x6ZENjRStpV0NHS2RUdnFJYTlhZld4dTh5clFiaEM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLTGliOEJkV05XWWtxUFY2TW5jVHRTajRaVjc2Qm56VlBiTTRWeEFvRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhoQTUyMzNRcDJMeGpyZTFGWXhjeHFCU0N0aUU4T0lBVC9VQlpvV0xHUWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0tZK2YxbTE4M2lhMWMyZWV6TGtoVkx5amw1ZzBvbWh3UDdxNWVzbGJsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamlsRUdxNU5Va3B0MHo1dDluMHlxNElJRDZYSEhEMFB4YzNCVElUUUVpST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitTQkZMU0RNRi9WTUloZiszUThGZjRVak9ja2N3VHUyY3hKZzg1NGhUMmV4SDJCOVlmUzlJTVNsU0hmdEpmU1ZPSmVCbXJBQzhiZENGakgya0s4UUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJjc0NSNUczT1k4eHpvM3pvcVpZZ2IvY0x6dHdzSzR5dDNNc1lpU0JFK05NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE5MDUwNDgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhBMjQ5MTc1NTVFNkI3QjFDNUZCOEUyOUQwNENCN0VCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNjMxNTd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE5MDUwNDgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU1Mjk0NzhERkQ0OTIyODg3Q0Y0OEY1RTg0Q0Y2MTE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNjMxNTd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE5MDUwNDgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkzNEY4MTM3M0I5MEQ1RDA3NzM1OTI5QUFEMDQyNUYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNjMxNTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iml1eW9mMFQyUU9tbkdFMzBaWUpldmciLCJwaG9uZUlkIjoiNjE3MDE1MTYtNGI3NC00NzE0LWE0YmUtYTYzYTliODY4ZTgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk3MElnVFBqTWUzMk15cVFBZ1B6NDVUYmtmUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUcmpCME80QzJ2S1NUQ1lNUmNUVU1YREFDQWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDlKREtEOEoiLCJtZSI6eyJpZCI6Ijk0NzE5MDUwNDgyOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjAzMzc1MDQ1NDM1NzoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXFvaFBvREVNWHVnc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZG1pVnRheEV4OEZzSHBFZVl4eVYyWUZHZit5MWpiV1Bjelc0TFlkeGxBbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNVV0aVZaUXkrdUpSUUZRN2J6b0t1dlJqTGljZ0Q4MmJxdW0vK1kxdzlIbUhMTUZsdnRTa3BuQlIxbW5LWGNEYXo3K09MT0VtK2UrdVZJSjRRTjVUQmc9PSIsImRldmljZVNpZ25hdHVyZSI6Inpiam9rUHB3d29kTi83SkpBV05POXkwMTNpUHVCMXdmTEFJMk8vS2gweUVmL1lKemdpMnZKemJjZGkwd0R1Y211TFVNWVhqRmoxM2FLcWFCQ2s2QUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTkwNTA0ODI6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYWm9sYldzUk1mQmJCNlJIbU1jbGRtQlJuL3N0WTIxajNNMXVDMkhjWlFLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNjMxNTUsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94719050482",
  PASSWORD: 
    process.env.PASSWORD || "senura#@123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
