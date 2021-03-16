const express = require('express');
const router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  //res.render("main.ejs")
  //res.json({'title': "https://dundun-dev.tistory.com/64?category=725300"});
});*/

router.use('/', require('./users.route'));

module.exports = router;
