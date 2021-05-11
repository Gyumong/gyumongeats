const router = require('express').Router();
const {
  takeOrder,
  getPastOrderList
} = require('./order.controller');

router.post('/take', takeOrder);
router.get('/list', getPastOrderList);

module.exports = router;