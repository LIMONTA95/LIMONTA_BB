import { watchFile, unwatchFile } from 'fs'  
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js' 

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰   

global.owner = [
['523333936156', 'LIMONTA_BB ', true], 
['523313006703', '𝙊𝙬𝙣𝙚𝙧 (1) 💻', true],  
['553313006703', '𝙊𝙬𝙣𝙚𝙧 (2) 💻', true]  
]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = []
   
  
//⊱ ━━━━━.⋅ IDIOMA : LENGUAJE ⋅.━━━━ ⊰  
//Agrega el Idioma que quieres que tenga LIMONTA_BB 
//Add the language you want LIMONTA_BB to have
//  es = Español         id = Bahasa Indonesia
//  en = English         pt = Português 
//  ar = عرب  

global.lenguajeGB = es  //Idioma de LIMONTA_BB, Ejemplo: es | en | pt...
 
//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.openai_key = 'sk-0'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-3'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'SGWN'
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'LIMONTA_BB '
global.author = 'LIMONTA_BB 

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.official = [ // Agregate si eres Owner
['523313006703', 'LIMONTA 💻', 1], 
['523313006703', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
['523313006703', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],
['523313006703', '𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗢𝗳𝗶𝗰𝗶𝗮𝗹', 1],
['523313006703', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]] 

global.mail = '' //agrega tú correo
global.desc = '' // LIMONTA_BB md ACTIVO!!
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪México 

global.vs = '1.0.1'
global.vsJB = '3.0'

global.gt = 'LIMONTA_BB 
global.yt = ''
global.yt2 = ''
global.ig = ''
global.md = ''
global.fb = ''

global.nna =  //UPDATE GATABOT
global.nna2 = '' //Help
global.nn = '' //Grupo 1
global.nnn = '' //Grupo 2
global.nnnt = '' //Grupo 3
global.nnntt = '' //Grupo 4
global.nnnttt = '' //Grupo 5
global.nnnttt2 = '' //Grupo 6 COL
global.nnnttt3 = '' //Grupo 7 COL
global.nnnttt4 = '' //Grupo 8 COL
global.nnnttt5 = '' //Grupo 9 COL
global.paypal = ''
global.asistencia = '' //Dudas? escríbeme...

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = 'LIMONTA_BB 🌻 : LIMONTA_BB '
global.igfg = 'LIMONTA_BB 
//global.wait = lenguajeGB.smsWait()
global.nomorown = owner[0][0]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ IMG ⋅.━━━━ ⊰

global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/img4.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://i.imgur.com/AwlL9kc.jpeg'
global.img2 = 'https://i.imgur.com/p18q1Ok.jpeg'

global.img3 = 'https://i.imgur.com/01Z8a0a.jpeg' //ft rectangular

//global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' //prem   //no
//global.img4 = 'https://i.imgur.com/i0pccuo.jpg' //prem   //no

global.img5 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img6 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img7 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img8 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img9 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'

global.img10 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img11 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img12 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img13 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img14 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img15 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'

//global.img16 = 'https://i.imgur.com/11MRjo4.jpeg' //+18   //no

global.img17 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img18 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img19 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img20 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'
global.img21 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067'

global.img21 = 'https://camo.githubusercontent.com/3b7cf23135ed26b35bbbeed0310949593fba708d6227b2204b26f6c003812473/68747470733a2f2f652e746f7034746f702e696f2f705f323639307161376679302e6a7067' //paypal

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4, nnnttt5, md, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.wait = lenguajeGB['smsMeWait']()

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
