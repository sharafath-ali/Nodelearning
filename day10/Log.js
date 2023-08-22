const { format } =require('date-fns')
const {v4:uuid} = require('uuid')
const fs=require('fs')
const fsPromise=require('fs').promises()



console.log(format(new Date(),'yyyy MM dd\t HH : mm: ss'))
console.log(uuid())