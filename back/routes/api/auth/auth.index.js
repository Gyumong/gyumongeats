const router = require('express').Router();
const { jwtCheckMiddleware } = require('../../middleware/auth');
const {
  register,
  login,
  jwtCheck,
  reissueAccessToken
} = require('./auth.controller');

router.post('/signup', register);
router.post('/login', login);
router.get('/check', jwtCheckMiddleware, jwtCheck);
router.get('/reissue', reissueAccessToken);

module.exports = router;