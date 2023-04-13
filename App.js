const path=require('path')
const url=require('url')
const fs=require('fs')

const filelocation=path.join(__dirname,'app.js')
console.log('filename === ',__filename)
console.log('dirname === ',__dirname)
//console.log(module)
//console.log(exports)
//console.log(require)
console.log('filelocation === ',filelocation)
console.log('filename ===  ',path.basename(filelocation))
const fileExt=path.extname(path.basename(filelocation))
console.log(fileExt)


const address='https://localhost:5000'
const parsedUrl=url.parse(address,true)
console.log(parsedUrl.host)
console.log(parsedUrl.hostname)
console.log(parsedUrl.port)
console.log(parsedUrl.slashes)
console.log(parsedUrl.protocol)
console.log(parsedUrl.pathname)


fs.writeFile('message.text','hello node learners' ,(err)=>{
    if (err) throw err;
    console.log('file has been written')
})