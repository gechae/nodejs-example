var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'title': "https://dundun-dev.tistory.com/64?category=725300"});
});

module.exports = router;
