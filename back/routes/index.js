const router = require('express').Router();
const auth = require('./api/auth/auth.index');
const store = require('./api/store/store.index');
const cart = require('./api/cart/cart.index');

router.use('/auth', auth);
router.use('/store', store);
router.use('/cart', cart);

module.exports = router;