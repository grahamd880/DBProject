var express = require('express');
var router = express.Router();
var table = ['employee','customer','item','reviews']

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tables: table });
});

module.exports = router;
