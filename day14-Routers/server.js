const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./middleware/LogEvents");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

//middleware is anything between req and res
// middleware = buildin, custom , middleware from thirdparties
//custom  middleware logger

app.use(logger);

const whitelist = ["https://www.google.com", "http://localhost:3500"];
const corsOptions = {
   origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
         callback(null, true);
      } else {
         callback(new Error("Not allowed by cors"));
      }
   },
   optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//buildin middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/',express.static(path.join(__dirname, "/public")));
app.use('/subdir',express.static(path.join(__dirname, "/public")));

//routes
app.use('/',require('./Routes/root'))
app.use("/subdir", require("./Routes/subdir"));
app.use('/employees',require('./Routes/api/employees'))



app.use(errorHandler);

app.get("/*", (req, res) => {
   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
