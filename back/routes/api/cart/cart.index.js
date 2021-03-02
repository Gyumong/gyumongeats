const router = require('express').Router();
const {
  addMenu,
  getCartInfo,
  updateMenuQuantity,
  deleteMenu,
  getMenuAndPrice
} = require('./cart.controller');

router.post('/add', addMenu);
router.get('/info', getCartInfo);
router.patch('/update-quantity', updateMenuQuantity);
router.delete('/del', deleteMenu);
router.get('/cnt-price', getMenuAndPrice);

module.exports = router;