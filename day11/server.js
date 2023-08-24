
const logEvents=require('./LogEvents')
const EventEmitter=require('events')

class myEmitter extends EventEmitter {};

const myEmitterobj=new myEmitter();

myEmitterobj.on('log',(msg)=>logEvents(msg));

setTimeout(() => {
    myEmitterobj.emit('log','log event emitted')
}, 2000);