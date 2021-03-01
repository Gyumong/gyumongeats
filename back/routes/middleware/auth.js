/** @format */

const jwt = require("jsonwebtoken");
require("dotenv").config();

const { Customer } = require("../../models");

/**
 * 먼저 엑세스 토큰을 체크헤준다.
 * 만약 토큰이 존재하지 않을 시, 403코드를 보내고 종료.
 * 토큰이 존재하면 유효성 체크
 * O -> decode값 전송
 * X -> 재발급 받아야 하므로 리프레시 토크을 이용한다.
 *
 * 리프레시 토큰을 사용해야하므로 먼저 토큰의 존재 유무를 정한다.
 * X -> 그냥 로그아웃된것이므로 403코드를 보내고 종료.
 * O -> 토큰이 존재하므로 유효성 체크
 *      O -> 가져온 DB정보로 다시 엑세스 토큰을 발급
 *      X -> 리프레시 토큰도 재발급 받아야하므로 403코드를 전송한다.
 */

exports.jwtCheckMiddleware = (req, res, next) => {
  // const accessToken = req.headers['x-access-token'] || req.query.token;
  const email = req.body.email;
  const accessToken = req.cookies.accessToken;
  console.log(accessToken);
  if (!accessToken) {
    return res.status(401).json({
      success: false,
      message: "로그인 되어 있지 않습니다.",
    });
  }

  const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) reject(err); // 토큰 만료 -> 재발급
        resolve(decoded); // 토큰 유효 -> auth 인증 완료
      });
    });
  };

  const reissueAccessToken = async (customerInfo) => {
    try {
      const accessToken = jwt.sign(
        {
          customerEmail: customerInfo.userId,
          customerName: customerInfo.name,
          customerPhone: customerInfo.phone,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "15s",
          issuer: "gyumongeats",
          subject: "customer_info",
        }
      );
      res.cookie("accessToken", accessToken, {
        maxAge: 15 * 1000,
        httpOnly: true,
      });
      return res.status(201).json({
        success: true,
        accessToken,
      });
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "refresh 토큰이 존재하지 않습니다.",
      });
    }
  };

  const onError = (err) => {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  };

  verifyToken(accessToken)
    .then((decoded) => {
      req.decoded = decoded;
      next();
    })
    .catch(async () => {
      const [customer] = await Customer.findAll({ where: { userId: email } });
      const customerInfo = customer.dataValues;

      verifyToken(customerInfo.refreshToken)
        .then(reissueAccessToken(customerInfo))
        .catch(onError);
    });
};
