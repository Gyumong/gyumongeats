const router = require('express').Router();
const auth = require('./api/auth/auth.index');
const store = require('./api/store/store.index');

router.use('/auth', auth);
router.use('/store', store);

module.exports = router;