const express = require("express");

const app = express();
const { sequelize } = require('./models');

sequelize.sync().then(() => {
  console.log(">> DB 연결 성공");
  app.listen(3085, () => {
    console.log(">> 규몽이츠 서버실행중");
    console.log(">> http://localhost:3085");
  });
}).catch(err => {
  console.error(err);
});