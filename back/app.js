/** @format */

const express = require("express");
const userRouter =require('./routes/user');

const app = express();
app.get("/", (req, res) => {
  res.send("규몽이츠 서버");
});


app.use('/user',userRouter);
app.listen(3085, () => {
  console.log("규몽이츠 서버실행중");
});
