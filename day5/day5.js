const os=require('os')
const path=require('path')
const {add,sub}=require('./math')

console.log(os.version())
console.log(os.type())
console.log(os.homedir())

console.log(__dirname,'path.dirname(__filename)')
console.log(__filename,'path.dirname(__filename)+path.basename(__filename)')

console.log(path.dirname(__filename),'===__dirname')
console.log(path.extname(__filename),'.js/.c/.py')
console.log(path.basename(__filename),'filename')

console.log(add(2,4))
console.log(sub(3,1))
// console.log(mul(1,4))

const fs=require('fs')

fs.readFile('./g.txt',(err,data)=>{
    if(err) throw err;
    return console.log(data.toString(),'given')
})

console.log('hi')
fs.readFile(path.join(__dirname,'g.txt'),(err,data)=>{
    if(err) throw err;
    return console.log(data.toString(),'path') //more speed
})


fs.writeFile('./NEWFILE.txt','this is a new file',(err)=>{
    if(err) throw err;
   console.log('file is writed')

    fs.appendFile(path.join(__dirname,'./NEWFILE.txt'),' this is',(err)=>{
        if(err) throw err;
        console.log('modified the file content') //more speed
    
        fs.rename(path.join(__dirname,'./NEWFILE.txt'),' renamed.txt',(err)=>{
            if(err) throw err;
            return console.log('file is renamed') //this is cb hell,we can avoid it using async await in js 
        })
        
    })
})



