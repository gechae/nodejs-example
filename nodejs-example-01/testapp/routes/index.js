var express = require('express');
var router = express.Router();
const userController = require('../controllers');

/* GET home page. */
/*
router.get('/1', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/", function(req,res) {
  res.status(200).json({
    "success" : true
  });
});

router.get("/test", function(req,res){
  res.status(200).json({
    "message":"test"
  });
});

router.post('/post_test', function(req, res){
  const user_message = req.body.message;
  res.status(200).json({
    "message" : user_message
  });
});
*/

router.get('/', userController.basicAPI);
router.get('/test', userController.testAPI);
router.post('/post_test', userController.postTestAPI);

module.exports = router;
