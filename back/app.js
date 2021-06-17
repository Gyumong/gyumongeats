const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const { sequelize } = require("./models");
const PORT = process.env.PORT || 3085;

sequelize
  .sync()
  .then(() => {
    console.log(">> DB Connection Successful");
    app.listen(PORT, () => {
      console.log(">> Gyumongeats Server Running...");
      console.log(`>> http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

if(process.env.NODE_ENV === 'production') {
  app.use(logger("combined"));
} else if(process.env.NODE_ENV === 'development') {
  app.use(logger("dev"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: true
  }
}));
app.use('/img/thumbnail', express.static(__dirname + '/img/thumbnail'));
app.use('/img/menu', express.static(__dirname + '/img/menu'));

app.use("/api", require("./routes"));
