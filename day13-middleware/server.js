const express = require('express');
const app = express();
const path = require('path');
const {logger,logEvents}=require('./middleware/LogEvents')

//middleware is anything between req and res
// middleware = buildin, custom , middleware from thirdparties
//custom  middleware logger
app.use(logger)
//buildin middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'/public')))

app.get("^/$|index(.html)?", (req, res) => {
   res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
   res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
   res.redirect(301,"/new-page.html"); 
});





app.get("/*", (req, res) => {
   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
