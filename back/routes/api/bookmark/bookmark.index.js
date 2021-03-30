const router = require('express').Router();
const {
  addBookmark,
  getBookmarkList
} = require('./bookmark.controller');

router.post('/add', addBookmark);
router.get('/list', getBookmarkList);

module.exports = router;