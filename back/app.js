const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const { sequelize } = require('./models');

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./routes'));

sequelize.sync().then(() => {
  console.log(">> DB 연결 성공");
  app.listen(3085, () => {
    console.log(">> 규몽이츠 서버실행중");
    console.log(">> http://localhost:3085");
  });
}).catch(err => {
  console.error(err);
});