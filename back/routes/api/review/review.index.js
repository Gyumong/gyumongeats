const router = require('express').Router();
const {
  writeReview,
  getReviewList
} = require('./review.controller');

router.post('/write', writeReview);
router.get('/list/:id', getReviewList);

module.exports = router;