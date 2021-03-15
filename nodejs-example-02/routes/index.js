var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'title': "https://dundun-dev.tistory.com/64?category=725300"});
});

router.use('/v1', require('./v1'));

module.exports = router;
