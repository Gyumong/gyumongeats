const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.jwtCheckMiddleware = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.query.token;
  
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "로그인 되어 있지 않습니다.",
    });
  }

  const issueToken = new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  const onError = (error) => {
    res.status(403).json({
      success: 0,
      message: error.message,
    });
  };

  issueToken.then((decoded) => {
    req.decoded = decoded;
    next();
  }).catch(onError);
};