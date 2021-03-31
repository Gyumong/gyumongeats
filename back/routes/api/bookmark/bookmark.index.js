const router = require('express').Router();
const {
  addBookmark,
  getBookmarkList,
  deleteBookmark
} = require('./bookmark.controller');

router.post('/add', addBookmark);
router.get('/list', getBookmarkList);
router.delete('/del', deleteBookmark);

module.exports = router;