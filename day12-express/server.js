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

app.get("/*", (req, res) => {
   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
