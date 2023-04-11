var express = require('express');
var router = express.Router();
// import trips model
const Trip = require('../models/trips');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
