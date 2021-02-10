const router = require('express').Router();
const { jwtCheckMiddleware } = require('../../middleware/auth');
const {
  register,
  login,
  jwtCheck
} = require('./customer.controller');

router.post('/signup', register);
router.post('/login', login);
router.get('/check', jwtCheckMiddleware, jwtCheck);

module.exports = router;