const path = require('path');
const PORT = process.env.PORT || 3500;
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
   console.log('get')
   res.send('hi')
})
app.listen(PORT, () => console.log(`server running on ${PORT}`))
