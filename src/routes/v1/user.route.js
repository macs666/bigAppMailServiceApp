const express = require('express');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .get(userController.createUser);

module.exports = router;