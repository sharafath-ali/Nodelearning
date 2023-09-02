const path = require("path");
const PORT = process.env.PORT || 3500;
const express = require("express");
const app = express();
app.get("^/$|index(.html)?", (req, res) => {
   console.log("get");
   //res.send('hi')  //it is just a message
   // res.sendFile('./views/index.html',{root:__dirname})
   res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
   res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
   res.redirect(301,"/new-page.html"); //301 is real status code for permenent redirect
});

//chaining method 1
app.get('/hello(.html)?', (req,res,next)=>{
   res.send('hello')
    next()
 },(req,res)=>{
    
    console.log('attempted to log hello.html ')
 })
 

 //chaining method 2

 const one=(req,res,next)=>{
   console.log('one');
   next()
 }

 const two=(req,res,next)=>{
   console.log('two')
   next()
 }
 
 const three=(req,res)=>{
   console.log('three')
   res.send('finished')
 }

 app.get('/chain(.html)?',[one,two,three])
 

app.get("/*", (req, res) => {
   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});



app.listen(PORT, () => console.log(`server running on ${PORT}`));
