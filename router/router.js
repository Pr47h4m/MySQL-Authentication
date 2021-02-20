const express = require('express');

const controller = require('../controllers/controller')

const router = express.Router();

router.post('/signUp', controller.createUser);

router.post('/signIn', controller.signInUser)

module.exports = router;