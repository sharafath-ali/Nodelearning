const { format } =require('date-fns')
const {v4:uuid} = require('uuid')
const fs=require('fs');
const fsPromises=require('fs').promises;
const path=require('path');

const logEvents= async(message)=>{
    const dateTime=`${format(new Date(),'yyyy MM dd\t HH : mm: ss')}`
    const logItem=`${dateTime}\t ${uuid()}\t ${message}`
    console.log(logItem);
    try{
      await fsPromises.appendFile(path.join(__dirname,'logs','eventLog.txt'),logItem)
    }catch(err){
      console.log(err);
      throw(err);
      
    }
}

console.log(format(new Date(),'yyyy MM dd\t HH : mm: ss'))
console.log(uuid())

module.exports=logEvents;