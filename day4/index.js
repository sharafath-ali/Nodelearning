const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("gdhdudh");
});
app.listen(3000);
