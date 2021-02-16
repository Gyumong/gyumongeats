const router = require('express').Router();
const customer = require('./api/customer/customer.index');
const restaurant = require('./api/restaurant/restaurant.index');
const menu = require('./api/menu/menu.index');

router.use('/customer', customer);
router.use('/restaurant', restaurant);
router.use('/menu', menu);

module.exports = router;