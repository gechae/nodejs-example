const express = require('express');
const router = express.Router();

const controller = require('../controller/user.controller');

router.route('/').get(controller.getMain)
router.route('/getUser').get(controller.getUser)
router.route('/test1').get(controller.test_func)
module.exports = router