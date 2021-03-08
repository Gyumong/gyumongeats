const router = require('express').Router();
const {
  takeOrder
} = require('./order.controller');

router.post('/take', takeOrder);

module.exports = router;