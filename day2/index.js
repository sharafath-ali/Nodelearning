const express= require('express')
const app=express()
const custommiddleware=(req,res,next)=>{
    console.log('middleware execute before server respond to users request')
    next()// to move to server response 
}
//app.use(custommiddleware) // to use in all routes
//express  start

app.get('/',(req,res)=>
{
res.send('<h1>home</h1>')
})


app.get('/about',custommiddleware,(req,res)=>
{
res.send('about')
})



app.listen(5000,()=>{console.log('server is running')})
//express end