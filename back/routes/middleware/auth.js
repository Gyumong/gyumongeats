const jwt = require('jsonwebtoken');
require('dotenv').config();

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
  const accessToken = req.headers['x-access-token'] || req.query.token;

  console.log(accessToken);
  
  if (!accessToken) {
    return res.status(401).json({
      success: false,
      errorMessage: "access token이 없습니다."
    });
  }

  const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      });
    });
  };

  const onError = (err) => {
    res.status(401).json({
      success: false,
      errorMessage: err
    });
  };

  verifyToken(accessToken)
    .then(decoded => {
      req.decoded = decoded;
      next();
    })
    .catch(onError);
};