const express = require('express');

//controller
const {loginUser,signUser} = require('../controllers/userController');

const router = express.Router();

//login route
router.post('/login',loginUser)

//signup route
router.post('/signup',signUser)

module.exports = router;