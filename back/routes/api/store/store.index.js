const router = require('express').Router();
const {
  getTagCategory,
  getMenuCategory,
  allStores,
  storeByCategory,
  storeDetailAndMenu,
  getOneMenu
} = require('./store.controller');

router.get('/tag-ctg', getTagCategory);
router.get('/menu-ctg', getMenuCategory);
router.get('/all', allStores);
router.get('/store-by-ctg/:ctg', storeByCategory);
router.get('/info-and-menu', storeDetailAndMenu);
router.get('/menu', getOneMenu);

module.exports = router;