const router = require('express').Router();
const {
  addMenu
} = require('./cart.controller');

router.post('/add', addMenu);

module.exports = router;