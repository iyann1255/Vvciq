let handler = async (m, { conn, usedPrefix, participants }) => {

  conn.level = global.db.data.users[m.sender]
  conn.fightnaga = conn.fightnaga ? conn.fightnaga : {}
  
  function Acakin(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)) + min
  }
  
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fightnaga[m.sender] != "undefined" && conn.fightnaga[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  m.reply(`*Pet Kamu* (🦊kyubi ${global.db.data.users[m.sender].kyubi}) ⚔️menantang 🦊kyubinya *${conn.getName(lawan)}* (🦊kyubi ${global.db.data.users[lawan].kyubi}) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  conn.fightnaga[m.sender] = true

  setTimeout(async () => {
    let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
    let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

    let kesempatan = []
    for (i=0;i<global.db.data.users[m.sender].kyubi;i++) kesempatan.push(m.sender)
    for (i=0;i<global.db.data.users[lawan].kyubi;i++) kesempatan.push(lawan)

    let pointPemain = 0
    let pointLawan = 0
    for (i=0;i<10;i++){
      unggul = Acakin(0,kesempatan.length-1)
      if (kesempatan[unggul] == m.sender) pointPemain += 1
      else pointLawan += 1
    }

    if (pointPemain > pointLawan){
      let hadiah = (pointPemain - pointLawan) * 20000
      global.db.data.users[m.sender].money += hadiah
      global.db.data.users[m.sender].tiketcoin += 1
      m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet🦊Kamu* (kyubi ${global.db.data.users[m.sender].kyubi}) MENANG melawan 🦊kyubinya *${conn.getName(lawan)}* (kyubi ${global.db.data.users[lawan].kyubi}) karena kyubi🦊kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
    }else if (pointPemain < pointLawan){
      let denda = (pointLawan - pointPemain) * 100000
      global.db.data.users[m.sender].money -= denda
      global.db.data.users[m.sender].tiketcoin += 1
      m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet🦊Kamu* (kyubi ${global.db.data.users[m.sender].kyubi}) KALAH melawan 🦊kyubinya *${conn.getName(lawan)}* (kyubi ${global.db.data.users[lawan].kyubi}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
    }else {
      m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
    }

    delete conn.fightnaga[m.sender]
  }, 1000 * 60 * lamaPertarungan)

}
handler.help = ['fightkyubi']
handler.tags = ['game']
handler.command = /^(fightkyubi)$/i
handler.limit = true
handler.group = true

module.exports = handler 