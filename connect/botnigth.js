const {
	modul
} = require('../botnew');
const {
	cookie,
	speed,
	os,
	cheerio,
	moment,
	util,
	baileys,
	boom,
	chalk,
	fs,
	figlet,
	FileType,
	path,
	process,
	PhoneNumber
} = modul;
const {
	Boom
} = boom
const { infolog, mylog, color, bgcolor } = require('../lib/color')
const {
	default: makeWaSocket,
	useMultiFileAuthState,
	DisconnectReason,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	generateMessageID,
	downloadContentFromMessage,
	makeInMemoryStore,
	jidDecode,
	proto
} = baileys
var {
	exec,
	spawn,
	execSync
} = require("child_process")
var {
	bahasa,
	sewa,
	readme,
	channel,
	snk
} = require('./pengaturan')
var levelling = require('../lib/levelling')
var simple = require('../lib/myfunc')
var yts = require('yt-search')
var {
	createHash
} = require('crypto')
var noapi = require('../lib/api')
var api2 = require('../lib/api2')
var {
	UploadFileUgu,
	webp2mp4File,
	TelegraPh,
	floNime
} = require('../lib/uploader')
var { webp2png } = require('../lib/webp2mp4')
var {
	yta,
	ytv
} = require('../lib/y2mate')
const {
	parseMention,
	smsg,
	formatp,
	tanggal,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	runtime,
	fetchJson,
	getBuffer,
	jsonformat,
	format,
	getRandom,
	generateProfilePicture,
	reSize
} = require('../lib/myfunc')
var {
	pinterest,
	hentai,
	wallpaper,
	wikimedia,
	quotesAnime
} = require('../lib/scraper')
const {
	toAudio,
	toPTT,
	toVideo
} = require('../lib/converter')
const {
	instagramdlv2
} = require('@bochilteam/scraper')
var acrcloud = require('acrcloud')
var acr = new acrcloud({
	host: "identify-ap-southeast-1.acrcloud.com",
	access_key: "b1cc283b4fb72483ebb6ea9c53512331",
	access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"
})
const isNumber = x => typeof x === 'number' && !isNaN(x)
module.exports = Resta = async (Resta, m, chatUpdate, store) => {
	try {
		m = simple.serialize(Resta, m) || m
		        if (!m) return
		        m.exp = 0
		        m.limit = false
		        try {
			    var limitUser = isPrems ? global.limitawal.premium : global.limitawal.free
			    let user = global.db.data.users[m.sender]
			    if (typeof user !== 'object')
				global.db.data.users[m.sender] = {}
			    if (user) {
				if (!('registered' in user)) user.registered = false
                if (!user.registered) {
                if (!('name' in user)) user.name = Resta.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
                if (!isNumber(user.age)) user.age = -1
                }
                 if (!('premium' in user)) user.premium = false
                 if (!isNumber(user.premiumTime)) user.premiumTime = 0
                 if (!isNumber(user.limit)) user.limit = limitUser
                 if (!isNumber(user.afk)) user.afk = -1
                 if (!('afkReason' in user)) user.afkReason = ''
                 if (!('pasangan' in user)) user.pasangan = ''
			     } else global.db.data.users[m.sender] = {
			     limit: limitUser,
		         afk: -1,
                 afkReason: '',
                 pasangan: '',
		         name: Resta.getName(m.sender),                    
                 age: -1,
                 regTime: -1,
                 premium: false,
                 premiumTime: 0,
                   }
			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
			if (!('antilink' in chats)) chats.antilink = false
            if (!('antilink2' in chats)) chats.antilink2 = false
			if (!('welcome' in chats)) chats.welcome = false
            if (!('wame' in chats)) chats.wame = false
			if (!('antivionce' in chats)) chats.antivionce = false
			} else global.db.data.chats[m.chat] = {
			antivionce: false,
			welcome: false,
			antilink: false,
			wame: false,
			antilink2 : false,
			}
		    } catch (err) {
			console.error(err)
		    }
		var {
			type,
			quotedMsg,
			mentioned,
			now,
			fromMe
		} = m
		const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')
		var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "#"
		var prefix2 = new RegExp('^[' + ('‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
		var usedPrefix
		var _user = db.data?.users?.[m.sender]
		const isCmd = body.startsWith(prefix)
		var botNumber = await Resta.decodeJid(Resta.user.id)
		var isROwner = [botNumber, ...global.owner.map(([number]) => number)].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		var isOwner = isROwner || m.fromMe
		var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		var args = body.trim().split(/ +/).slice(1)
		var pushname = m.pushName || "No Name"
		var isROwner = [botNumber, ...global.owner.map(([number]) => number)].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        var isPrems = isROwner || db.data.users[m.sender].premium
		var isOwner = isROwner || m.fromMe
		var itsMe = m.sender == botNumber ? true : false
		var text = args.join(" ")
		var q = args.join(" ")
		var quoted = m.quoted ? m.quoted : m
		var mime = (quoted.msg || quoted).mimetype || ''
		var qmsg = (quoted.msg || quoted)
		var isMedia = /image|video|sticker|audio/.test(mime)
		var from = mek.key.remoteJid
		var isGroup = m.key.remoteJid.endsWith('@g.us')
		var groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat).catch(e => {}) : ''
		var groupName = m.isGroup ? groupMetadata.subject : ''
		var participants = m.isGroup ? await groupMetadata.participants : ''
		var user = db.data.users[m.sender]
		var users = (m.isGroup ? participants.find(u => Resta.decodeJid(u.id) === m.sender) : {}) || {} // User Data
		var bot = (m.isGroup ? participants.find(u => Resta.decodeJid(u.id) == Resta.user.jid) : {}) || {} // Your Data
		var isRAdmin = users?.admin == 'superadmin' || false
		var isAdmin = isRAdmin || users?.admin == 'admin' || false // Is User Admin?
		var isBotAdmin = bot?.admin || false // Are you Admin?
		var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		var groupOwner = m.isGroup ? groupMetadata.owner : ''
		var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		var mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		var time = moment().tz('asia/jakarta').format("hh:mm:ss")
		var ___dirname = path.join(path.dirname(__dirname, './plugins'))
		for (var name in plugins) {
			var plugin = plugins[name]
			if (!plugin)
				continue
			if (plugin.disabled)
				continue
			var __filename = path.join(___dirname, name)
			if (typeof plugin.all === 'function') {
				try {
					await plugin.all.call(Resta, m, {
						chatUpdate,
						conn: Resta,
						__dirname: ___dirname,
						__filename
					})
				} catch (e) {
					console.error(e)
					for (var [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
						var data = (await Resta.onWhatsApp(jid))[0] || {}
						if (data.exists)
							m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${util.format(e)}\`\`\``.trim(), data.jid)
					}
				}
			}
			if (!opts['restrict']) {
				if (plugin.tags && plugin.tags.includes('admin')) {
					// global.dfail('restrict', m, this)
					continue
				}
			}
			var str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
			var _prefix = plugin.customPrefix ? plugin.customPrefix : Resta.prefix ? Resta.prefix : prefix2
			var match = (_prefix instanceof RegExp ? // RegExp Mode?
				[
					[_prefix.exec(m.text), _prefix]
				] :
				Array.isArray(_prefix) ? // Array?
				_prefix.map(p => {
					var re = p instanceof RegExp ? // RegExp in Array?
						p :
						new RegExp(str2Regex(p))
					return [re.exec(m.text), re]
				}) :
				typeof _prefix === 'string' ? // String?
				[
					[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]
				] : [
					[
						[], new RegExp
					]
				]
			).find(p => p[1])
			if (typeof plugin.before === 'function') {
				if (await plugin.before.call(Resta, m, {
						match,
						conn: Resta,
						participants,
						groupMetadata,
						user: users,
						bot,
						isOwner,
						isRAdmin,
						isAdmin,
						isBotAdmin,
						isPrems,
						chatUpdate,
						__dirname: ___dirname,
						__filename
					}))
					continue
			}
			if (typeof plugin !== 'function')
				continue
			if ((usedPrefix = (match[0] || '')[0])) {
				var noPrefix = m.text.replace(usedPrefix, '')
				var [commands, ...args] = noPrefix.trim().split` `.filter(v => v)
				args = args || []
				var _args = noPrefix.trim().split` `.slice(1)
				var text = _args.join` `,
					command = (commands || '').toLowerCase()
				commands = (commands || '').toLowerCase()
				var fail = plugin.fail || global.dfail // When failed
				var isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
					plugin.command.test(commands) :
					Array.isArray(plugin.command) ? // Array?
					plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
						cmd.test(commands) :
						cmd === commands
					) :
					typeof plugin.command === 'string' ? // String?
					plugin.command === commands :
					false

				if (!isAccept)
					continue
				m.plugin = name
				if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
					fail('owner', m, this)
					continue
				}
				if (plugin.rowner && !isROwner) { // Real Owner
					fail('rowner', m, this)
					continue
				}
				if (plugin.owner && !isOwner) { // Number Owner
					fail('owner', m, this)
					continue
				}
				if (plugin.mods && !isMods) { // Moderator
					fail('mods', m, this)
					continue
				}
				if (plugin.premium && !isPrems) { // Premium
					fail('premium', m, this)
					continue
				}
				if (plugin.group && !m.isGroup) { // Group Only
					fail('group', m, this)
					continue
				} else if (plugin.botAdmin && !isBotAdmin) { // You Admin
					fail('botAdmin', m, this)
					continue
				} else if (plugin.admin && !isAdmin) { // User Admin
					fail('admin', m, this)
					continue
				}
				if (plugin.private && m.isGroup) { // Private Chat Only
					fail('private', m, this)
					continue
				}
				if (plugin.register == true && global.db.data.users[m.sender].registered == false) { // Butuh daftar?
					fail('unreg', m, this)
					continue
				}
				m.isCommand = true
				console.log({
					isOwner
				})
				var xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
				/* if (xp > 200)
				     m.reply('Ngecit -_-') // Hehehe
				 else*/
				m.exp += xp
				if (plugin.level > _user.level) {
					m.reply(`diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`)
					continue // If the level has not been reached 
				}
				var extra = {
					match,
					usedPrefix,
					noPrefix,
					_args,
					args,
					command,
					text,
					conn: Resta,
					participants,
					groupMetadata,
					user: users,
					bot,
					isROwner,
					isOwner,
					isRAdmin,
					isAdmin,
					isBotAdmin,
					chatUpdate,
					isPrems,
					__dirname: ___dirname,
					__filename
				}
				try {
					await plugin.call(Resta, m, extra)
					if (!isPrems)
						m.limit = m.limit || plugin.limit || false
				} catch (e) {
					// Error occured
					m.error = e
					console.error(e)
					if (e) {
						var text = util.format(e)
						for (var key of Object.values(global.APIKeys))
							text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
						if (e.name)
							for (var [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
								var data = (await Resta.onWhatsApp(jid))[0] || {}
								if (data.exists)
									m.reply(`*Plugin:* ${m.plugin}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
							}

					}
				} finally {
					// m.reply(util.format(_user))
					if (typeof plugin.after === 'function') {
						try {
							await plugin.after.call(Resta, m, extra)
						} catch (e) {
							console.error(e)
						}
					}
				}
				break
			}
		}
	
		let cron = require('node-cron')
           cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPrems ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
		if (global.db.data.chats[m.chat].antilink) {
		if (budy.match(`chat.whatsapp.com`)) {
	    if (!isBotAdmins) return m.reply(mess.botAdmin)
		var gclink = (`https://chat.whatsapp.com/` + await Resta.groupInviteCode(m.chat))
		var isLinkThisGc = new RegExp(gclink, 'i')
		var isgclink = isLinkThisGc.test(m.text)
		if (isAdmins || isOwner) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
		if (isgclink) return m.reply(`Link Grup Lain Terdeteksi, Link Group Ini Ternyata 😆`)
		Resta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
		Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.id, participant: m.sender}})
	    }
		}
		if (global.db.data.chats[m.chat].antilink2) {
		if (budy.match(`chat.whatsapp.com`)) {
	    if (!isBotAdmins) return m.reply(mess.botAdmin)
		var gclink = (`https://chat.whatsapp.com/` + await Resta.groupInviteCode(m.chat))
		var isLinkThisGc = new RegExp(gclink, 'i')
		var isgclink = isLinkThisGc.test(m.text)
		if (isAdmins || isOwner) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
		if (isgclink) return m.reply(`Link Grup Lain Terdeteksi, Link Group Ini Ternyata 😆`)
		Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.id, participant: m.sender}})
	    }
		}
		if (global.db.data.chats[m.chat].wame) {
		if (budy.match(`wa.me`)) {
		if (isAdmins || isOwner) return 
		Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.id, participant: m.sender}})
        }
        }
		if (global.db.data.chats[m.chat].antivionce) {
		if (m.mtype == 'viewOnceMessage') {
		teks = `「 *Anti ViewOnce Message* 」\n➯ Name : ${m.pushName}\n➯ User : @${m.sender.split("@")[0]}\n➯ Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} \n➯ Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}\n➯ MessageType : ${m.mtype}`
		Resta.sendTextWithMentions(m.chat, teks, m)
		await sleep(5000)
		m.copyNForward(m.chat, true, {
		readViewOnce: true
		}).catch(_ => m.reply(`Maybe it's been opened by a bot`))
		}
		}
		    
   
		     if (m.isCommand || isCmd) {
			 Resta.readMessages([m.key])
			 Resta.sendPresenceUpdate('available', m.chat)
			 Resta.readMessages([m.key])
             console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(m.pushName), 'in', color(groupName))
	         }
	   
		     const pickRandom = (arr) => {
	         return arr[Math.floor(Math.random() * arr.length)]
		     }
		     async function sendPlay(from, query) {
             var url = await yts(query)
             url = url.videos[0].url
             noapi.youtube(url).then(async(data) => {
             let capption = `*Y O U T U B E  P L A Y*\n\n*T I T L E :* ${data.title}\n*Q U A L I T Y :* ${data.quality}\n\n${mess.done}`
             Resta.sendButton(m.chat, capption, null, data.thumb, [
             [`🎧 Audio (${data.size_mp3})`, `${prefix}ytvvmp3 ${url}`],
             [`🎥 Video (${data.size})`, `${prefix}ytmp4 ${url}`]], m)
             })
             }
             for (let jid of mentionUser) {
             let user = global.db.data.users[jid]
             if (!user) continue
             let afkTime = user.afkTime
             if (!afkTime || afkTime < 0) continue
             let reason = user.afkReason || ''
             m.reply(`Jangan tag dia!Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
             }
             if (db.data.users[m.sender].afkTime > -1) {
             let user = global.db.data.users[m.sender]
             Resta.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''} Selama ${clockString(new Date - user.afkTime)}`)
             user.afkTime = -1
             user.afkReason = ''
             }    
		if (!global.autoAI) {
		if (isCmd) {
		switch (command) {
		case 'nowa': {
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('lah?')
m.reply('Sabar Cuy Loading')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await Resta.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await Resta.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
	  case 'join': 
                if (!isOwner) return 
                if (!text) return m.reply('link gc')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(mess.link)
                 result = args[0].split('https://chat.whatsapp.com/')[1]
                 await Resta.groupAcceptInvite(result).then((res) => m.reply('Sukses Join').catch((err) => m.reply('Sepertinya Ada Yang Salah')))
                  break
case "bcgc":
        case "bcgrup":{
             if (!isOwner) return 
             if (!text) throw m.reply(`Menu ini akan mengirim broadcast ke semua chat kamu termasuk ke grup juga.\n\nContoh: ${prefix + command} pengumuman besok libur`)
             let getGroups = await Resta.groupFetchAllParticipating();
             let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
             let anu = groups.map((v) => v.id);
             m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`);
             for (let i of anu) {
             await sleep(6000);
             let txt = `「 Broadcast 」\n\n${text}`;
             Resta.sendText(i, txt);
              }
              m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
              }
              break;
   case "bc":
   case "broadcast":
   case "bcall": {
               if (!isOwner) return 
               if (!text) throw m.reply(`Menu ini akan mengirim broadcast ke semua chat kamu termasuk ke grup juga.\n\nContoh: ${prefix + command} pengumuman besok libur`)
               let anu = await store.chats.all().map((v) => v.id);
               m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`);
               for (let yoi of anu) {
               await sleep(5000);
               let txt = `「 Broadcast 」\n\n${text}`;
               Resta.sendText(yoi, txt);
               }
               m.reply("Sukses Broadcast");
               }
               break
     case 'unreg':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!args[0]) throw m.reply('Serial Number kosong')
               let spn = createHash('md5').update(m.sender).digest('hex')
               if (args[0] !== spn) throw m.reply('Serial Number salah')
               user.registered = false
               m.reply('```Succes Unreg !```')
               break
      case 'ceksn':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               let Regg = /\|?(.*)([.|] *?)([0-9]*)$/i
               let jp = createHash('md5').update(m.sender).digest('hex')
               m.reply(`*❒ SN:* ${jp}`)
               break
       case 'afk':
      	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
                break
      case 'ping': case 'botstatus': case 'statusbot':
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
		        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                last.total += cpu.total
                last.speed += cpu.speed / length
                last.times.user += cpu.times.user
                last.times.nice += cpu.times.nice
                last.times.sys += cpu.times.sys
                last.times.idle += cpu.times.idle
                last.times.irq += cpu.times.irq
                return last
                }, {
                speed: 0,
                total: 0,
                times: {
	            user: 0,
	            nice: 0,
		        sys: 0,
	            idle: 0,
		        irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''} `.trim()
                m.reply(respon)
                break 
      case 'limit': 
                m.reply(`Limit kamu adalah *${global.db.data.users[m.sender].limit}*\n\nKamu dapat membeli premium user untuk mendapatkan limit unlimited, ketik #owner\n\nLimit akan diriset pada pukul 00:00 setiap harinya`)
                break
      case 'simi':
		         if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
			    if (!text) throw m.reply(`Penggunaan ${command} text`)
			    var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
                Resta.sendMessage(m.chat, { text: cimcimi.success}, {quoted: m})
                break
      case 'kataanime':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
                if (!res.ok) throw await res.text()
                json = await res.json()
                if(!json.result[0]) throw json
                let { indo, character, anime } = json.result[0]
                m.reply(`${indo}\n\n${character}\n${anime}\n\n${mess.done}`)
                if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                break
      case 'gore':
      case 'randomgore':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 m.reply(mess.wait)
                 require ('../lib/api'). gore().then(data => {
                 Resta.sendMessage(m.chat, {video:{url: data.video1}, mimetype:"video/mp4", caption: `*Author*: ${data.author}\n*Comment*: ${data.comment}\n*Tag*: ${data.tag}\n*Upload*: ${data.upload}\n*Title*: ${data.title}\n\n${mess.done}`}, {quoted:m})
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 })
                 break
       case 'pantun':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/pantun.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1
                  }
                 break
        case 'tts':
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                  if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
	              if (args.length < 1) return m.reply('Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
	              try {
                  const gtts = require('../lib/gtts')(args[0]) 
                  if (args.length < 2) return m.reply('Textnya mana gan?') 
                  var ngab = body.slice(8)
                  ranm = getRandom('.mp3')
                  rano = getRandom('.ogg')
                  ngab.length > 20000 ? reply('Textnya kebanyakan gan') : gtts.save(ranm, ngab, function() {
                  exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                  fs.unlinkSync(ranm)
                  buff = fs.readFileSync(rano) 
                  if (err) return reply('Gagal gan:(')
                  Resta.sendMessage(m.chat, {audio: buff, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                  fs.unlinkSync(rano)
                  if (!isPrems) {global.db.data.users[m.sender].limit -= 1
                  }
                  })
                  }) 
                  } catch (err) {
                  console.log(err)
                  Resta.sendText(m.chat, bahasa(prefix), m) 
                  }
                  break
/*DOWNLOAD MENU*/
	 case 'play': case 'ytplay':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
               m.reply(mess.wait)
               await sendPlay(from, q)
               break
     case 'ytmp4': case 'ytvideo': case 'ytv':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)            
               if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
               if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
               m.reply(mess.wait)
               try {
               let quality = args[1] ? args[1] : '480p'
               let media = await ytv(text, quality)
               if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
               caption = `---- Youtube Downloader -----\n\n❒ Judul : ${media.title}\n❒ Size : ${media.filesizeF}\n❒ Url : ${isUrl(text)}\n❒ Format : MP4\n❒ Resolusi : ${args[1] || '480p'}\n\n${mess.done}`
               Resta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               } catch (err) {
               console.log(err)
               await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
               }
			   break
     case 'ytmp3': case 'ytaudio': case 'yta': 
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
               if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
               await m.reply(mess.wait) 
               try {
               let quality = args[1] ? args[1] : '128kbps'
               let media = await yta(text, quality)
               if (media.filesize >= 99999) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
               caption = `*Y O U T U B E  D O W N L O A D E R*\n\n❒ Title : ${media.title}\n❒ Size : ${media.filesizeF}\n❒ Url : ${isUrl(text)}\n❒ Format : MP3\n❒ Resolusi : ${args[1] || '128kbps'}\n\n_Wait We Are Processing Your File_\n\n${mess.done}`
               let msg = await Resta.reply(m.chat, caption, m, {contextInfo: {externalAdReply: await thumbloc(media.thumb, [wm,botdate])}})              
               Resta.sendMessage(m.chat, {document: {url:  media.dl_link}, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted: msg }) .then(() => {
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               })
               } catch (err) {
               console.log(err)
               await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
               }
               break
     case 'ytvvmp3':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
               if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
               await m.reply(mess.wait) 
               try {
               let quality = args[1] ? args[1] : '128kbps'
               let media = await yta(text, quality)
               if (media.filesize >= 99999) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
               Resta.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
               } catch (err) {
               console.log(err)
               await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
               }
               break
     case 'tiktoknowm':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (args.length < 1) return m.reply(`Gunakan Format : ${command} https://vt.tiktok.com/ZS8HAjYq9/`)
               if (!isUrl(args[0]) && !args[0].includes('vt.tiktok') && !args[0].includes('tiktok.com')) return m.reply(mess.link1)
               m.reply(mess.wait)
               try {
               a = await require('../lib/tiktok')(args[0])
               texp = `*Nickname :* ${a.autor.nickname}\n*Username :* ${a.autor.username}\n*Comment :* ${a.details.comment_count}\n*Share :* ${a.details.share_count}\n*Like :* ${a.details.like_count}\n*Description :* ${a.details.desc}`
               Resta.sendVideo(m.chat, a.download.video.with_wm.url, texp, m)
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               } catch (err) {
               console.log(err)
               await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
               }
               break 
    case 'tiktok':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (args.length < 1) return m.reply(`Gunakan Format : ${prefix + command} https://vt.tiktok.com/ZS8HAjYq9/`)
               if (!isUrl(args[0]) && !args[0].includes('vt.tiktok') && !args[0].includes('tiktok.com')) return m.reply(mess.link1)
               m.reply(mess.wait)
               a = await require('../lib/tiktok')(args[0])
               try {
               texp = `*Nickname :* ${a.autor.nickname}\n*Username :* ${a.autor.username}\n*Comment :* ${a.details.comment_count}\n*Share :* ${a.details.share_count}\n*Like :* ${a.details.like_count}\n*Description :* ${a.details.desc}`
               Resta.sendVideo(m.chat, a.download.video.no_wm.url, texp, m)
               } catch (err) {
               console.log(err)
               await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
               }
               break 
      case 'spotify':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Kirim perintah :  ${prefix + command} https://open.spotify.com/track/5dHkBAoH7AvB27bbGVMuSq?si=3GGc7bsQRL6eLZTsriHUyA`)
               if (!isUrl(q) && !q.ncludes('open.spotify.com')) return m.reply(mess.link)
               m.reply(mess.wait)
               a = await require('../lib/api.js').spotify(args[0])
               try {
               texp = `*Nickname :* ${a.name}\n*Artists :* ${a.artists.pop()}\n*Releasedate :* ${a.album.releaseDate}\n*Size :* ${a.audio.size}`
               Resta.reply(m.chat, texp, m, {contextInfo: {externalAdReply: await thumbloc(a.album.cover, [wm,botdate])}})
               Resta.sendFile(m.chat, a.audio.url, '.mp3', '', m)
               } catch (err) {
               console.log(err)
               await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
               }
               break 
     case 'tiktokmp3': 
     case 'tiktokmusic':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Kirim perintah ${prefix + command} link`)
               if (!isUrl(q) && !q.ncludes('tiktok.com')) return m.reply(mess.link)
               m.reply(mess.wait)
               a = await require('../lib/tiktok')(args[0])
               Resta.sendMessage(m.chat, { audio: { url: a.download.audio.url }, mimetype: 'audio/mp4' }, { quoted: m })
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               break
     case 'twittermusic': 
     case 'twittermp3':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Kirim perintah : ${prefix + command} link`)
               if (!isUrl(q) && !q.ncludes('twitter.com')) return m.reply(mess.link)
               m.reply(mess.wait)
               require('../lib/api').twitter(q).then( data => {
           	if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               Resta.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
               })
               break
     case 'twitterdl':
     case 'twitter':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Kirim perintah : ${prefix + command} link`)
               if (!isUrl(q) && !q.ncludes('twitter.com')) return m.reply(mess.link)
               m.reply(mess.wait)
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               require('../lib/api'). twitter(q).then( data => {
               Resta.sendMessage(m.chat, {video:{url: data.HD}, mimetype:"video/mp4", caption: `*Desc*: ${data.desc}\n\n${mess.done}`}, {quoted:m})
               })
               break
case "idgroup": {
if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let getGroups = await Resta.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Resta.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
m.reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak idgroup|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "pushkontak":
if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await m.reply("Otw Boskuuu")
const hay = q.split("|")[1]
const groupMetadataa = !isGroup? await Resta.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
Resta.sendMessage(mem, { text: hay })
await sleep(2000)
}
               break  
     case 'soundcloud':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Gunakan Format : ${prefix + command} linknya`)
               if (!isUrl(q)) throw m.reply(mess.link) 
               if (!q.includes('soundcloudmp')/('soundcloud.com')) return m.reply('Link Invalid ❎')
               await m.reply(mess.wait)
               api2.soundcloud(`${q}`) 
              .then(result => {
               let text =`*🔰SOUNDCLOUD🔰*\n`
               text +=`*Title*: ${result.title}\n`
               text +=`*Durasi*: ${result.duration}\n`
               text +=`*Qulity*: ${result.quality}\n`
               text +=`*Author*: ${result.author}\n\n Wait Is Sending The Data You Request`
               Resta.sendImage(m.chat, result.thumbnail, text, m)
               Resta.sendMessage(m.chat, {document: {url:  result.download}, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3`}, { quoted: m })
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
               break
     case 'cocofun':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Gunakan Format : ${prefix + command} https://www.icocofun.com/share/post/490013276810?lang=id&pkg=id&share_to=copy_link&m=253e3d90d057da0de4f9544ed67e4c54&d=0d18db9c398405eed9a59120805e336ff6dd6d841c556ada2b191c37a722a522&nt=1`)
               if (!isUrl(q)) throw m.reply(mess.link) 
               if (!q.includes('icocofun.com')/('cocofun.com')) return m.reply('Link Invalid ❎')
               await m.reply(mess.wait)
               api2.cocofun(`${q}`) 
              .then(result => {
               let text =`*🔰COCOFUN🔰*\n`
               text +=`*Topic*: ${result.topic}\n`
               text +=`*Caption*: ${result.caption}\n`
               text +=`*View*: ${result.play}\n`
               text +=`*Share*: ${result.share}\n`
               text +=`*Like*: ${result.like}\n`
               text +=`*Durasi*: ${result.duration}\n\n Wait Is Sending The Data You Request`
               Resta.sendImage(m.chat, result.thumbnail, text, m)
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.caption}`}, {quoted:m})
               }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
               break 
     case 'likevideo':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Gunakan Format : ${prefix + command} https://l.likee.video/v/JvI12V`)
               if (!isUrl(q)) throw m.reply(mess.link) 
               if (!q.includes('like.com')/('l.likee')) return m.reply('Link Invalid ❎')
               await m.reply(mess.wait)
               api2.like(`${q}`) 
              .then(result => {
               let text =`*🔰Like Downloader🔰*\n`
               text +=`*Title*: ${result.title}\n\n Wait Is Sending The Data You Request`
               Resta.sendImage(m.chat, result.thumbnail, text, m)
               Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.title}\n\n${mess.done}`}, {quoted:m})
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
               break
     case 'gitclone':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!args[0]) return m.reply('Linknya?')
               let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
               if (!regx.test(args[0])) return m.reply('Linknya salah')
               m.reply(mess.wait)
               let [, usker, repo] = args[0].match(regx) || []
               repos = repo.replace(/.git$/, '')
               let hasdl = `https://api.github.com/repos/${usker}/${repos}/zipball`
               let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
               Resta.sendMessage(m.chat, { document: { url: hasdl }, fileName: `${namafile}`, mimetype: 'zip' }, { quoted: m })
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
               break
/*MENU CONVERT*/
       case 'tourl':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 m.reply(mess.wait)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 let mpoedia = await Resta.downloadAndSaveMediaMessage(quoted)
                 if (/image/.test(mime)) {
                 anu = await TelegraPh(mpoedia)
                 m.reply(util.format(anu))
                 } else if (!/video/.test(mime)) {
                 anu = await UploadFileUgu(mpoedia)
                 m.reply(util.format(anu))
                 }
                 await fs.unlinkSync(mpoedia)
                 break
       case 'tinyurl':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (args.length < 1) return m.reply(`Penggunaan :\n*${prefix}tinyurl link*`)
                 if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
                 axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
                .then((a) => m.reply(`Nih ${a.data}`))
                .catch(() => m.reply(`Error, harap masukkan link dengan benar`))
                 break
        case 'wasted':
        case 'comrade':
        case 'horny':
        case 'blur':
        case 'pixelate':
        case 'simpcard':
        case 'lolice':
        case 'gay':
        case 'jail':
                   if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)     
                  if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                  m.reply(mess.wait)
                  meeh = await Resta.downloadAndSaveMediaMessage(quoted)
                  memh = await TelegraPh(meeh)
                  gdye = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${memh}`)
                  Resta.sendImageAsSticker(m.chat, gdye, m, { packname: global.packname, author: global.author })
                  break
        case 'emojimix2':
		          if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		          if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
	              if (!text) throw m.reply(`Example : ${prefix + command} 😅`) 
	              anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		          for (let res of anu.results) {
			      if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
		          let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		          await fs.unlinkSync(encmedia)
		          }
	              break
        case 'stickersearch':
		          if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		           if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
	              if (!text) throw m.reply(`Example : ${prefix + command} Kucing`) 
	              anu = await api2.stickersearch(text)
		          for (let rehs of anu.sticker_url) {
			      if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
		          let encmedia = await Resta.sendImageAsSticker(m.chat, rehs, m, { packname: global.packname, author: global.author })
		          await fs.unlinkSync(encmedia)
		          }
	              break
        case 'emojimix': {
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                  if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
		          let [emoji1, emoji2] = text.split`+`
		          if (!emoji1) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		          if (!emoji2) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		          anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		          for (let res of anu.results) {
		          let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		          await fs.unlinkSync(encmedia)
		         if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
		          }
	              }
	              break
        case 'sticker': case 's': case 'stickergif': case 'sgif': {
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                  if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                  m.reply(mess.wait)
                  if (/image/.test(mime)) {
                  let media = await quoted.download()
                  let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                  await fs.unlinkSync(encmedia)
                  } else if (/video/.test(mime)) {
                  if ((quoted.msg || quoted).seconds > 15) return m.reply('Maksimal 10 detik!')
                  let media = await quoted.download()
                  let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                  if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                  await fs.unlinkSync(encmedia)
                  } else {
                  throw m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
                  }
                  }
                  break
         case 'swm': case 'stickerwm':
                   if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
         	     if (!args.join(" ")) return m.reply(`Example :\nswm Resta | Gans`)
                  if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`Kirim Image Dengan Caption ${prefix + command} nama | nama`)
                  const swn = args.join(" ")
                  const pcknm = swn.split("|")[0];
                  const atnm = swn.split("|")[1];
                  m.reply(mess.wait)
                  if (quoted.msg === true) {
                  Resta.downloadAndSaveMediaMessage(quoted, "gifee")
                  Resta.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                  } else if (/image/.test(mime)) {
                  let media = await quoted.download()
                  let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                  await fs.unlinkSync(encmedia)
                  } else if (/video/.test(mime)) {
                  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                  let media = await quoted.download()
                  let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                  if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                  await fs.unlinkSync(encmedia)
                  } else {
                  m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                  }
                  break
        case 'tomp3':
	              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	             if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  if (/document/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
                  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
                  if (!quoted) throw m.reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
                  m.reply(mess.wait)
                  let mbedia = await quoted.download()
                  let audio = await toAudio(mbedia, 'mp4')
                  Resta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Resta.user.name}.mp3`}, { quoted : m })
                  if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                  break
        case 'toimage': case 'toimg':
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                  if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  if (!quoted) throw m.reply('Reply Image')
                  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
                  m.reply(mess.wait)
                  let media = await Resta.downloadAndSaveMediaMessage(quoted)
                  let ran = await getRandom('.png')
                  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media)
                  if (err) throw m.reply(err)
                  let buffer = fs.readFileSync(ran)
                  Resta.sendMessage(m.chat, { image: buffer }, { quoted: m })
                  if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                  fs.unlinkSync(ran)
                  })
                  break
/*/RANDOM VIDEO*/
        case 'hentaivid':
                   if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                  sbe = await noapi.hentaivid()
                  m.reply(mess.wait)
                  cejd = sbe[Math.floor(Math.random(), sbe.length)]
                  Resta.sendMessage(m.chat, { video: { url: cejd.video_1 }, caption: `⭔ Title : ${cejd.title}\n⭔ Category : ${cejd.category}\n⭔ Mimetype : ${cejd.type}\n⭔ Views : ${cejd.views_count}\n⭔ Shares : ${cejd.share_count}\n⭔ Source : ${cejd.link}\n⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
                  break
/*MENU SEARCH*/
        case 'lirik': 
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                  if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  if(!q) throw m.reply(`Example : ${prefix + command} doraemon`) 
                  song = await noapi.lirik(q)
                  m.reply(mess.wait)
                  if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                  Resta.sendImage(m.chat ,song.thumb,song.lirik, m)
                  break       
        case 'sfilesearch':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!q) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} WhatsApp mod*`)
                 m.reply(mess.wait)
                 api2.sfilesearch(`${q}`)
                .then(result => {
                 res = '「 *sfilesearch* 」\n\n'
                 for (let i of result) {
                 res += `*Nama*: ${i.nama}\n*Ukuran*: ${i.size}\n*Link*: ${i.link}\n\n`
                 }
                 m.reply(res)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 });
                 break 
       case 'google':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                 let google = require('google-it')
                 m.reply(mess.wait)
                 google({'query': args.join(" ")}).then(res => {
                 let teks = `Google Search From : ${text}\n\n`
                 for (let g of res) {
                 teks += `*Title* : ${g.title}\n`
                 teks += `*Description* : ${g.snippet}\n`
                 teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                 } 
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 m.reply(teks)
                 }) 
                 break
       case 'whatmusic':
                  if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	             if (/video|audio/.test(mime)) {
		         let media = await quoted.download()
		         await m.reply(mess.wait)
		         let { status, metadata } = await acr.identify(media)
		         if (status.code !== 0) throw status.msg 
	             let { title, artists, album, genres, release_date } = metadata.music[0]
		         let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
	             txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		         txt += `*• Release Date:* ${release_date}`
                 Resta.sendMessage(m.chat, { text: txt.trim(), buttons: [{ buttonText: { displayText: 'Play Music' }, buttonId: `${prefix}play ${title}` }] }, { quoted: m })
	             } else throw m.reply(`Reply audio/video with command ${prefix + command}`)
	            .catch((err) => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
	             break
        case 'katabijak':
                  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                  if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                  er = `contoh: ${prefix + command} cinta\n\nOpsi Tersedia:\n• cinta\n• rindu\n• mimpi\n• sedih\n• sendiri\n• sabar\n• kesedihan\n• pernikahan\n• kemerdekaan\n\n By ${ownerName}`
	              if (!text) throw m.reply(er)       
	              case 'rindu':
		          case 'mimpi':
	              case 'sendiri':
		          case 'sabar':
	              case 'cinta':
	              case 'kesedihan':
	              case 'pernikahan':
	              case 'kemerdekaan':
	              noapi.quotes(text.toLowerCase()).then(res => {
	              var data = JSON.stringify(res)
	              var json = JSON.parse(data)
	              var random = Math.floor(Math.random() * json.data.length)
	              var hasil = json.data[random]
                  var { author, bio, quote } = hasil
		          m.reply(`“${quote}”\n\n${author} - ${bio}`)
		          if (!isPrems) {global.db.data.users[m.sender].limit -= 1
		          }
		          })
	              break
        case 'cerpen':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!text) throw m.reply(`Example : ${prefix + command} sedih`)
                 m.reply(mess.wait)
                 bmflgkjt = await noapi.cerpen(`${text}`)
                 m.reply(`⭔ _*Title :*_ ${bmflgkjt.title}\n⭔ _*Author :*_ ${bmflgkjt.author}\n⭔ _*Category :*_ ${bmflgkjt.kategori}\n⭔ _*Pass Moderation :*_ ${bmflgkjt.lolos}\n⭔ _*Story :*_\n${bmflgkjt.cerita}`)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 break
       case 'inews':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 await m.reply(mess.wait)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 api2.inews()
                .then(data => {
                 let text =`*🔰 Inews🔰*\n`
                 text +=`*Berita*: ${result.berita}\n`
                 text +=`*Upload*: ${result.upload_time}\n`
                 text +=`*Info*: ${result.info_berita}\n`
                 text +=`*Link*: ${result.link}\n`
                 Resta.sendImage(m.chat, result.thumbnail, text, m)
                 }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                 break 
       case 'konachan':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!text) throw m.reply(`Example : ${prefix + command} loli`)           
                 m.reply(mess.wait)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 let onnhg = await api2.konachan(text);
                 acak = onnhg[Math.floor(Math.random() * onnhg.length)];
                 anu = acak
                 await Resta.sendMessage(m.chat, { image : { url: anu}, caption: `${command} ${text}`}, { quoted: m })
                .catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '??️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                 break
       case 'kiryu':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                 await m.reply(mess.wait)
                 api2.kiryu(`${q}`) 
                .then(data => {
                 let text =`*🔰 SEARCH KIRYU🔰*\n`
                 text +=`*Judul*: ${result.judul}\n`
                 text +=`*Status*: ${result.manga_status}\n`
                 text +=`*Chapter*: ${result.last_chapter}\n`
                 text +=`*Rating*: ${result.ranting}\n`
                 text +=`*Link*: ${result.link}\n`
                 Resta.sendImage(m.chat, result.thumbnail, text, m)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                 break
      case 'anime':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                 await m.reply(mess.wait)
                 api2.anime(`${q}`) 
                .then(data => {
                 let text =`*🔰 Search Anime🔰*\n`
                 text +=`*Link*: ${result.link}\n`
                 Resta.sendImage(m.chat, result.thumbnail, text, m)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                 break
       case 'komiku':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!q) return m.reply(`judulnya?\n${prefix}komiku mao gakuin`)
                 m.reply(mess.wait)
                 try {
                 let komik = await noapi.komiku(q);
                 result = `*Title* : ${komik.title}\n*Title Indo* : ${komik.indo}\n*Update* : ${komik.update}\n*Desc* : ${komik.desc}\n*Chapter Awal* : ${komik.chapter_awal}*Chapter Akhir* : ${komik.chapter_akhir}`;
                 await Resta.sendMessage(m.chat, { image : { url: komik.image}, caption: `${result}`}, { quoted: m })
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 } catch (err) {
                 await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '??️ Maaf, Data tidak ditemukan'}, { quoted: m })
                 }         
                 break
       case 'yts': case 'ytsearch': 
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!text) throw m.reply (`Example : ${prefix + command} story wa anime`) 
                 m.reply(mess.wait)
                 yts(text).then(data => {
			     yt = data.videos
			     jumlah = 15
			     if (yt.length < jumlah) jumlah = yt.length
		         no = 0
			     txt = `*YOUTUBE SEARCH*\n\n*Data berhasil didapatkan*\n*Hasil pencarian dari ${q}*\n\n*${prefix}getmusic <no urutan>*\n*${prefix}getvideo <no urutan>*\nUntuk mengambil Audio/Video dari hasil pencarian`
                 for (let i = 0; i < jumlah; i++) {
			     no += 1
			     txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
			     }
			     Resta.sendMessage(m.chat, { image : { url: yt[0].image }, caption: txt}, { quoted: m })
		         if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
		         }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
                 break
       case 'android1':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} Pou*`)
                 m.reply(mess.wait)
                 require ('../lib/api2'). android1(text).then(result => {
			     cap = `*DATA BERHASIL DIDAPATKAN*`
			     for (let v of result.data) {
	             cap += `\n─────────────────\n\n*Judul :* ${v.judul}\n*Developer :* ${v.dev}\n*Rating :* ${v.rating}\n*Link :* ${v.link}\n`
                 }
                 m.reply(cap)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 })
                 break 
       case 'pinterest': 
            	 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
                 m.reply(mess.wait)
                 anu = await api2.pinterest(text)
                 result = anu[Math.floor(Math.random() * anu.length)]
                 Resta.sendMessage(m.chat, { image : { url: result }, caption: text}, { quoted: m })
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 break
       case 'character':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                 await m.reply(mess.wait)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 api2.character(`${q}`) 
                .then(data => {
                 let text =`*🔰 CHARACTER🔰*\n`
                 text +=`*Character*: ${result.character}\n`
                 text +=`*Link*: ${result.link}\n`
                 Resta.sendImage(m.chat, result.thumbnail, text, m)
                 }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '??️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                 break
       case 'otakudesu':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                 if (!q) return m.reply(`Gunakan Format : ${command} Nama Animenya`)
                 await m.reply(mess.wait)
                 if (!isPrems) {global.db.data.users[m.sender].limit -= 1 }
                 api2.otakudesu(`${q}`) 
                .then(data => {
                 let text =`*🔰 Otakudesu🔰*\n`
                 text +=`*Judul*: ${result.judul}\n`
                 text +=`*Link*: ${result.link}\n`
                 Resta.sendImage(m.chat, result.thumbnail, text, m)
                 }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                 break 
     case 'otakudesuinfo':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) throw m.reply(`Example : ${prefix + command} https://otakudesu.watch/anime/borto-sub-indo/`)
               if (!isUrl(q)) throw m.reply(mess.erro)  
               if (!q.includes('otakudesu.lol')) throw m.reply(mess.link) 
               await m.reply(mess.wait)
               api2.otakudesuinfo(`${q}`) 
              .then(data => {
               let text =`*🔰 OTAKUDESU INFO🔰*\n\n`
               text +=`*Judul*: ${result.judul}\n`
               text +=`*Japanese*: ${result.japanese}\n`
               text +=`*Rating*: ${result.rating}\n`
               text +=`*Produser*: ${result.produser}\n`
               text +=`*Tipe*: ${result.tipe}\n`
               text +=`*Anime_status*: ${result.anime_status}\n`
               text +=`*Total_episode*: ${result.total_episode}\n`
               text +=`*Durasi*: ${result.durasi}\n`
               text +=`*Rilis*: ${result.rilis}\n`
               text +=`*Studio*: ${result.studio}\n`
               text +=`*Genre*: ${result.genre}\n`
               text +=`*Download*: ${result.download_lengkap}\n`
               text +=`*Sinopsis*: ${result.sinopsis}\n`
               Resta.sendImage(m.chat, result.thumbnail, text, m)
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1
		       }
               }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
               break
     case 'getmusic':
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
               if (!m.quoted) return m.reply('Reply Pesan Hasil Dari Ytsearch')
               if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
		       let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
               if (!urls) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`) 
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1
		       }
               m.reply(mess.wait)
               let qualitty = args[1] ? args[1] : '128kbps'
               let mepdia = await yta(urls[text - 1], qualitty)
               if (mepdia.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(mepdia))
               Resta.reply(m.chat, `⭔ Title : ${mepdia.title}\n⭔ File Size : ${mepdia.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m, {contextInfo: {externalAdReply: await thumbloc(mepdia.thumb, [wm,botdate])}})
               Resta.sendMessage(m.chat, { audio: { url: mepdia.dl_link }, mimetype: 'audio/mpeg', fileName: `${mepdia.title}.mp3` }, { quoted: m })
               break
     case 'getvideo':
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
               if (!m.quoted) return m.reply('Reply Pesan Hasil Dari ytsearch')
               if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
               let urps = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
               if (!urps) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1
		       }
               m.reply(mess.wait)
               let qualyity = args[1] ? args[1] : '360p'
               let getvideo = await ytv(urps[text - 1], qualyity)
               if (getvideo.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(mepdipa))
               Resta.sendMessage(m.chat, { video: { url: getvideo.dl_link }, mimetype: 'video/mp4', fileName: `${getvideo.title}.mp4`, caption: `⭔ Title : ${getvideo.title}\n⭔ File Size : ${getvideo.filesizeF}\n⭔ Url : ${urps[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
               break
/*MENU ISLAMI*/
     case 'jadwalsholat':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!isPrems && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
               if (!q) return m.reply(`Gunakan Format : ${command} Nama Kota`)
               await m.reply(mess.wait)
               api2.jadwalsholat(`${q}`) 
              .then(data => {
               let text =`*🔰 JADWALSHOLAT🔰*\n\n`
               text +=`*Tanggal*: ${result.tanggal}\n`
               text +=`*Imsyak*: ${result.imsyak}\n`
               text +=`*Subuh*: ${result.subuh}\n`
               text +=`*Dzuhur*: ${result.dzuhur}\n`
               text +=`*Ashar*: ${result.ashar}\n`
               text +=`*Maghrib*: ${result.maghrib}\n` 
               text +=`*Isya*: ${result.isya}\n`
               m.reply(text)
               if (!isPrems) {global.db.data.users[m.sender].limit -= 1
		       }
               }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
               break
/*GROUP SETTINGS*/
    case 'group': {
	          if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.isGroup) return m.reply(mess.group)
              if (!isBotAdmins) return m.reply(mess.botAdmin)
              if (!isAdmins) return m.reply(mess.admin)
              if (args[0] === 'disable'){
              await Resta.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
              } else if (args[0] === 'enable'){
              await Resta.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
              } else {
              buttonsgroup = [
              { buttonId: `${prefix + command} enable`, buttonText: { displayText: 'Open' }, type: 1 },
              { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'Close' }, type: 1 }
              ]
              await Resta.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
               }
               }
               break
     case 'antivionce':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = true
               m.reply(`Antivionce Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = false
               m.reply(`Antivionce Berhasil Di Nonaktifkan !`)
               } else {
               buttonsantilin = [{ buttonId: `${prefix + command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
               await Resta.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
               }
               break
    case 'welcomegroup':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].welcome) return m.reply(`Welcome Aktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = true
               m.reply(`Welcome Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].welcome) return m.reply(`Welcome Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = false
               m.reply(`Welcome Berhasil Di Nonaktifkan !`)
               } else {
               buttonsantilin = [{ buttonId: `${prefix + command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
               await Resta.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
               }
               break
     case 'antilinkgroup':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = true
               m.reply(`Antilink Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = false
               m.reply(`Antilink Berhasil Di Nonaktifkan !`)
               } else {
               buttonsantilin = [{ buttonId: `${prefix + command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
               await Resta.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
               }
               break
    case 'antiwame':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
               global.db.data.chats[m.chat].wame = true
               m.reply(`${command} Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].wame) return m.reply(`Sudah Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].wame = false
               m.reply(`${command} Berhasil Di Nonaktifkan !`)
               } else {
               buttonsantilin = [{ buttonId: `${prefix + command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
               await Resta.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
               }
               break
     case 'antilinknokick':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antilink2) return m.reply(`Sudah Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink2 = true
               m.reply(`Fitur Delete Linkgroup Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antilink2) return m.reply(`Sudah Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink2 = false
               m.reply(`Fitur Delete Linkgroup Berhasil Di Nonaktifkan !`)
               } else {
               buttonsantilin = [{ buttonId: `${prefix + command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${prefix + command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
               await Resta.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
               }
               break
     case 'ephemeral':
	           if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === '1') {
               await Resta.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '7') {
               await Resta.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '90') {
               await Resta.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === 'off') {
               await Resta.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else {
               let sections = [
               {
               title: "CHANGE EPHEMERAL GROUP",
               rows: [
               {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
               {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
               {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
               {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Resta.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, Resta.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
                break
      case 'leave':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!isAdmins) return m.reply(mess.admin)
                await Resta.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply('Fitur Error ❎'))
                break
      case 'linkgroup':
      case 'linkgc':
      	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                let response = await Resta.groupInviteCode(m.chat)
                Resta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                break
      case 'revoke':
        	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                await Resta.groupRevokeInvite(from)
                m.reply(mess.done)
                break
      case 'kick':
       	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
      case 'promote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
      case 'demote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
      case 'setname': case 'setsubject':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
      case 'setdesc': case 'setdesk':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
      case 'setppgroup': case 'setppgrup': case 'setppgc':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let mehdia = await Resta.downloadAndSaveMediaMessage(quoted)
                await Resta.updateProfilePicture(m.chat, { url: mehdia }).catch((err) => fs.unlinkSync(mehdia))
                m.reply(mess.done)
                break
      case 'tagall':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                let teks = `*👥 Tag All By Admin*\n\n🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `乂 @${mem.id.split('@')[0]}\n`
                }
                Resta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                break
      case 'hidetag':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                Resta.sendMessage(m.chat, { text : q ? q : 'kosong' , mentions: participants.map(a => a.id)}) 
                break
       case 'delete': case 'del':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!isAdmins) return m.reply(mess.admin)
                 if (!m.quoted) throw m.reply('reply pesnya') 
                 let { chat, fromMe } = m.quoted
                 Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                break
/*Kerang menu*/
case 'tembakpasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.isGroup) return m.reply(mess.group)
              if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
              if(isNaN(number)) return m.reply(`_*Nomor tidak valid.*_`)
              if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
              try {
              if(text) {
              user = number + '@s.whatsapp.net'
              } else if(m.quoted.sender) {
              user = m.quoted.sender
              } else if(m.mentionedJid) {
              user = number + '@s.whatsapp.net'
              }  
              } catch (e) {
              } finally {
              let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
              let participants = m.isGroup ? groupMetadata.participants : []
              let users = m.isGroup ? participants.find(u => u.id == user) : {}
              if(!users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
              if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
              if(user === Resta.user.id) return m.reply( `_*Tidak bisa berpacaran dengan saya. :')*_`)
              if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")  
              if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
              Resta.sendTextWithMentions(m.chat,`Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nSilahkan putus dulu (ketik .putuspasangan untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m,{contextInfo: {mentionedJid: [user,global.db.data.users[m.sender].pasangan]}})
              }else if(global.db.data.users[user].pasangan != ""){
              var pacar = global.db.data.users[user].pasangan
              if (global.db.data.users[pacar].pasangan == user){
              if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return Resta.sendText(m.chat,`Anda sudah berpacaran dengan @${pacar.split('@')[0]}`,m,{contextInfo: {mentionedJid: [pacar]}})
              Resta.sendTextWithMentions(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pasangan lain!`,m,{contextInfo:{ mentionedJid: [user,pacar]}})
              }else{
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }else if (global.db.data.users[user].pasangan == m.sender){
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 😉`,m,{contextInfo: {mentionedJid: [user] }})
              }else {
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }
              break
   case 'terimapasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
             const format = num => {
             const n = String(num),
             p = n.indexOf('.')
             return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => p < 0 || i < p ? `${m},` : m)
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
             if(isNaN(number)) return m.reply( `_*Nomor tidak valid.*_`)
             if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.jid == user) : {}
             if(users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
             if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
             if(user === Resta.user.jid) return m.reply(`_*Tidak bisa berpacaran dengan saya. :')*_`)
             if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")   
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: {mentionedJid: [user]}})
             }else{
             global.db.data.users[m.sender].pasangan = user
             Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]}  ❤️ @${m.sender.split('@')[0]} 😉`,m,{contextInfo:{ mentionedJid: [m.sender,user]}})
             }
             }	
             break
  case 'cekpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if(number.length > 15 || (number.length < 9 && number.length > 0)) return m.reply(`Maaf, Nomor yang anda masukan salah!`)
             if (!text && !m.quoted){
             user = m.sender
             orang = "Kamu"
             }else if(text) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             orang = "Orang yang kamu balas"
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             }
             if (typeof global.db.data.users[user] == "undefined"){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (global.db.data.users[user].pasangan == "") {
             Resta.sendTextWithMentions(m.chat, `${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun\n\n*Ketik .tembakpasangan @user untuk menembak seseorang*`, m)
             }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${prefix}ikhlasinpasangan* untuk mengikhlaskan!`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }else {
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} ❤️`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }
             break
  case 'putuspasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             ayg = global.db.data.users[m.sender]
             if(ayg.pasangan == ""){
             return m.reply(`Anda tidak memiliki pasangan.`)
             } 
             pacar = global.db.data.users[global.db.data.users[m.sender].pasangan]
             if (typeof pacar == "undefined"){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             }
             if (m.sender == pacar.pasangan){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             pacar.pasangan = ""
             }else {
             m.reply(`Anda tidak memiliki pasangan.`)
             }
             break
  case 'tolakpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return Resta.sendText(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)  
             if(isNaN(number)) return Resta.sendText(m.chat, `Nomor yang anda masukan salah!`, m)
             if(number.length > 15) return Resta.sendText(m.chat, `Format salah!`, m)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.id == user) : {}
             if(users) return m.reply(`Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`)
             if(user === m.sender) return m.reply(`Tidak bisa berpacaran dengan diri sendiri!`)
             if(user === Resta.user.jid) return m.reply(`*Tidak bisa berpacaran dengan saya t_t`)    
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: { mentionedJid: [user]}})
             }else{
             global.db.data.users[user].pasangan = ""
             Resta.sendTextWithMentions(m.chat,`Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`,m,{contextInfo: {mentionedJid: [user]}})
             }
             }
             break
   case 'ikhlasinpasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if (global.db.data.users[m.sender].pasangan == "") return m.reply( `Kamu sedang tidak menembak siapapun!`)
             if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return Resta.sendTextWithMentions(m.chat, `Kamu telah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             Resta.sendTextWithMentions(m.chat, `Kamu sudah mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             global.db.data.users[m.sender].pasangan = ""
             break
			default:
			break
				}
			}
		}
	} catch (err) {
	console.log("error di bagian newbot.js " + util.format(err))
	} finally {
 }
}
global.dfail = (type, m, conn) => {
	var msg = {
		rowner: '```Oɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴀᴄᴄᴇꜱꜱ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ!!```',
		owner: '```Oɴʟʏ ᴏᴡɴᴇʀ ʙᴏᴛ ᴄᴀɴ ᴀᴄᴄᴇꜱꜱ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ!!!```',
		mods: '```Oɴʟʏ ᴍᴏᴅᴇʀᴀᴛᴏʀ ᴄᴀɴ ᴀᴄᴄᴇꜱꜱ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ!!```',
		premium: 'Pᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀ _*Pʀᴇᴍɪᴜᴍ*_ !',
		group: '```Pᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ɢʀᴜᴘ!```',
		private: '```Pᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ Cʜᴀᴛ Pʀɪʙᴀᴅɪ!```',
		admin: 'Pᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ *Aᴅᴍɪɴ* ɢʀᴜᴘ!',
		botAdmin: 'Jᴀᴅɪᴋᴀɴ ʙᴏᴛ ꜱᴇʙᴀɢᴀɪ *Aᴅᴍɪɴ* ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ!',
		unreg: 'Sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴍᴇɴɢᴇᴛɪᴋ:\n\n*#verifikasi ɴᴀᴍᴀ.ᴜᴍᴜʀ*\n\nCᴏɴᴛᴏʜ: *#verifikasi Mᴀɴᴜꜱɪᴀ.16*',
		restrict: 'Fɪᴛᴜʀ ɪɴɪ ᴅɪ *ᴅɪꜱᴀʙʟᴇ*!'
	} [type]
	if (msg) return m.reply(msg)
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.cyanBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})