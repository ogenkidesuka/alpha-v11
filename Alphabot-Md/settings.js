const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "vams_Mdོ" //namabot kalian
global.ownername= "Tn_vams×፝֟͜×" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/ZeeoneOfc" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "masterogenki@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6283894435611" // nomor wa kalian
global.ownernomerr = "+6283894435611" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6283894435611","6285878070363",""] //ganti agar fitur owner bisa di gunakan
global.packname = '© Vams-Mdོ' //sticker wm ubah
global.author = 'crate by Tn_vams' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'done tod',
    admin: 'cuma bisa buat admin -_-',
    botAdmin: 'meh bot adminin dlu',
    owner: 'huuuu cuma buat owner doang :v',
    group: 'bisa nya di grup -_-',
    private: 'di pm bisa nya :v',
	bot: 'cuma bisa buat pengguna bot',
    errtoimg: 'sorry blum bisa :v',
    wait: 'sabar tod proses dlu',
	lockCmd: 'blum di aktifin sama owner _-',
	example1: 'Selamat Datang beban @user Di Group @subject Jangan Lupa Baca Rules ya ngen :v @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
