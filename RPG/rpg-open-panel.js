import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*🗣️: Panel Apa sih bg? panel Buat run Botz Agar bot WhatsApp bisa on 24 jam??*
──────────────────┈ 
*[ LIST HARGA PANEL ZYKO MD ]*
*📮2GB Cpu 60% 5K/Bulan*
*📮3GB Cpu 90% 10KBulan*
*📮4GB Cpu 110% 15K/Bulan*
*📮5GB Cpu 120% 20K/Bulan*
*📮6GB Cpu 130% 25K/Bulan*
*📮Unlimited 30K/Bulan*
*📮Admin Panel -PM*
*📮️Buy Panel: wa.me/6283133329293*
──────────────────┈ 
 *KEUNTUNGAN*
*📮TIDAK MENGURAS RAM HP DAN INTERNET*
*📮BISA RUN 7x24 JAM*
*📮FASTRESPON*
*📮WEBSITE DI CLOSE BOT TETAP JALAN*
*📮AMAN & PRIVATE*
──────────────────┈ 
*[ ️PREMIUM DI BOT ]*            
*📮️TRIAL 1 HARI FREE*
*📮️PREMIUM SEBULAN 5K*
*📮PREMIUM UNL PM️*
*📮️Zykopanel Bot*
*📮️PREMIUM BISA AKSES SEMUA BOT*
*📮️Buy Prem: wa.me/6283133329293*
──────────────────┈ 
*[ ️ZYKO MD MENYEDIAKAN ]* 
*📮OPEN SEWA BOTZ OFF*      
*📮OPEN JADI BOTZ PM*
*📮OPEN RUN BOTZ PM*
*📮OPEN BIKIN PNL SIMPLE PM*
*📮OPEN JUAL SC PM*
*📮Buy Open : wa.me/6283133329293*
──────────────────┈ 
*LING GC*
*https://chat.whatsapp.com/EuRW5GTkIm7Got8ncaiI6X*
*YOUTUBE* 
*https://www.youtube.com/@zykobotz*
*INSTAGRAM*
*https://instagram.com/kabulsaputra21*

*LOGIN PANEL*
*-*
──────────────────┈ 
YT ZYKOBOTZ MD`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Gas Om Beli Panel :V', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(panel|beli panel|belipanel|buy panel|buypanel|panel berapa bang|panelbera|zyko|zyko jual pane|Buy panel bang|open panel|openpanel)$/i
handler.command = new RegExp

export default handler