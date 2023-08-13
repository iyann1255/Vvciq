const axios = require('axios'),
   cheerio = require('cheerio'),
   cookie = require('cookie'),
   FormData = require('form-data')

module.exports = url => {
   return new Promise(async (resolve, reject) => {
      try {
         let Go = await fetch('https://fbreels.app/en', {
            method: 'GET',
            headers: {
               'User-Agent': 'GoogleBot'
            }
         })
         let isCookie = Go.headers.get('set-cookie').split(',').map((v) => cookie.parse(v)).reduce((a, c) => {
            return {
               ...a,
               ...c
            }
         }, {})
         let isHtml = await Go.text()
         isCookie = {
            '.AspNetCore.Antiforgery.oY8VhknnI_Q': isCookie['.AspNetCore.Antiforgery.oY8VhknnI_Q'],
         }
         isCookie = Object.entries(isCookie).map(([name, value]) => cookie.serialize(name, value)).join(' ')
         let $ = cheerio.load(isHtml)
         let token = $('input[name=__RequestVerificationToken]').attr('value')
         let form = new FormData
         form.append('__RequestVerificationToken', token)
         form.append('q', url)
         let json = await (await fetch('https://fbreels.app/api/ajaxSearch', {
            method: 'POST',
            headers: {
               Accept: '*/*',
               'Accept-Language': 'en-US,enq=0.9',
               'User-Agent': 'GoogleBot',
               Cookie: isCookie,
               'X-CSRF-TOKEN': token,
               ...form.getHeaders()
            },
            body: form
         })).json()
         let ch = cheerio.load(json.data)
         let data = []
         ch('tr').each((i, e) => data.push({
            type: /HD/.test($(e).find('td.video-quality').text()) ? 'HD' : 'SD',
            url: $(e).find('td > a').attr('href'),
            response: $(e).find('td > a').attr('href') ? 200 : 404
         }))
         const result = data.filter(v => v.url)
         if (result.ength == 0) return resolve({
            creator: global.creator,
            status: false
         })
         return resolve({
            creator: global.creator,
            status: true,
            data: result
         })
      } catch (e) {
         console.log(e)
         resolve({
            creator: global.creator,
            status: false
         })
      }
   })
}