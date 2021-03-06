const router = require('express').Router();
const auth = require('./api/auth/auth.index');
const store = require('./api/store/store.index');
const cart = require('./api/cart/cart.index');
const order = require('./api/order/order.index');

router.use('/auth', auth);
router.use('/store', store);
router.use('/cart', cart);
router.use('/order', order);

module.exports = router;