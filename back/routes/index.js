const router = require('express').Router();
const customer = require('./api/customer/customer.index');
const store = require('./api/store/store.index');

router.use('/customer', customer);
router.use('/store', store);

module.exports = router;