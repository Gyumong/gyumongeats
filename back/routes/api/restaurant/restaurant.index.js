const router = require('express').Router();
const {
  getTagCategory,
  allRestaurants,
  restaurantByCategory
} = require('./restaurant.controller');

router.get('/tag-ctg', getTagCategory);
router.get('/all', allRestaurants);
router.get('/rest-by-ctg/:ctg', restaurantByCategory);

module.exports = router;