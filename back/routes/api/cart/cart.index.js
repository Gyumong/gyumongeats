const router = require('express').Router();
const {
  addMenu,
  getCartInfo,
  updateMenuQuantity,
  deleteMenu
} = require('./cart.controller');

router.post('/add', addMenu);
router.get('/info', getCartInfo);
router.patch('/update-quantity', updateMenuQuantity);
router.delete('/del', deleteMenu);

module.exports = router;