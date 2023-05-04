const https=require('https');
const path=require('path')
const fs=require('fs')
const server=https.createServer((req,res)=>{
    //console.log(req)
    if(req.url==='/'){
    res.writeHead(200,{'CONTENT-TYPE':'text/html'})
    res.write('<h1>this is the message to the user 1</h1>')
    res.end();
    }
    if(req.url==='/home'){
        res.write('this is the message to the usffffer 2')
        res.end();
    }
    fs.readFile(path.join(__dirname,'display.html'),(err,data)=>{
    res.writeHead(200,{'CONTENT-TYPE':'text/html'})
    res.write(data)
    res.end();
    })
})
server.listen(3000,()=>{console.log('server started message display using this callback')})