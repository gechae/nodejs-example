const express = require('express');
const router = express.Router()

const controller = require('../../controller/v1/user.controller');

router.route('/').post(controller.get)

module.exports = router