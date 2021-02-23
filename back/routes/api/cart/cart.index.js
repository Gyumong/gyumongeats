const router = require('express').Router();
const {
  addMenu,
  getCartInfo
} = require('./cart.controller');

router.post('/add', addMenu);
router.get('/info', getCartInfo);

module.exports = router;