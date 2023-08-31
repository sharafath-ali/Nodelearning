const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyy MM dd\t HH : mm: ss')}`
  const logItem = `${dateTime}\t ${uuid()}\t ${message} \t`
  console.log(logItem);
  try {
    if (!fs.existsSync('./logs')) {
     await fs.mkdir('./logs', (err) => {
        if (err) console.log(err);
        console.log('directory created');
      })
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
  } catch (err) {
    console.log(err);
    throw (err);
  }
}

module.exports = logEvents;