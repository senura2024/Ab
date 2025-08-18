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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElKNmdGak5CMUV2RzhRaGtrN3J5UlN6UXBhMzVydzFEREQ3S0JFb3FFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURjSjhXckdJTEJ4TFJyazdFZUhOditoR3A1OWppWXBYK2dOQXlZTi9SZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SXgreHh5QlhVUmlpNUxwN3ZJOUZXa2NqdUJ3YXFNQ0IzdENvalUxZjNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwMEQwc3l0c0Uxc2JHQ2FYSkcrNHpWcnp1YmxkdGJFR3hHZzVRWXgxU1ZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCaHpUZUlYTVhFekhiK2VWUDlNc2xoeVhhZ1dMWXFzN0Z2VVBxZUw5VUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRMbG5lYUw4ZndscUNyVWx5YU53N21OS0lVa1F1V0ZMN3B5cWt0NC9KRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0V2ZkpHRURoUXREczJQeURBcTQyVU1GdlNGSTgwR05aYmVhRklTWktsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHZDYUN5dTUzVnpwTks2dXFERmU3S1VLZS94cldVVkJUN1JuNDd0TnIzVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImswY3NsNk5CYllhREJOQkdVUHpGdVVIQURXOUZYUzMxaWoraFJJbGMrQVNNSmxrbm1tUWpwVUVmM2FyTUcrK09BWmlpVVFoK0p0NXQ2K0RoRTJHSmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6ImhWbXJZYnhTa0dieUpqU1d6TmN4RXVnV2EzbmNseE9nZDdBNWd2ZHpaNEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDE4OTUxODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjBCQUYyMTE5ODhFRjE2MTc1MTczNjc3QUM1QTNDRjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTUyMzMxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDE4OTUxODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDg2ODkxRTBDRkJDNjdDRjkzMDQyMTAwQzBCQzY3NDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTUyMzMxOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia3NzV3liUmFTVFNucG5VLUUxbXNsQSIsInBob25lSWQiOiI1YjA3YThiMS0xZGFmLTQxMTEtYWI5YS03YWU1MDRlMTQzNGUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHFtc1A0bytQVU4zbFd5Yk03enh3aWhoOVhFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRHL0pBOXJ6OFFRa3h1WkpNVFdDT09YOS9ITT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZOUpDTVhRUiIsIm1lIjp7ImlkIjoiOTQ3NDE4OTUxODA6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYWFhIiwibGlkIjoiMTU3MDI0NzA4OTkzMTEwOjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2lWdUxNQkVPWFJqTVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUGtxNDl3bWJWOGlIZFdYaFpsN1VEU2Q5Y3NBdWpUOHdZRGJTaVA3cW5tdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVk9RVUNJd1Zvb2lPM0lnZWIwVXZMNnEwOTE3RUM0cTZYWExueURLOEpOOGtlS0Y2bUN0NWVxSUJSc2l1S1VrRWs3bkVNUlRGUWw3R0tXTThUQUhyQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImR6MmpDSTZobUR2RGVRT2JVbFFPUGZtbDBSMTcwa2RaVXdvRnkyZy9kcS9CbVh1WThZZ2RaR0JWTDRQZmNpQ1MxV3M2KzcyZGd4S2twbWlsc1lyTGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDE4OTUxODA6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDVLdVBjSm0xZkloM1ZsNFdaZTFBMG5mWExBTG8wL01HQTIwb2orNnA1cyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NTIzMzE1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUo2TyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94741895180",
  PASSWORD: 
    process.env.PASSWORD || "esada12345",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
