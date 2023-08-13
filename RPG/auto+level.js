const rewards = {
  exp: 10000,
  money: 4999,
  potion: 5,
}

const cooldown = 1

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  
  if (new Date - user.lastclaim < cooldown) {
    let time = new Date(user.lastclaim + cooldown) - new Date()
    throw `You have already claimed this daily claim! Please wait for ${time / 1000} seconds before claiming again.`
  }
  
  let text = ''
  
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  
  await conn.reply(m.chat, `🎉 Congratulations! 🎉\nYou have successfully claimed your daily rewards!\n` + text.trim())
  
  user.lastclaim = new Date() * 1
}

handler.help = ['autoxp']
handler.tags = ['xp']
handler.premium = true
handler.command = /^(xpx)$/i
handler.cooldown = cooldown

module.exports = handler 
