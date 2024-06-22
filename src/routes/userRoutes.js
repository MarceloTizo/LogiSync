const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/users', userController.listUsers);

module.exports = router;