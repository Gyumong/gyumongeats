const express = require("express");
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

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use('/img/thumbnail', express.static(__dirname + '/img/thumbnail'));
app.use('/img/menu', express.static(__dirname + '/img/menu'));

app.use("/api", require("./routes"));
