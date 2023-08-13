process.on('uncaughtException', console.error) //Safe Log Error 
const fs = require('fs')
const { modul } = require('../botnew');
const { speed } = modul;
let timestamp = speed()
let latensi = speed() - timestamp
const chalk = require('chalk')
const moment = require ('moment-timezone')
global.log = function log() {
	var args = [].slice.call(arguments);
	console.log.apply(console, args);
}
global.delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
global.limitawal = {
    premium: "Infinity",
    free: 10
}
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
//Ubah Disini
global.owner = [
	//  ['6281234288573'],
	//['12546153210'],
	//['62895368900456'],
	['6289516947204', 'AIRA OFFC', true],
	['6285866392388', 'Rizz', true],
	['6282116587165', 'Aideil', true],
	['6285716244811','Aira Bot']
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.ownerName = 'Aira OFFC'
// Bot version
global.version = '10.4.0',
// Bot name
global.namaBot = 'Aira Bot'
global.creator = 'Aira OFFC'
global.wm = `© Aira Bot v${global.version} (Public Bot)`
global.packname = 'Dibuat Oleh' 
global.author = 'Aira Bot'
global.wame = 'http://wa.me/6289516947204'
global.youtube = '-'
global.sessionName = 'botmd'
global.multiplier = 1000 
global.autoAI = false //Auto Prefix ? ubh ke true
//Message Nya Ubah Disini
global.mess = {
admin: 'This Feature Can Only Be Used By Group Admins!',
botAdmin: 'This feature can only be used when the bot becomes admin!',
botOwner: 'This Feature Can Only Be Used By Devoloper Bots!',
group: 'This command can only be used in groups!\n\n Let s Join Group Pannel Aira OFFC\nhttps://chat.whatsapp.com/GOdtUKyFn04ECxqqOrFf4G',
private: 'This Feature Can Only Be Used in Private Chat!',
wait: 'Wait a While About 1-5 Minutes!',
endLimit: `Maaf Limit Kamu Telah Habis\n\nKamu dapat membeli premium user untuk mendapatkan limit unlimited, ketik #owner\n\nLimit akan diriset pada pukul 00:00 setiap harinya`,
prem: 'This Feature Is Only For Premium Users! Buy Premium? Type #owner',
link: '[❗] The link you sent is invalid!', 
link1: 'The link you are using is error',
nsfw: 'Nsfw not yet activated in this group',
api : 'Sorry Seems There Is An Error In The Server',
regis: 'Sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴍᴇɴɢᴇᴛɪᴋ:\n\n*#verifikasi ɴᴀᴍᴀ.ᴜᴍᴜʀ*\n\nCᴏɴᴛᴏʜ: *#verifikasi Mᴀɴᴜꜱɪᴀ.16*',
done: `sιмᴘʟᴇ wнᴀтsᴀᴘᴘ ʙoт Aira 𝙱𝙾𝚃ッ\nSpeed: ${latensi.toFixed(4)} Second`
}
global.APIs = {
nrtm: 'https://nurutomo.herokuapp.com/',
ghst: 'https://ghostui-api.herokuapp.com/',
beni: 'https://rest-beni.herokuapp.com/',
fatih: 'https://api.fatiharridho.my.id/'
}
global.APIKeys = {
'https://ghostui-api.herokuapp.com/': 'anjayi'
}

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
      string = string.toLowerCase()
      let emot = {
          Fox: "🦊",
          agility: "🤸‍♂️",
          anggur: "🍇",
          apel: "🍎",
          aqua: "🥤",
          arc: "🏹",
          armor: "🥼",
          bank: "🏦",
          batu: "🧱",
          berlian: "💎",
          bibitanggur: "🍇",
          bibitapel: "🍎",
          bibitjeruk: "🍊",
          bibitmangga: "🥭",
          bibitpisang: "🍌",
          botol: "🍾",
          bow: "🏹",
          bull: "🐃",
          cat: "🐈",
          centaur: "🎠",
          chicken: "🐓",
          coal: "⚱️",
          common: "📦",
          cow: "🐄",
          crystal: "🔮",
          darkcrystal: "♠️",
          diamond: "💎",
          dog: "🐕",
          dragon: "🐉",
          eleksirb: "🧪",
          elephant: "🐘",
          emasbatang: "🪙",
          emasbiasa: "🥇",
          emerald: "💚",
          exp: "✉️",
          fishingrod: "🎣",
          foodpet: "🍱",
          fox: "🦊",
          gardenboc: "🗳️",
          gardenboxs: "📦",
          gems: "🍀",
          giraffe: "🦒",
          gold: "👑",
          griffin: "🦒",
          health: "❤️",
          healtmonster: "❤‍🔥",
          horse: "🐎",
          intelligence: "🧠",
          iron: "⛓️",
          jeruk: "🍊",
          kaleng: "🥫",
          kardus: "📦",
          kayu: "🪵",
          ketake: "💿",
          keygold: "🔑",
          keyiron: "🗝️",
          knife: "🔪",
          koinexpg: "👛",
          kucing: "🐈",
          kuda: "🐎",
          kyubi: "🦊",
          legendary: "🗃️",
          level: "🧬",
          limit: "🌌",
          lion: "🦁",
          magicwand: "⚕️",
          makanancentaur: "🥗",
          makanangriffin: "🥙",
          makanankyubi: "🍗",
          makanannaga: "🍖",
          makananpet: "🥩",
          makananphonix: "🧀",
          mana: "🪄",
          mangga: "🥭",
          money: "💵",
          mythic: "🗳️",
          mythic: "🪄",
          naga: "🐉",
          pancingan: "🎣",
          pet: "🎁",
          petFood: "🍖",
          phonix: "🦅",
          pickaxe: "⛏️",
          pisang: "🍌",
          pointxp: "📧",
          potion: "🥤",
          rock: "🪨",
          rubah: "🦊",
          sampah: "🗑️",
          serigala: "🐺",
          snake: "🐍",
          stamina: "⚡",
          strength: "🦹‍♀️",
          string: "🕸️",
          superior: "💼",
          sword: "⚔️",
          tiger: "🐅",
          tiketcoin: "🎟️",
          trash: "🗑",
          umpan: "🪱",
          uncommon: "🎁",
          upgrader: "🧰",
          wood: "🪵"
      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
      if (!results.length) return ""
      else return emot[results[0][0]]
  }
}

//Sesuaikan
global.fla = 'https://telegra.ph/file/feb5f8475528d8ca4a023.jpg'
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
global.thumb1 = 'https://telegra.ph/file/feb5f8475528d8ca4a023.jpg'
global.loc = 'https://telegra.ph/file/feb5f8475528d8ca4a023.jpg'
global.erorurl =  'https://telegra.ph/file/feb5f8475528d8ca4a023.jpg'

    function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
