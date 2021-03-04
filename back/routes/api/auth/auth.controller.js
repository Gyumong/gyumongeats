/** @format */

const { Customer } = require("../../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const { email, password, name, phone } = req.body;

  try {
    const customer = await Customer.create({
      userId: email,
      password: password,
      name: name,
      phone: phone,
    });
    res.status(201).json({
      success: true,
      customer,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const customerCheck = (uid, pwd) => {
    return new Promise(async (resolve, reject) => {
      try {
        const [customer] = await Customer.findAll({
          where: {
            userId: uid,
          },
        });
        const customerInfo = customer.dataValues;
        if (customerInfo.password !== pwd) {
          reject(new Error("잘못된 비밀번호 입니다."));
        } else {
          resolve(customerInfo);
        }
      } catch (err) {
        reject(new Error("등록된 회원이 아닙니다."));
      }
    });
  };

  const issueToken = (customer) => {
    return new Promise((resolve, reject) => {
      const accessToken = jwt.sign(
        {
          customerEmail: customer.userId,
          customerName: customer.name,
          customerPhone: customer.phone,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "15s",
          issuer: "gyumongeats",
          subject: "customer_info",
        }
      );
      const refreshToken = jwt.sign({}, process.env.JWT_KEY, {
        expiresIn: "1d",
        issuer: "gyumongeats",
        subject: "customer_info",
      });
      const id = customer.userId;
      resolve({ accessToken, refreshToken, id });
    });
  };

  const processEachToken = (info) => {
    const { accessToken, refreshToken, id } = info;
    return new Promise(async (resolve, reject) => {
      await Customer.update(
        { refreshToken: refreshToken },
        {
          where: {
            userId: id,
          },
        }
      );
      resolve({ accessToken, refreshToken });
    });
  };

  const respond = (token) => {
    const { accessToken, refreshToken } = token;
    res.cookie('refreshToken', refreshToken, {
      maxAge: 24*60*60*1000,
      httpOnly: true
    });
    res.json({
      success: true,
      accessToken,
    });
  };

  const onError = (err) => {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  };

  customerCheck(email, password)
    .then(issueToken)
    .then(processEachToken)
    .then(respond)
    .catch(onError);
};

exports.jwtCheck = (req, res) => {
  const decoded = req.decoded;
  res.json({
    success: true,
    decoded,
  });
};

exports.reissueAccessToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  try {
    if(!refreshToken) throw "현재 로그인되어 있지 않습니다.";
    const { dataValues } = await Customer.findOne({ where: { refreshToken: refreshToken } });
    const accessToken = jwt.sign(
      {
        customerEmail: dataValues.userId,
        customerName: dataValues.name,
        customerPhone: dataValues.phone,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "15s",
        issuer: "gyumongeats",
        subject: "customer_info",
      },
    );
    res.status(200).json({
      success: true,
      accessToken
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

exports.logout = (req, res) => {
  try {
    if(!req.cookies.refreshToken) throw "현재 로그인되어 있지 않습니다.";
    res.clearCookie('refreshToken').status(200).json({
      success: true,
      msg: "성공적으로 로그아웃되었습니다."
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};