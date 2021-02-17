const router = require('express').Router();
const {
  menuByRestaurant,
  menuCategory
} = require('./menu.controller');

router.get('/all/:id', menuByRestaurant);
router.get('/menu-ctg', menuCategory);

module.exports = router;