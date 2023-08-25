const http = require('http');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;
const logEvents = require('./LogEvents')
const EventEmitter = require('events')

class Emitter extends EventEmitter { };

const myEmitterobj = new Emitter();

myEmitterobj.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    myEmitterobj.emit('log', 'log event emitted')
}, 2000);

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    let path;
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            path = path.join(__dirname, 'views', 'index.html');
            fs.readFile(path,'utf8',(err,data)=>{
                res.send('hi')
                return res.end(data)
            });
            break;
    }

});

server.listen(PORT, () => console.log(`server running on ${PORT}`))