const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyy MM dd\t HH : mm: ss')}`
  const logItem = `${dateTime}\t ${uuid()}\t ${message}`
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname,'..','logs'))) {
     await fs.mkdir(path.join(__dirname,'..','logs'), (err) => {
        if (err) console.log(err);
        console.log('directory created');
      })
    }
    await fsPromises.appendFile(path.join(__dirname, '..' ,'logs', 'eventLog.txt'), logItem)
  } catch (err) {
    console.log(err);
    throw (err);
  }
}

const logger=(req,res,next)=>{
  logEvents(`${req.method} \t ${req.headers.origin} \t ${req.url}\n `,'reqLog.txt')
  console.log(`${req.method} ${req.path}`);
  next()
}
module.exports ={ logger,logEvents};