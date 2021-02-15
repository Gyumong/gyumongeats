const router = require('express').Router();
const customer = require('./api/customer/customer.index');
const restaurant = require('./api/restaurant/restaurant.index');

router.use('/customer', customer);
router.use('/restaurant', restaurant);

module.exports = router;