const router = require('express').Router();
const {
  allRestaurants,
  restaurantByCategory
} = require('./restaurant.contoller');

router.get('/all', allRestaurants);
router.get('/rest-by-ctg/:ctg', restaurantByCategory);

module.exports = router;