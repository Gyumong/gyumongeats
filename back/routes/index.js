const router = require('express').Router();
const customer = require('./api/customer/customer.index');

router.use('/customer', customer);

module.exports = router;